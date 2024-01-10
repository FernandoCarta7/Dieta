import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { InicioSesionComponent } from "./inicio-sesion/inicio-sesion.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { ListarNutricionistaComponent } from "./listar-nutricionista/listar-nutricionista.component";



@NgModule({
    declarations:[
        InicioSesionComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        InicioSesionComponent,
        ListarNutricionistaComponent
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule{}