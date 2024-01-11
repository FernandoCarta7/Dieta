import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Nutricionista } from "./clases/nutricionista";
import { inject } from "@angular/core";

export class NutricionistaService {
    
    private urlBase = "http://localhost:8080/nutricionistas";
    private clienteHttp !: HttpClient;
    obtenerNutricionistasLista(): Observable<Nutricionista[]>{    
        return this.clienteHttp.get<Nutricionista[]>(this.urlBase);
      }
      
      agregarNutricionista(nutricionista: Nutricionista): Observable<Object>{
        return this.clienteHttp.post(this.urlBase, nutricionista);
      }
      
      obtenerNutricionistaPorId(id: number){
        return this.clienteHttp.get<Nutricionista>(`${this.urlBase}/${id}`);
      }
      
      editarNutricionista(id: number, nutricionista: Nutricionista): Observable<Object>{
        return this.
        clienteHttp.put(`${this.urlBase}/${id}`, nutricionista);
      }
      
      eliminarNutricionista(id: number): Observable<Object>{
        return this.clienteHttp.delete(`${this.urlBase}/${id}`);
      }
}