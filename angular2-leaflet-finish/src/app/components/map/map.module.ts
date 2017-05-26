import { NgModule } from '@angular/core';

import { MapComponent } from './map.component';
import { MapService } from "../../services/map.service";
import { RenderService } from "../../services/dynamic-render.service";
import { CustomPopUpComponent } from "../custom-popup/custom-popup.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule],
    exports: [MapComponent],
    declarations: [
    	MapComponent,
	    CustomPopUpComponent
    ],
    providers: [
        MapService,
        RenderService
    ],
    entryComponents: [CustomPopUpComponent]
})
export class MapModule { }
