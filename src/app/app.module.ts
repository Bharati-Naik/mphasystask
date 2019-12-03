import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserserviceService } from './userservice.service';
import { UserComponent } from './user/user.component';
import { DiscpipePipe } from './discpipe.pipe';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductGroupComponent } from './products/product-group/product-group.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { AddUserRoleComponent } from './users/add-user-role/add-user-role.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DiscpipePipe,
    HomeComponent,
    ProductsComponent,
    AddProductComponent,
    ProductGroupComponent,
    UsersComponent,
    AddUserComponent,
    AddUserRoleComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
