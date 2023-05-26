import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  BASE_URL = 'https://mean-backend-sbtextiles.onrender.com'

  /* contact info */
  contact(name: any, email: any, phone: any, company: any, business: any, message: any) {
    /* req body */
    const body = {

      name,
      email,
      phone,
      company,
      business,
      message
    }
    /* make api call to server for contact */
    return this.http.post(`${this.BASE_URL}/contact/add-contact`, body)
  }

  /* feedback info */
  feedback(name: any, email: any, phone: any, message: any) {
    /* req body */
    const body = {

      name,
      email,
      phone,
      message
    }
    /* make api call to server for contact */
    return this.http.post(`${this.BASE_URL}/feedback`, body)
  }

  /* Login */
  login(username: any, password: any) {
    /* req body */
    const body = {
      username,
      password
    }
    /* make api call to server for login */
    return this.http.post(`${this.BASE_URL}/login`, body)
  }

  getallcontacts() {
    return this.http.get(`${this.BASE_URL}/contacts/all-contacts`)
  }

  getallfeedbacks() {
    return this.http.get(`${this.BASE_URL}/contacts/all-feedbacks`)
  }


  /* addProduct info */
  addproduct(productname: any, smalldesc: any, subheading: any, description: any, imageurl:any ) {
    /* req body */
    const body = {

      productname,
      smalldesc,
      subheading,
      description,
      imageurl
    }
    /* make api call to server for contact */
    return this.http.post(`${this.BASE_URL}/admin/add-product`, body)
  }

  getallproducts() {
    return this.http.get(`${this.BASE_URL}/admin/all-products`)
  }
  /* remove product item */
  removeproductitem(_id:any){
    return this.http.delete(`${this.BASE_URL}/product/remove-item/${_id}`)
  }

  /* addShop info */
  addshop(shopname: any, shopemail: any, shopphone: any, shopaddress: any, shopimageurl:any ) {
    /* req body */
    const body = {

      shopname,
      shopemail,
      shopphone,
      shopaddress,
      shopimageurl
    }
    /* make api call to server for contact */
    return this.http.post(`${this.BASE_URL}/admin/add-shop`, body)
  }
  getallshops() {
    return this.http.get(`${this.BASE_URL}/admin/all-shops`)
  }
  /* remove product item */
  removeshop(_id:any){
    return this.http.delete(`${this.BASE_URL}/shop/remove-shop/${_id}`)
  }
}
