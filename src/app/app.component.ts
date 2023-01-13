import { Component } from '@angular/core';
import { Ejemplo } from './modelo/interfaces';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private formbuilder:FormBuilder){

  }
  registroform = this.formbuilder.group({
    dato: [''],
  })
  title = 'demo14-comunicacion-entre-componentes';
  del_padre:Ejemplo={
    hola:"datos del padre"
  }
  del_hijo= ""
  getMensaje(e:Ejemplo){
    setTimeout(()=>{
      this.del_hijo = e.hola
    },0)
  }
}
