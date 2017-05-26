import 'core-js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');

if (process.env.ENV === 'production') {
	enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);