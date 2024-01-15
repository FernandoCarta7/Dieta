import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
  standalone:true,
  imports : [ FieldsetModule, InputGroupModule,  InputGroupAddonModule, CardModule]
})
export class RegistrarUsuarioComponent {

}
