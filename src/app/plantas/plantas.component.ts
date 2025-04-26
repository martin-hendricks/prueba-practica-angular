import { Component, OnInit } from '@angular/core';
import { PlantasService } from './plantas.service';
import { Planta } from './planta';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css'],
  imports: [CommonModule],
})
export class PlantasComponent implements OnInit {

  plantas: Planta[] = [];
  plantasInteriores: number = 0;
  plantasExteriores: number = 0;
  
  constructor(private plantaService: PlantasService) { }

  ngOnInit() {
    this.plantaService.getPlantas().subscribe(data => {
      this.plantas = data;
      this.plantasInteriores = this.plantas.filter(planta => planta.tipo === 'Interior').length;
      this.plantasExteriores = this.plantas.filter(planta => planta.tipo === 'Exterior').length;
    }
    );
  }
}
