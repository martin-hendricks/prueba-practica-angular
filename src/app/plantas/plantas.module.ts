import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantasComponent } from './plantas.component';

@NgModule({
  imports: [
    CommonModule,
    PlantasComponent  
  ],
  declarations: [],
  exports: [PlantasComponent]
})
export class PlantasModule { }
