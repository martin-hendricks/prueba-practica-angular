import { Component } from '@angular/core';
import { PlantasComponent } from './plantas/plantas.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantasService } from './plantas/plantas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, PlantasComponent], // Importa el componente aquí
  providers: [PlantasService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vivero El Otoño';
}
