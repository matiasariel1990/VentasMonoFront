import { Component } from '@angular/core';
import { Zone } from '../../models/zone.model';
import { ZoneService } from '../../services/zone.service';


@Component({
  selector: 'app-zone-list',
  templateUrl: './zone-list.component.html',
  styleUrls: ['./zone-list.component.css']
})
export class ZoneListComponent {

  zones : Zone[] = [];

  constructor(private zoneService: ZoneService) { }

  ngOnInit(): void {
    this.loadZones();
  }

  loadZones(): void {
    this.zoneService.getAll().subscribe(
      zones => this.zones = zones,
      error => console.error('Error loading zones:', error)
    );
  }

  reloadZones(): void{
    this.loadZones();
  }

}
