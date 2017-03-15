import * as firebase from "firebase";
import {Aurelia} from 'aurelia-framework'
import environment from './environment';

//Configure Bluebird Promises.
(<any>Promise).config({
  warnings: {
    wForgottenReturn: false
  }
});


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
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
