import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TituloComponent } from './footer/components/titulo/titulo.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, TituloComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [CommonModule],
})
export class LayoutModule {}
