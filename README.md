Requirements:
- Git
- AWS CLI
- npm
- yarn (optional)
- cdk
- github account

To run this thing.

- Fork this project on github
- Clone it locally and checkout to the "addcdk" branch
- Create a codestar connection in your aws account: https://docs.aws.amazon.com/dtconsole/latest/userguide/connections-create-github.html
- Copy and paste the arn of this codestar connection in line 10 of the deployment.ts
- Create a secret in the secret manager of type other. Enter the key "GithubOauthToken" and value an Personal access token that you need to make on github (Developer Settings -> Personal access tokens)
- Give it a name (in my case "css-secrets") and save it
- Copy the arn of this secret and paste it in line 29 of the web-amplify-stack.ts
- Build the root of the project with yarn install and yarn build (or npm install but then you have to delete the yarn.lock file)
- Browse to the deployment folder and run "npm install" and "npm run build"
- Type "cdk ls" to verify if there are no errors in your cdk code
- I also ran this command but I'm not sure if it was needed: cdk bootstrap aws://accountid/region
- cdk deploy
- Verify that there is a "basic-auth-bug-pipeline" cloudformation template
- Verify that this pipeline runs once and creates the amplify app
- Go to the amplify app and click on the "run build" button
- Usually the first time the deployments works.
- Try changing something like the app description in the pipeline-stack.ts to trigger a cloudformation update. And commit this change and push it. It should trigger the amplify build.
- And you can trigger the codepipeline to update the infra.
- It breaks. Try logging in to your amplify url with username "hello" and password "awssupport"
