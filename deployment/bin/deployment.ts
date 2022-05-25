#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {PipelineStack} from "../lib/pipeline-stack";

const app = new cdk.App();

new PipelineStack(app, "mijn-omgeving-frontend-pipeline", {
    codestarArn:
        "arn:aws:codestar-connections:eu-central-1:039085306114:connection/010d9616-2ce5-4d82-a61d-75938f7b0deb",
    pipelineName: "basic-auth-bug-pipeline",
    repositoryName: "leejjon/basic-auth-bug",
    branchName: "main",
    accountId: "",
});
