import { Component, OnInit } from '@angular/core';
import { Receta } from '../receta';
import { RecetaService } from '../receta.service';

@Component({
  selector: 'app-recetas-list',
  templateUrl: './recetas-list.component.html',
  styleUrls: ['./recetas-list.component.css']
})
export class RecetasListComponent implements OnInit {

  recetas:Array<Receta> = [];
  promedio:number = 0;

  selected: Boolean = false;
  selectedReceta!:Receta;


  constructor(private recetaService : RecetaService) { }


  getRecetas(): void {
    this.recetaService.getRecetas().subscribe((receta) => {
      this.recetas = receta;
    });
  }

  onSelected(recetanueva:Receta):void
{
  this.selected = true;
  this.selectedReceta = recetanueva;
}

  getPromedio(promedio:number): string{
    for(let i = 0; i<this.recetas.length; i++) {
      promedio = promedio + this.recetas[i].estrellas; 
    }
    promedio = promedio/this.recetas.length

    return promedio.toFixed(2)
  }

  getopiniones(s:number){
    
    for(let i = 0; i<this.recetas.length; i++) {
      s = s+ this.recetas[i].cantidadOpiniones; 
    }
    return s

  }
  ngOnInit() {
    this.getRecetas();
    
    
  }

}
