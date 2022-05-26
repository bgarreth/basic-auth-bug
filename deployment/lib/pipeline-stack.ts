import { Stack, StackProps, Stage, StageProps, Tags } from "aws-cdk-lib";
import { Construct } from "constructs";
import { pipelines } from "aws-cdk-lib";
import { WebAmplifyStack } from "./web-amplify-stack";

export interface AmplifyStageProps extends StageProps {
  branchName: string;
  stageName: string;
}

export class AmplifyStage extends Stage {
  constructor(scope: Construct, id: string, props: AmplifyStageProps) {
    super(scope, id, props);

    const repository = "https://github.com/bgarreth/basic-auth-bug";

    new WebAmplifyStack(this, "WebAmplifyStack", {
      appName: "basic-auth-bug",
      appDescription: "Frontend built using Next.js changed desc testing",
      branchName: props.branchName,
      stageName: props.stageName,
      repository: repository,
      username: "welcome",
      basicAuthPassword: "garreth",
    });
  }
}

export interface PipelineStackProps extends StackProps {
  repositoryName: string;
  pipelineName: string;
  codestarArn: string;
  branchName: string;
  accountId: string;
}

export class PipelineStack extends Stack {
  constructor(scope: Construct, id: string, props: PipelineStackProps) {
    super(scope, id, props);

    const pipeline = new pipelines.CodePipeline(this, "Pipeline", {
      pipelineName: props.pipelineName,
      // crossAccountKeys: true,
      synth: new pipelines.ShellStep("Synth", {
        input: pipelines.CodePipelineSource.connection(
          props.repositoryName,
          props.branchName,
          {
            connectionArn: props.codestarArn,
          }
        ),
        primaryOutputDirectory: "deployment/cdk.out",
        commands: ["cd deployment", "npm ci", "npm run build", "npx cdk synth"],
      }),
    });

    pipeline.addStage(
      new AmplifyStage(this, "NonProd", {
        branchName: props.branchName,
        stageName: "DEVELOPMENT",
      }),
    );
  }
}
