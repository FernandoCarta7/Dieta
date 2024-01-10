import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { ListarNutricionistaComponent } from './listar-nutricionista/listar-nutricionista.component';

const routes: Routes = [

  { path: 'inicio-sesion', component : InicioSesionComponent },
  { path: '', redirectTo: 'inicio-sesion', pathMatch: 'full' },
  { path: 'nutricionistas',component : ListarNutricionistaComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
