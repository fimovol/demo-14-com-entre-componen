import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';
import { Ejemplo,Formulario } from '../modelo/interfaces';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.dato)
  }
  @Input() dato = {
  }
  
  
}
