# MainAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Issue

Restart App when first time meeting this issue.

```
core.js:1119 Uncaught Error: Type RouterModule does not have 'ɵmod' property.
    at getNgModuleDef (core.js:1119)
    at recurse (core.js:25265)
    at recurse (core.js:25276)
    at recurse (core.js:25276)
    at registerNgModuleType (core.js:25261)
    at new NgModuleFactory$1 (core.js:25375)
    at compileNgModuleFactory__POST_R3__ (core.js:29074)
    at PlatformRef.bootstrapModule (core.js:29324)
    at Module.8682 (main.ts:19)
    at __webpack_require__ (bootstrap:19)
```
