import { Component } from '@angular/core';
import { Ejemplo, Formulario } from './modelo/interfaces';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private formbuilder:FormBuilder){

  }
  registroform = this.formbuilder.group({
    nombre: ['',
      {
        validators:[
          Validators.required,
        ]
      }],
    dni: ['',
      {
        validators:[
          Validators.required,
          Validators.pattern('[0-9]{8}')
        ]
      }],
    estadoCivil: ['',
      {
        validators:[
          Validators.required,
        ]
      }],
  })
  get nombre(){return this.registroform.get('nombre')}
  get dni(){return this.registroform.get('dni')}
  get estadoCivil(){return this.registroform.get('estadoCivil')}
  title = 'demo14-comunicacion-entre-componentes';
  send(){
    console.log(this.registroform.value);
  }
  array=["soltero","casado","divorciado","viudo"]
}
