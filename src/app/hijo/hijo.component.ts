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
  }
  @Input() dato:string | null | undefined = ""
}
