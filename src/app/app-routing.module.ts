import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {ProductListComponent} from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import {ProductManagerComponent} from './product-manager/product-manager.component';
import {ServiceComponent} from './service/service.component';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full'},
   {path :'home', component : HomeComponent},
   {path :'product-manager', component : ProductManagerComponent},
   {path :'product-list', component : ProductListComponent},
   {path :'about', component : AboutComponent},
   {path :'service', component : ServiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }