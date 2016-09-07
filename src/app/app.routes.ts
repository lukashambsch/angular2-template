import { provideRouter, RouterConfig } from '@angular/router';

import { HomeRoutes } from './home/index';
import { LoginRoutes } from './login/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...LoginRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
