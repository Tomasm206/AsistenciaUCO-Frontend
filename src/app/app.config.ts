import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-jewoi3myj56ypvrl.us.auth0.com',
      clientId: 'zHspmZ6yF74mArNZbSIc1R9mJKfvqXoI',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ]
};
