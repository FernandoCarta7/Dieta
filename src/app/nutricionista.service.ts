import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Nutricionista } from "./clases/nutricionista";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class NutricionistaService {

  private readonly urlBase = 'http://localhost:8080/listarnutricionista';


  constructor(private http: HttpClient) {


  }

  obtenerNutricionistasLista(): Observable<Nutricionista[]> {
    return this.http.get<Nutricionista[]>(this.urlBase);
  }

  agregarNutricionista(nutricionista: Nutricionista): Observable<Object> {
    return this.http.post(this.urlBase, nutricionista);
  }

  obtenerNutricionistaPorId(id: number) {
    return this.http.get<Nutricionista>(`${this.urlBase}/${id}`);
  }

  editarNutricionista(id: number, nutricionista: Nutricionista): Observable<Object> {
    return this.
      http.put(`${this.urlBase}/${id}`, nutricionista);
  }

  eliminarNutricionista(id: number): Observable<Object> {
    return this.http.delete(`${this.urlBase}/${id}`);
  }
}