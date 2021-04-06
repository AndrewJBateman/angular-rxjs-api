import { Component, OnInit } from '@angular/core';
import EsriMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Home from '@arcgis/core/widgets/Home';
import { ApplicationConfig } from 'ApplicationBase/interfaces';
import { ApplicationBaseService } from './services/application-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-arcgis-mapping';

  constructor(public applicationBaseService: ApplicationBaseService) {}

  ngOnInit() {
    // create map
    const map = new EsriMap({
      basemap: 'streets',
    });
    const view = new MapView({
      container: 'viewDiv',
      center: [-4.6417656, 57.2741432], //Longitude, Latitude
      zoom: 11,
      map,
    });

    // Calcite Component
    const calciteBtn = document.createElement('calcite-button');
    calciteBtn.innerText = 'Calcite Button';

    view.ui.add(calciteBtn, 'top-right');

    // ApplicationBase Config Example
    this.applicationBaseService.config.subscribe(
      (config: ApplicationConfig) => {
        if (config) {
          const { home, homePosition } = config;
          if (home) view.ui.add(new Home(), homePosition);
        }
      }
    );
  }
}
