# Init project

Execute after cloning (on *nix/Mac platform):
- `$ mvn -N io.takari:maven:wrapper -Dmaven=3.8.4`
- `$ rm mvnw.cmd`
- `$ chmod +x ./mvnw`
- `$ echo "\n/.mvn\n/mvnw*\n" >> .git/info/exclude`
- `$ curl -O https://raw.githubusercontent.com/checkstyle/checkstyle/checkstyle-8.12/src/main/resources/google_checks.xml`
- `echo "\n/google_checks.xml\n" >> .git/info/exclude`
- `$ cd app-sec-frontend && npm i`

# Available Scripts

In the project directory, you can run:

## `./mvnw`

Build and runs the backend on 8080 localhost port.

## `cd app-sec-frontend && npm start`

Runs the front-end app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## `cd app-sec-frontend && npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## `cd app-sec-frontend && npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
