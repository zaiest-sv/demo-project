import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NumericArrayComponent } from "./numeric-array.component";
import { NumericArrayRoutes } from "./numeric-array.routes";
import { InputTextModule } from "primeng/inputtext";
import { KeyFilterModule } from "primeng/keyfilter";
import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [NumericArrayComponent],
  imports: [
    NumericArrayRoutes,
    CommonModule,
    FormsModule,
    InputTextModule,
    KeyFilterModule,
    ButtonModule
  ],
  providers: [],
})
export class NumericArrayModule {}
