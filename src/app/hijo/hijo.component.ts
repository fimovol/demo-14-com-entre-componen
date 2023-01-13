import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';
import { Ejemplo } from '../modelo/interfaces';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.ejecutarEvento()
  }
  @Input() dato:string | null | undefined = ""
  @Input() variable:Ejemplo = {
    hola:""
  }
  mensaje:Ejemplo = {
    hola:"datos del hijo",
  }
  @Output() miEvento = new EventEmitter<Ejemplo>()

  ejecutarEvento(){
    this.miEvento.emit(this.mensaje)
  }
}
