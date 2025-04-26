import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantasComponent } from './plantas.component';
import { PlantasService } from './plantas.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PlantasComponent', () => {
    let component: PlantasComponent;
    let fixture: ComponentFixture<PlantasComponent>;
    let plantasService: jasmine.SpyObj<PlantasService>;

    beforeEach(async () => {
        const plantasServiceSpy = jasmine.createSpyObj('PlantasService', ['getPlantas']);

        await TestBed.configureTestingModule({
            imports: [PlantasComponent, HttpClientTestingModule],
            providers: [{ provide: PlantasService, useValue: plantasServiceSpy }]
        }).compileComponents();

        fixture = TestBed.createComponent(PlantasComponent);
        component = fixture.componentInstance;
        plantasService = TestBed.inject(PlantasService) as jasmine.SpyObj<PlantasService>;
    });

    it('debería crear la tabla con tres filas más el encabezado', () => {
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


        plantasService.getPlantas.and.returnValue(of(mockPlantas));


        component.ngOnInit();
        fixture.detectChanges();

        const compiled = fixture.nativeElement as HTMLElement;
        const tableRows = compiled.querySelectorAll('table tbody tr');
        const tableHeader = compiled.querySelectorAll('table thead tr');

        expect(tableHeader.length).toBe(1);
        expect(tableRows.length).toBe(3);
    });
});