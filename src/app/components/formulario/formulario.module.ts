import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserComponent } from './form-user/form-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoticiasComponent } from './noticias/noticias.component';

@NgModule({
  declarations: [FormUserComponent, NoticiasComponent],
  exports: [FormUserComponent, NoticiasComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class FormularioModule {}
