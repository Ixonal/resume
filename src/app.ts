import { RouterConfiguration, Router } from "aurelia-router";

export class App {

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "Benjamin McGregor";
    config.options.pushState = true;
    
    config.map([
      { route: "",       name: "root",   redirect: "resume" },
      { route: "resume", name: "resume", moduleId: "./resume-components/resume", title: "Resume", nav: true },
      { route: "cv",     name: "cv",     moduleId: "./cv-components/cv",         title: "CV",     nav: true }
    ]);
  }

}
