import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  curso: string = 'Curso de Angular para aprender';

  link = 'www.google.com';

  constructor() {}

  ngOnInit(): void {}

  onChange(mensaje: string) {
    console.log('data que viene del padre:>>', mensaje);
  }
}
