import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss'],
})
export class TituloComponent implements OnInit {
  @Input() nombreCurso = '';
  @Input() link = '';

  @Output() enviar = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  sendData() {
    this.enviar.emit('datos desde el padre asdasdfasdgasg io');
  }
}
