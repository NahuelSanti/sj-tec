import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecursosComponent } from './recursos/recursos.component';

@NgModule({
  declarations: [RecursosComponent],
  exports: [RecursosComponent],
  imports: [CommonModule],
})
export class ArticulosModule {}
