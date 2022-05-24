#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {PipelineStack} from "../lib/pipeline-stack";

const app = new cdk.App();

new PipelineStack(app, "mijn-omgeving-frontend-pipeline", {
    codestarArn:
        "codestararn",
    pipelineName: "basic-auth-bug-pipeline",
    repositoryName: "leejjon/basic-auth-bug",
    branchName: "main",
    accountId: "",
});