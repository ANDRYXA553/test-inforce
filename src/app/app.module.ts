import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MainComponent} from "./components/main/main.component";
import {RouterModule, Routes} from "@angular/router";
import {ProductItemComponent} from './components/product-item/product-item.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from '@ngrx/store';
import {reducer} from "./redux/reducers";
import { EffectsModule } from '@ngrx/effects';
import {ProductsEffects} from "./redux/effects/products";

const routes: Routes = [
  {path: '', component: MainComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductItemComponent,
    ProductFormComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    StoreModule.forRoot(reducer, {}),
    EffectsModule.forRoot([ProductsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
