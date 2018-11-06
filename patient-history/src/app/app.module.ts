import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppMaterialModule} from "./app.material.module";
import {appRoutes} from "./app.routing";
import {RouterModule} from "@angular/router";
import {UiExampleComponent} from "./components/ui-example/ui-example.component";
import {PatientList} from "./components/patient-list/patient-list.component";
import {EthcontractService} from "./services/eth-contract.service";

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
  providers: [
    EthcontractService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
