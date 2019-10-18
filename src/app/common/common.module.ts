import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { PlaceAutocompleteComponent } from "./components/place-autocomplete/place-autocomplete.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AppMaterialModule } from "../modules/app-material/app-material.module";

@NgModule({
  declarations: [HeaderComponent, PlaceAutocompleteComponent],
  imports: [FormsModule, ReactiveFormsModule, AppMaterialModule],
  exports: [HeaderComponent, PlaceAutocompleteComponent]
})
export class CommonModule {}
