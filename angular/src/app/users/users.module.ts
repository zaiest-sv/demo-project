import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRoutes } from './users.routes';
import { CommonModule } from '@angular/common';
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { ChipsModule } from "primeng/chips";
import { MenuModule } from "primeng/menu";
import { FormsModule } from "@angular/forms";
import { FileUploadModule } from "primeng/fileupload";
import { ToastModule } from "primeng/toast";
import { CardModule } from "primeng/card";
import { PostListComponent } from './post-list/post-list.component';
import {PanelModule} from "primeng/panel";
import {FieldsetModule} from "primeng/fieldset";
import {MultiSelectModule} from "primeng/multiselect";
import {DropdownModule} from "primeng/dropdown";
import {TagModule} from "primeng/tag";

@NgModule({
  declarations: [UserListComponent, UserDetailsComponent, PostListComponent],
  imports: [
    UserRoutes,
    CommonModule,
    TableModule,
    ButtonModule,
    ChipsModule,
    MenuModule,
    FormsModule,
    FileUploadModule,
    ToastModule,
    CardModule,
    PanelModule,
    FieldsetModule,
    MultiSelectModule,
    DropdownModule,
    TagModule,
  ],
  providers: [],
})
export class UsersModule {}
