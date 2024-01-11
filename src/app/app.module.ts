import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NutricionistaService } from "./nutricionista.service";
import { ListarNutricionistaComponent } from "./listar-nutricionista/listar-nutricionista.component";
import { InicioSesionComponent } from "./inicio-sesion/inicio-sesion.component";




@NgModule({
    declarations:[
    ],
    imports: [        
        AppComponent,
        BrowserModule,
        HttpClientModule,
        InicioSesionComponent,
        ListarNutricionistaComponent, 
    ],
    providers: [AppComponent, NutricionistaService],
    bootstrap: []
})

export class AppModule{}