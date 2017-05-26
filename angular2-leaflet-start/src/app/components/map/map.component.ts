import { Component, OnInit } from '@angular/core';
import { MapService } from "../../services/map.service";

@Component({
    selector: 'map-component',
    template: require('./map.component.html')
})
export class MapComponent implements OnInit {

    constructor(private mapService: MapService) { }

    ngOnInit() {
    	this.mapService.registerMap('map');

    	let marker = this.mapService.addPoint([59.935879, 30.321954]);
    	this.mapService.setCenter(marker);

    	marker.bindPopup(`
    	    <h3>Leaflet PopUp</h1>
	        <p>Some text</p>
	        <p *ngIf="false">Should be deleted from DOM if it was angular component because of ngIf = false<p>
    	`);
    }

}