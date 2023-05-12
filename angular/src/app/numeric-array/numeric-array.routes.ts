import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {NumericArrayComponent} from "./numeric-array.component";

const routes: Routes = [
  {
    path: '',
    component: NumericArrayComponent,
  },
];

export const NumericArrayRoutes: ModuleWithProviders<RouterModule> =
  RouterModule.forChild(routes);
