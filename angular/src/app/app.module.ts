import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { UsersService } from "./shared/users/users.service";
import { PostsService } from "./shared/posts/posts.service";
import { PanelModule } from "primeng/panel";
import { MenubarModule } from "primeng/menubar";
import {MessageService} from "primeng/api";

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
  ],
  bootstrap: [AppComponent],
  providers: [UsersService, PostsService, MessageService]
})
export class AppModule {}
