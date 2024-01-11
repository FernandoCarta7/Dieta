import { Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { ListarNutricionistaComponent } from './listar-nutricionista/listar-nutricionista.component';

export const routes: Routes = [
    { path: 'inicio-sesion', component: InicioSesionComponent },
    //{ path: '', redirectTo: 'inicio-sesion', pathMatch: 'full' },
    { path: 'listar-nutricionista', component: ListarNutricionistaComponent },
    { path: '', redirectTo: 'inicio-sesion', pathMatch: 'full' }
];
