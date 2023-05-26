import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { YarnComponent } from './yarn/yarn.component';
import { FabricsComponent } from './fabrics/fabrics.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminFeedbackComponent } from './admin-feedback/admin-feedback.component';
import { ProductsComponent } from './products/products.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { SignupComponent } from './signup/signup.component';
import { AdminShopsComponent } from './admin-shops/admin-shops.component';
import { AdminAddShopsComponent } from './admin-add-shops/admin-add-shops.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'yarn', component: YarnComponent },
  { path: 'fabrics/:id', component: FabricsComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin-homepage', component: AdminComponent },
  { path: 'admin-feedback', component: AdminFeedbackComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'admin-products', component: AdminProductsComponent },
  { path: 'admin-add-products', component: AdminAddProductComponent },
  { path: 'view-product', component: SignupComponent },
  { path: 'admin-shops', component: AdminShopsComponent },
  { path: 'admin-add-shops', component: AdminAddShopsComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
