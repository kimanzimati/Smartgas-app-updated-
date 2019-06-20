import { Component, AfterContentInit, OnInit, ViewChild } from '@angular/core';
import {  RetailerService  } from '../services/retailer.service'

declare var google;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, AfterContentInit{
 map;
 Retailer = [];
 @ViewChild('mapElement') mapElement;
  constructor(private retailer: RetailerService ) {}

  ngOnInit(){ 
    this.Retailer = this.retailer.getRetailers()
    console.log(this.Retailer)
  }
   
  ngAfterContentInit(){

    navigator.geolocation.getCurrentPosition((location)=>{
      //getting current location
      let latitude = location.coords.latitude
      let longitude = location.coords.longitude
      this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: latitude, lng: longitude},
          zoom: 12,
        });

        //Retailer content 
      

        //populate retailer marker
        const cylinderIcon = 'https://img.icons8.com/ultraviolet/40/000000/camping-gas-burner.png'
      for ( var populate of this.Retailer ){
    
        if (  parseInt(populate.latitude) &&  parseInt( populate.longitude)){
          var RetailerMarker = new  google.maps.Marker({
            position: ({ lat: parseInt(populate.latitude), lng: parseInt( populate.longitude) }),
            map: this.map,
            icon: cylinderIcon,
            title: populate.shopName
          })
         }
      }
    }) 
  }
}