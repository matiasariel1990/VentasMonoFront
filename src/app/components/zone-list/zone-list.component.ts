import { Component } from '@angular/core';
import { Zone } from '../../models/zone.model';
import { ZoneService } from '../../services/zone.service';
import { ToastrService } from 'ngx-toastr';
import { PaginatedResponse } from 'src/app/models/paginatedResponse.model';



@Component({
  selector: 'app-zone-list',
  templateUrl: './zone-list.component.html',
  styleUrls: ['./zone-list.component.css']
})
export class ZoneListComponent {

  zones : Zone[] = [];
  pageZone : PaginatedResponse = {
    data: null,
    currentPage: 0,
    totalPages: 0,
    pageSize: 0
  }; 
  newZone : Zone = {
    numeroZona: 0,
    descripcion: ''
  };

  zonaFiltro : Zone = {
    numeroZona: 0,
    descripcion: ''
  };

  zonaSelected : Zone = {
    numeroZona: 0,
    descripcion: ''
  };

  pages : number[] = [1];

  private editDescription ?: String;

  constructor(private zoneService: ZoneService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loadZones();
  }

  loadZones(): void {
    this.zoneService.getAll().subscribe(
      pageZone => {
        this.pageZone = pageZone,
        this.zones = pageZone.data;
        this.setearPaginas(pageZone.totalPages);
        this.toastr.success('Zonas cargadas');
        },
      error =>  {this.toastr.error('Error cargando zonas', 'Error')
                
              }
    );
  }

  setearPaginas(totalPages: number):void{
    let i = 1;
    if(this.pages.length >= totalPages){
      this.pages = this.pages.filter( page => page >= totalPages);
    }else{
      while( this.pages.length < totalPages ) {
        this.pages.push(i);
        i++;
      }
    }
  }

  reloadZones(): void{
    this.loadZones();
  }

  crearZona() {
    this.zoneService.create(this.newZone).subscribe(
      response => {
        this.toastr.success('Operacion exitosa')
      },
      error =>this.showError('Error guardando:', 'Error guardando:')
    );
  }

  validarDatos(){

  }

  viewDeails(zonaSelected: Zone){
    this.zonaSelected = zonaSelected;
  }

  goToPage(pageSelected : number){

  }

  public showError(err1: String, err2 : String): void {
    this.toastr.error('Message Error!', 'Title Error!');
  }

}
