import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import{DayCareModule} from './app/project/project.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule( DayCareModule)
  .catch(err => console.error(err));
