import { Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { ListarNutricionistaComponent } from './listar-nutricionista/listar-nutricionista.component';

export const routes: Routes = [
    { path: 'inicio-sesion', component: InicioSesionComponent, title : 'Iniciar sesión'},
    //{ path: '', redirectTo: 'inicio-sesion', pathMatch: 'full' },
    { path: 'listar-nutricionista', component: ListarNutricionistaComponent, title : 'Nutricionistas' },
    { path: '', redirectTo: 'inicio-sesion', pathMatch: 'full' }
];
