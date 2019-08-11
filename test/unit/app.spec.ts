// import {bootstrap} from 'aurelia-bootstrapper';
// import {StageComponent} from 'aurelia-testing';
// import {PLATFORM} from 'aurelia-pal';
import { App } from "../../src/app";

describe('App Component', () => {
  // let component;

  // beforeEach(() => {
  //   component = StageComponent
  //     .withResources(PLATFORM.moduleName('app'))
  //     .inView('<app></app>');
  // });

  // afterEach(() => component.dispose());

  it("should exist", () => {
    expect(App).toBeTruthy();
  });

  // it('should render message', done => {
  //   component.create(bootstrap).then(() => {
  //     const view = component.element;
  //     expect(view.textContent.trim()).toBe('Hello World!');
  //     done();
  //   }).catch(e => {
  //     fail(e);
  //     done();
  //   });
  // });
});
