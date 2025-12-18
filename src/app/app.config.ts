import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { timeInterceptor } from './interceptors/time.interceptor';
import { tokenInterceptor } from './interceptors/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([
        timeInterceptor, 
        tokenInterceptor])
    ),
    provideZoneChangeDetection(
      { eventCoalescing: true }
    ), 
    provideRouter(routes)]
};
