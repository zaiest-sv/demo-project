import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRoutes } from './users.routes';
import { CommonModule } from '@angular/common';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {ChipsModule} from "primeng/chips";

@NgModule({
  declarations: [UserListComponent, UserDetailsComponent],
  imports: [UserRoutes,
    CommonModule,
    TableModule,
    ButtonModule,
    ChipsModule,
  ],
  providers: [],
})
export class UsersModule {}
