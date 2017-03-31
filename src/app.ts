import { RouterConfiguration, Router } from "aurelia-router";

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = "Benjamin McGregor";
    config.options.pushState = false;
    //config.options.root = "/resume";
    
    config.map([
      { route: "",       name: "root",   redirect: "resume" },
      { route: "resume", name: "resume", moduleId: "./resume-components/resume", title: "Resume", nav: true },
      { route: "cv",     name: "cv",     moduleId: "./cv-components/cv",         title: "CV",     nav: true }
    ]);
  }

}
