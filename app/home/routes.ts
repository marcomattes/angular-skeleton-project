import WelcomeComponent from "./welcome.component";

export let WelcomeRoute = {
  "title": "Welcome",
  "path": "welcome",
  "url": "/welcome"
};

export default [
  { path: WelcomeRoute.path, component: WelcomeComponent },
  { path: '', redirectTo: WelcomeRoute.path, pathMatch: 'full' },
  { path: '**', redirectTo: WelcomeRoute.path, pathMatch: 'full' }
];
