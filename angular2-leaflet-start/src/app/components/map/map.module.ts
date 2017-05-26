import { NgModule } from '@angular/core';

import { MapComponent } from './map.component';
import { MapService } from "../../services/map.service";

@NgModule({
    imports: [],
    exports: [MapComponent],
    declarations: [MapComponent],
    providers: [MapService],
})
export class MapModule { }
