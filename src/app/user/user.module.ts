import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { YarnComponent } from './yarn/yarn.component';
import { FabricsComponent } from './fabrics/fabrics.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AdminFeedbackComponent } from './admin-feedback/admin-feedback.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { ProductsComponent } from './products/products.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminShopsComponent } from './admin-shops/admin-shops.component';
import { AdminAddShopsComponent } from './admin-add-shops/admin-add-shops.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutUsComponent,
    YarnComponent,
    FabricsComponent,
    ShopComponent,
    LoginComponent,
    SignupComponent,
    RegistrationComponent,
    AdminComponent,
    AdminFeedbackComponent,
    AdminHeaderComponent,
    ProductsComponent,
    AdminProductsComponent,
    AdminAddProductComponent,
    AdminShopsComponent,
    AdminAddShopsComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MatSidenavModule
  ]
})
export class UserModule { }
