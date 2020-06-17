import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "products", component: ProductsComponent},
  {path: "about", component: AboutComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
