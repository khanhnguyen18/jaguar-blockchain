import {Routes} from "@angular/router";
import {UiExampleComponent} from "./components/ui-example/ui-example.component";
import {PatientList} from "./components/patient-list.component";

export const appRoutes: Routes = [
  { path: 'ui-example', component: UiExampleComponent },
  { path: '',
    redirectTo: '/patient-list',
    pathMatch: 'full'
  },
  { path: 'patient-list', component: PatientList },
  // { path: '**', component: PageNotFoundComponent }
];
