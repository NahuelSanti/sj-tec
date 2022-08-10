import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@NgModule({
  declarations: [GameControlComponent, OddComponent, EvenComponent],
  exports: [GameControlComponent, OddComponent, EvenComponent],
  imports: [CommonModule],
})
export class GameModule {}
