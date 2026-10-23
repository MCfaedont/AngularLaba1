import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideExperimentalWebMcpForms } from '@angular/forms/signals';
import { BaseServise } from './service/base-servise';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter( routes ),
    provideHttpClient(),
    BaseServise
  ]
};
