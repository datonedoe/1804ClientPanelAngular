// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD4JYNE_SYWsY0j0ULv5HZ2J9Du57nZKy0",
    authDomain: "client-panel-angular.firebaseapp.com",
    databaseURL: "https://client-panel-angular.firebaseio.com",
    projectId: "client-panel-angular",
    storageBucket: "client-panel-angular.appspot.com",
    messagingSenderId: "1061218685095"
  }
};
