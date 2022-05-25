#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {PipelineStack} from "../lib/pipeline-stack";

const app = new cdk.App();

new PipelineStack(app, "basic-auth-bug-pipeline", {
    codestarArn: "arn:aws:codestar-connections:eu-west-2:299854659728:connection/14962d1b-eec2-4c58-b3e4-61b29dcbfdbc",
    pipelineName: "basic-auth-bug-pipeline",
    repositoryName: "bgarreth/basic-auth-bug",
    branchName: "addcdk",
    accountId: "299854659728",
});
