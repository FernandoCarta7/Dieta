import {HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn : 'root'
})
export class UsuarioServicio{
    private urlBase = "http://localhost:8080/dieta-app/inicio-sesion";
    constructor(private clienteHtpp : HttpClient){}
}