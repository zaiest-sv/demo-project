import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user/list',
  },
  {
    path: 'user',
    loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'numericArray',
    loadChildren: () => import('./numeric-array/numeric-array.module').then((m) => m.NumericArrayModule),
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
