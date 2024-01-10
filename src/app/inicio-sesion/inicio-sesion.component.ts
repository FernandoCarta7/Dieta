import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Usuario } from '../clases/Usuario';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { PrimeIcons } from 'primeng/api';
@Component({
  selector: 'inicio-sesion',
  standalone: true,
  imports:[CardModule, ButtonModule, PasswordModule, InputTextModule],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {
  usuario : Usuario = new Usuario();

}
