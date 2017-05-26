import { Component } from '@angular/core';

@Component({
    selector: 'custom-popup',
    template: require('./custom-popup.component.html')
})
export class CustomPopUpComponent {
	public inputData: any;

	private title: string = 'Angular component';
	private array: Array<string> = ['this', 'array', 'was viewed', 'by', 'ngFor!'];
}