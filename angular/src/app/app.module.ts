import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { TableModule } from "primeng/table";
import { UsersService } from "./shared/users.service";
import { PostsService } from "./shared/posts.service";
import { PanelModule } from "primeng/panel";
import { MenubarModule } from "primeng/menubar";

@NgModule({
  declarations: [AppComponent],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PanelModule,
    MenubarModule,
  ],
  exports: [
    ReactiveFormsModule,
    TableModule,
  ],
  bootstrap: [AppComponent],
  providers: [UsersService, PostsService]
})
export class AppModule {}
