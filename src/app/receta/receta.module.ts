import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasListComponent } from './recetas-list/recetas-list.component';
import { RecetaDetailComponent } from './receta-detail/receta-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecetasListComponent,RecetaDetailComponent],
  exports: [RecetasListComponent]
})
export class RecetaModule { }
