import { TestBed } from '@angular/core/testing';
import { PlantasService } from './plantas.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: Plantas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [PlantasService]
    });
  });

  it('debería crearse el servicio', () => {
    const service: PlantasService = TestBed.inject(PlantasService);
    expect(service).toBeTruthy();
  });
  it('debería llamar al método getPlantas y devolver datos simulados', () => {
    const service: PlantasService = TestBed.inject(PlantasService);
    const mockPlantas = [
      {
        id: 1,
        nombre_comun: 'Rosa',
        nombre_cientifico: 'Rosa rubiginosa',
        tipo: 'Interior',
        altura_maxima: 1.5,
        clima: 'Templado',
        sustrato_siembra: 'Tierra arcillosa'
      },
      {
        id: 2,
        nombre_comun: 'Cactus',
        nombre_cientifico: 'Cactaceae',
        tipo: 'Exterior',
        altura_maxima: 2.0,
        clima: 'Árido',
        sustrato_siembra: 'Arena y grava'
      },
      {
        id: 3,
        nombre_comun: 'Orquídea',
        nombre_cientifico: 'Orchidaceae',
        tipo: 'Interior',
        altura_maxima: 0.5,
        clima: 'Húmedo',
        sustrato_siembra: 'Corteza de árbol'
      }
    ];

    const httpMock = TestBed.inject(HttpTestingController);
    service.getPlantas().subscribe((plantas) => {
      expect(plantas).toEqual(mockPlantas);
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockPlantas);
  });
});
