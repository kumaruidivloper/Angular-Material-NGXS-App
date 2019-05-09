
# AngularMaterialNGXSApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Initial setup
Step1: ng new <App-name> --style=scss --routing
Step2: npm install json-server
Step3: create db.json
Step4: Create some initial Data in db.json file
Step5: Edit package.json start property ["start": "concurrently \"ng serve\" \"json-server --watch db.json\" ",]
Step6: npm install concurrently
Step7: npm run start [For run the app]

## Install Angular Marerial
Step8: npm install --save @angular/material @angular/cdk  
Step9: Add style.scss [@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';]
Step10: npm install --save @angular/animations
Step11: npm install material-icons
Step12: npm install --save hammerjs
Step13: npm install material-design-icons
Step14: add style.scss [@import '~material-design-icons/iconfont/material-icons.css';]

## Install NGXS
Step:15: npm install @ngxs/store --save  [Yarn: yarn add @ngxs/store]

## Install NGXS Logger Plugin & Devtool Plugin
Step16: npm install @ngxs/store@dev --save
Step17: npm install @ngxs/logger-plugin@dev --save [Yarn: yarn add @ngxs/logger-plugin @ngxs/devtools-plugin --dev]

## Delete Remote Branch & Local Branch
LocalBranchDelete:  git branch -d branch_name / git branch -D branch_name
RemoteBranchDelete: git push origin --delete {the_remote_branch}


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
