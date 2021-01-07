import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmaterialModule } from './amaterial.module';
import { MapaComponent } from './components/mapa/mapa.component';

// google maps
import { AgmCoreModule } from '@agm/core';
import { EditarComponent } from './components/mapa/editar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  entryComponents:[
    EditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AmaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      // AQUI PONER API KEY 
      apiKey: 'API_KEY_GOOGLE_MAPS' 
      // 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
