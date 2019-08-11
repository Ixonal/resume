import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import {PLATFORM} from 'aurelia-pal';
import * as firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyCgllsOYibFw6NhMTup0rCRBVAy3mJKFiA",
  authDomain: "bens-resume.firebaseapp.com",
  databaseURL: "https://bens-resume.firebaseio.com",
  storageBucket: "bens-resume.appspot.com",
  messagingSenderId: "325069630702"
});

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
