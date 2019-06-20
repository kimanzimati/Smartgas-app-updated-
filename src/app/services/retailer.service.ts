import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RetailerService {
  base_url: string = 'http://localhost:4444'

  token: string = localStorage.getItem('auth_token') ? localStorage.getItem('auth_token') : ''
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    })
  }


  constructor(private http: HttpClient) { }

  // get a retailer details
  details(id) {
    return this.http.get(`${this.base_url}/retailer/${id}`, this.httpOptions)
  }


  // get all retailer orders
  products(id) {
    return this.http.get(`${this.base_url}/retailer/products/${id}`, this.httpOptions)
  }

  private data = [
    {
      id: 0, 
      shopName: 'Small-Gas',
      retailerEmail: 'smaillgas@gas.com',
      retailerNumber: '0777777777',
      latitude: '1.783081', 
      longitude: '36.862152',
      cylinders: {
        id: 5,
        serial: 'SG12334',
        manufacturedDate: '2018',
        nameOfM: "Total",
        capacity: "30kg",
        batchnumber: 20,
        trackerNumber: 4567,
        price: 300,
        quantity: 12,
        retailerId:0, 
  }

    },

    {
        id: 1,
        shopName: 'Classic',
        retailerEmail: 'classisgas@gas.com',
        retailerNumber: '0788888888',
        latitude: '-1.799552', 
        longitude: '36.870388',
        cylinders: {
          id: 6,
          serial: 'CL12334',
          manufacturedDate: '2018',
          nameOfM: "Total",
          capacity: "30kg",
          batchnumber: 20,
          trackerNumber: 4567,
          price: 300,
          quantity: 19,
          retailerId:1, 
    }
    },
    
    { 
      id: 2, 
      shopName: 'leaf gas',
      retailerEmail: 'leafgas@gas.com',
      retailerNumber: '0786666668',
      latitude: '-1.777590', 
      longitude: '36.697429',
      cylinders: {
        id: 7,
        serial: 'LG12334',
        manufacturedDate: '2018',
        nameOfM: "Total",
        capacity: "30kg",
        batchnumber: 20,
        trackerNumber: 4567,
        price: 300,
        quantity: 10,
        retailerId:2, 
  }
    },

    {
        id: 3, 
     shopName: 'flux gas',
     retailerEmail: 'fluxgas@gas.com',
     retailerNumber: '078990898',
     latitude: '-1.881907', 
     longitude: '36.705665',
     cylinders: {
      id: 8,
      serial: 'FG12334',
      manufacturedDate: '2018',
      nameOfM: "Total",
      capacity: "30kg",
      batchnumber: 20,
      trackerNumber: 4567,
      price: 300,
      quantity: 15,
      retailerId:3, 
}
    },
    {
      id: 4, 
      shopName: 'Loader', 
      retailerEmail: 'Loader@gas.com',
      retailerNumber: '072267537',
      latitude: '-1.918966',
      longitude: '36.841562',
      cylinders: {
            id: 9,
            serial: 'L12334',
            manufacturedDate: '2018',
            nameOfM: "Total",
            capacity: "30kg",
            batchnumber: 20,
            trackerNumber: 4567,
            price: 300,
            quantity: 10,
            retailerId:4, 
      }
    },

  ];
 
  private cart = [];

  getRetailers(){
    return this.data;
  }

  addCart(){
    return this.cart;
  }
  addProduct(product){
    this.cart.push();
  }
}