import { Component, Injectable, NgModule } from '@angular/core';
import { Nutricionista } from '../clases/nutricionista';
import { Router } from '@angular/router';
import { NutricionistaService } from '../nutricionista.service'; 
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
@Component({
  selector: 'listar-nutricionista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-nutricionista.component.html',
  styleUrl: './listar-nutricionista.component.css'
})

export class ListarNutricionistaComponent {
  nutricionistas: Nutricionista[];
  constructor(private nutricionistaServicio: NutricionistaService,
    private enrutador: Router) { }
  ngOnInit() {
    //Cargamos los productos
    this.obtenerNutricionistas();
  }

  private obtenerNutricionistas() {
    
    this.nutricionistaServicio.obtenerNutricionistasLista().subscribe(
      (datos => {
        this.nutricionistas = datos
      })
    )
  }
}

