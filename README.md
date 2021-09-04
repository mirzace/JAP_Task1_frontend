# Screenplay App FrontEnd


![mockup](https://github.com/mirzace/JAP_Task1_frontend/blob/main/src/assets/images/mockup.jpg?raw=true)

The goal of this project was to build a movie rating engine, similar to the one on imdb.com, but much, much simpler and more rudimentary. 


## Installation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

To run the development server locally you will need to install the following tools:
- [npm (NodeJs)](https://nodejs.org/en/download/)
- [Angular CLI](https://github.com/angular/angular-cli)

Check if the installation was successful:
```bash
npm --version
ng --version
```
Your output should look something like this:
```bash
6.14.14
```

```bash

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 12.2.1
Node: 14.17.5
Package Manager: npm 6.14.14
OS: win32 x64
.
.
.
```



### Development server

To start development server, you need to clone the repository and install dependencies
```bash
git clone https://github.com/mirzace/JAP_Task1_frontend.git
cd JAP_Task1_frontend
npm i
ng serve -o
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
If you get any errors, make sure that nothing is running on the port 4200.


### Build

The build artifacts will be stored in the `dist/` directory. To build the project run:

```bash
ng build
```


### Running unit tests

To execute the unit tests via [Karma](https://karma-runner.github.io) run:

```bash
ng test
```

### Running end-to-end tests

To execute the end-to-end tests via a platform of your choice run:

```bash
ng test
```
To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Folder structure

```
root/
├─── src/
│     ├─── app/
│     │  ├─── auth/                            #Auth Module
│     │  │  ├─── login/
│     │  │  ├─── register/
│     │  │  ├─── auth-routing.module.ts
│     │  │  ├─── auth.module.ts
│     │  ├─── core/                            #Core Module
│     │  │  ├─── guards/
│     │  │  ├─── interceptors/
│     │  │  ├─── resolvers/
│     │  │  ├─── services/
│     │  │  ├─── core.module.ts
│     │  ├─── layouts/                         #Layouts Module
│     │  │  ├─── horizontal/
│     │  │  ├─── shared/
│     │  │  │  ├─── footer/
│     │  │  │  ├─── topbar/
│     │  │  ├─── layouts.module.ts
│     │  ├─── pages/                           #PagesModule
│     │  │  ├─── home/
│     │  │  ├─── not-found/
│     │  │  ├─── profile/
│     │  │  ├─── rate/
│     │  │  ├─── screenplay-detail/
│     │  │  ├─── pages-routing.module.ts
│     │  │  ├─── pages.module.ts
│     │  ├─── shared/                           #Shared Module
│     │  │  ├─── models/
│     │  │  ├─── ui/
│     │  │  ├─── shared.module.ts
│     ├─── assets/
│     ├─── environments/
├─── ssl/
```