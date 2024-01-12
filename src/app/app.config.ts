import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { NutricionistaService } from './listar-nutricionista/nutricionista.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), { provide: NutricionistaService }]
};
