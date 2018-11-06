import {Routes} from "@angular/router";
import {UiExampleComponent} from "./components/ui-example/ui-example.component";

export const appRoutes: Routes = [
  { path: 'ui-example', component: UiExampleComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  { path: '',
    redirectTo: '/ui-example',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];
