import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppMaterialModule} from "./app.material.module";
import {PatientList} from "./components/patient-list.component";
import {appRoutes} from "./app.routing";
import {RouterModule} from "@angular/router";
import {UiExampleComponent} from "./components/ui-example/ui-example.component";

@NgModule({
  declarations: [
    AppComponent,
    PatientList,
    AppComponent,
    UiExampleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
