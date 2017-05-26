import {
	Injectable,
	Injector,
	NgZone,
	ApplicationRef,
	ComponentFactoryResolver,
	ComponentRef
} from '@angular/core';
import { Map } from "leaflet";
import "../plugins/leaflet-angular.plugin"

@Injectable()
export class RenderService {

	private componentRef: ComponentRef<any>;

	constructor(private ngZone: NgZone,
	            private injector: Injector,
	            private appRef: ApplicationRef,
	            private componentFactoryResolver: ComponentFactoryResolver) { }

	public attachCustomPopUpsToMap(map: Map) {
		this.ngZone.run(() => {
			map.on("popupopen",
			       (e: any) => {
				       const popup = e.popup;

				       const compFactory = this.componentFactoryResolver.resolveComponentFactory(popup.options.popupComponentType);
				       this.componentRef = compFactory.create(this.injector);

				       this.componentRef.instance.inputData = popup.options.data;

				       this.appRef.attachView(this.componentRef.hostView);

				       let div = document.createElement('div');
				       div.appendChild(this.componentRef.location.nativeElement);

				       popup.setContent(div);
			       });
		});
	}
}