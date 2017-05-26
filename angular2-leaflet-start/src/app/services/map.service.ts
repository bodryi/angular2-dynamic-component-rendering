import { Injectable } from '@angular/core';
import {
	Icon,
	marker,
	Map,
	LatLng,
	latLng,
	Marker,
	control,
	tileLayer,
	map
} from "leaflet";

const ICON_WIDTH = 25;
const ICON_HEIGHT = 41;
const ICON_ANCHOR_X = 13;
const ICON_ANCHOR_Y = 41;
const POPUP_ANCHOR_X = 0;
const POPUP_ANCHOR_Y = -25;

@Injectable()
export class MapService {

	public mapElement: Map;

	public registerMap(mapId: string, tilesURL: string = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png') {
		this.createMapElement(mapId, tilesURL);
	}

	public createMapElement(mapId: string, tilesURL: string) {
		this.mapElement = map(mapId, { zoomControl: false }).setView([59.935879, 30.321954], 13);

		L.tileLayer(tilesURL)
		 .addTo(this.mapElement);
		const zoom = control.zoom({ position: "topright" });
		zoom.addTo(this.mapElement);

		const scale = control.scale({ position: "bottomright" });
		scale.addTo(this.mapElement);

	}

	public setCenter(marker: any) {
		if (marker instanceof Marker) {
			this.mapElement.setView(marker.getLatLng(), this.mapElement.getZoom());
		}
		else {
			this.mapElement.setView(marker.getBounds()
			                              .getCenter(), this.mapElement.getZoom());
		}
	}

	getMap(): L.Map {
		return this.mapElement;
	}

	public addPoint(coordinates: Array<number>): any {
		const location = latLng([coordinates[0], coordinates[1]]);
		const el = this.getMarker(location);
		this.mapElement.addLayer(el);
		return el;
	}

	private getMarker(location: LatLng): Marker {
		const icon = new Icon({
			                      iconUrl: "assets/marker-icon.png",
			                      iconSize: [ICON_WIDTH, ICON_HEIGHT],
			                      iconAnchor: [ICON_ANCHOR_X, ICON_ANCHOR_Y],
			                      popupAnchor: [POPUP_ANCHOR_X, POPUP_ANCHOR_Y]
		                      });
		return marker(location, { icon: icon });
	}

}