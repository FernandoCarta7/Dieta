import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HttpClient } from "@angular/common/http";
import { NutricionistaService } from "./nutricionista.service";
import { ListarNutricionistaComponent } from "./listar-nutricionista/listar-nutricionista.component";
import { InicioSesionComponent } from "./inicio-sesion/inicio-sesion.component";
import { provideHttpClient } from '@angular/common/http';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';



@NgModule({
    declarations:[
    
    
  ],
    imports: [        
        AppComponent,
        BrowserModule,
        InicioSesionComponent,
        ListarNutricionistaComponent,
        RegistrarUsuarioComponent
    ],
    providers: [AppComponent, NutricionistaService, provideHttpClient()],
    bootstrap: []
})

export class AppModule{}