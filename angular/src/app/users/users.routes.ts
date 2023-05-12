import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailsComponent } from "./user-details/user-details.component";

const routes: Routes = [
  {
    path: 'list',
    component: UserListComponent,
  },
  {
    path: 'details/:id',
    component: UserDetailsComponent,
  },
];

export const UserRoutes: ModuleWithProviders<RouterModule> =
  RouterModule.forChild(routes);
