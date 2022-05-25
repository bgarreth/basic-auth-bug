To run this thing.

- Fork this project on github
- Clone it locally and checkout to the "addcdk" branch
- Create a codestar connection in your aws account: https://docs.aws.amazon.com/dtconsole/latest/userguide/connections-create-github.html
- Copy and paste the arn of this codestar connection in line 10 of the deployment.ts
- Create a secret in the secret manager of type other. Enter the key "GithubOauthToken" and value an Personal access token that you need to make on github (Developer Settings -> Personal access tokens)
- Give it a name (in my case "css-secrets") and save it
- Copy the last part of the arn, which will always have 
