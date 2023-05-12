import { NgModule } from '@angular/core';
import { PostListComponent } from "./post-list.component";
import { FieldsetModule } from "primeng/fieldset";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [PostListComponent],
  imports: [
    FieldsetModule,
    CommonModule
  ],
  providers: [],
  exports: [
    PostListComponent
  ]
})
export class PostsModule {}
