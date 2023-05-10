import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {UserListComponent} from "./users/user-list/user-list.component";
import {UserDetailsComponent} from "./users/user-details/user-details.component";

// const routes: Routes = [
//   {
//     path: '', component: UserListComponent, children: [
//       {path: '', redirectTo: '/', pathMatch: 'full'},
//       {path: 'user/:id', component: UserDetailsComponent}
//     ]
//   },
// ];

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user/list',
  },
  // {
  //   path: 'users',
  //   component: UserListComponent,
  // },
  // {
  //   path: 'user:id',
  //   component: UserDetailsComponent,
  // },
  {
    path: 'user',
    loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: '**',
    redirectTo: 'recipes',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
