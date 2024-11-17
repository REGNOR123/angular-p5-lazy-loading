import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [ProductsComponent, ProductEditComponent, ProductInfoComponent, ProductViewComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
