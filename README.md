# Jenkins Test App

A minimal Node.js HTTP application with an automated test and Jenkins pipeline.

## Run locally

```bash
npm test
npm start
```

Then open <http://localhost:3000>. The app returns a JSON health response.

## Run in Jenkins

1. Install the Jenkins **NodeJS Plugin**.
2. Configure a NodeJS tool named `NodeJS 18` under **Manage Jenkins → Tools**.
3. Create a Pipeline job pointing to this repository.
4. Select **Pipeline script from SCM**, choose Git, and use:
   `https://github.com/arunthathirajendrann-art/devops.git`
5. Build the job. Jenkins will install dependencies, run the test, and perform a smoke check.

The project intentionally has no external runtime dependencies, so it is quick to build.
