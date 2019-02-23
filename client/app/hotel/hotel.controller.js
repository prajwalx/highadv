'use strict';

(function(){

class HotelComponent {
  constructor($http,$scope,socket) {
    this.$http = $http;
    this.socket = socket;
    //this.awesomeThings = [];

    // $scope.$on('$destroy', function() {
    //   socket.unsyncUpdates('hotel');
    // });
  }

  $onInit() {
    var x;
    var useremail=sessionStorage.getItem("UserEmail");
    this.$http.get('/api/hotels/UserEmail/'+useremail)
      .then(response => {
        x = response.data;
        this.fill(x);
      });
  }

  fill(detail){
    document.getElementById('HotelName').value=detail.name;
    document.getElementById('HotelType').value=detail.type;
    document.getElementById('ChainName').value=detail.chainname;
    document.getElementById('Floor').value=detail.floor;
    document.getElementById('Currency').value=detail.currency;
    document.getElementById('Rating').value=detail.rating;
    document.getElementById('Year').value=detail.year;
    document.getElementById('CheckInTimeFromHour').value=detail.checkinhrsfrom;
    document.getElementById('CheckInTimeFromMinute').value=detail.checkinminfrom;
    document.getElementById('CheckInTimeFromAmPm').value=detail.checkinampmfrom;
    document.getElementById('CheckInTimeToHour').value=detail.checkinhrsto;
    document.getElementById('CheckInTimeToMinute').value=detail.checkinminto;
    document.getElementById('CheckInTimeToAmPm').value=detail.checkinampmto;
    document.getElementById('CheckOutTimeFromHour').value=detail.checkouthrsfrom;
    document.getElementById('CheckOutTimeFromMinute').value=detail.checkoutminfrom;
    document.getElementById('CheckOutTimeFromAmPm').value=detail.checkoutampmfrom;
    document.getElementById('CheckOutTimeToHour').value=detail.checkouthrsto;
    document.getElementById('CheckOutTimeToMinute').value=detail.checkoutminto;
    document.getElementById('CheckOutTimeToAmPm').value=detail.checkoutampmto;
    document.getElementById('StreetName').value=detail.streetname;
    document.getElementById('BuildingName').value=detail.buildingname;
    document.getElementById('Landmark').value=detail.landmark;
    document.getElementById('City').value=detail.city;
    document.getElementById('State').value=detail.state;
    document.getElementById('Country').value=detail.country;
    document.getElementById('ZipCode').value=detail.zipcode;
    document.getElementById("Bar").checked=detail.bar;
    document.getElementById("Gym").checked=detail.gym;
    document.getElementById("Lift").checked=detail.lift;
    document.getElementById("Parking").checked=detail.parking;
    document.getElementById("Restaurant").checked=detail.restaurant;
    document.getElementById("Spa").checked=detail.spa;
    document.getElementById("SwimmingPool").checked=detail.swimmingpool;
    document.getElementById("BluRayPlayer").checked=detail.BluRayPlayer;
    document.getElementById("CableChannels").checked=detail.CableChannels;
    document.getElementById("CDplayer").checked=detail.CDPlayer;
    document.getElementById("Computer").checked=detail.Computer;
    document.getElementById("DVDPlayer").checked=detail.DVDPlayer;
    document.getElementById("Fax").checked=detail.Fax;
    document.getElementById("FlatScreenTV").checked=detail.FlatScreen;
    document.getElementById("GamingConsole").checked=detail.GamingConsole;
    document.getElementById("iPad").checked=detail.iPad;
    document.getElementById("Laptop").checked=detail.Laptop;
    document.getElementById("LaptopSafe").checked=detail.LaptopSafe;
    document.getElementById("NintendoWii").checked=detail.NintendoWii;
    document.getElementById("PS2").checked=detail.PS2;
    document.getElementById("PS3").checked=detail.PS3;
    document.getElementById("PS4").checked=detail.PS4;
    document.getElementById("Radio").checked=detail.Radio;
    document.getElementById("SatelliteChannels").checked=detail.SatelliteChannels;
    document.getElementById("Telephone").checked=detail.Telephone;
    document.getElementById("Telivision").checked=detail.Telivision;
    document.getElementById("VideoGames").checked=detail.VideoGames;
    document.getElementById("Xbox360").checked=detail.XBox360;
    document.getElementById("Barbeque").checked=detail.Barbeque;
    document.getElementById("CoffeeMachine").checked=detail.CoffeeMachine;
    document.getElementById("DiningArea").checked=detail.DiningArea;
    document.getElementById("DiningTable").checked=detail.DiningTable;
    document.getElementById("HighChair").checked=detail.HighChair;
    document.getElementById("Kitchenette").checked=detail.Kitchenette;
    document.getElementById("Kitchenware").checked=detail.Kitchenware;
    document.getElementById("Microwave").checked=detail.Microwave;
    document.getElementById("OutdoorDiningArea").checked=detail.OutdoorDiningArea;
    document.getElementById("OutdoorFurniture").checked=detail.OutdoorFurniture;
    document.getElementById("Refrigerator").checked=detail.Refrigerator;
    document.getElementById("Stovetop").checked=detail.Stovetop;
    document.getElementById("TeaCoffeeMachine").checked=detail.TeaCoffeeMachine;
    document.getElementById("Toaster").checked=detail.Toaster;
    document.getElementById("Elevator").checked=detail.Elevator;
    document.getElementById("GrabRailsToilet").checked=detail.GrabRailsToilet;
    document.getElementById("StaircaseOnly").checked=detail.StaircaseOnly;
    document.getElementById("GroundFloorOnly").checked=detail.GroundFloorOnly;
    document.getElementById("Wheelchair").checked=detail.Wheelchair;
    document.getElementById("BabySafetyGlasses").checked=detail.BabySafetyGlasses;
    document.getElementById("BoardGamePuzzles").checked=detail.BoardGamePuzzles;
    document.getElementById("Books").checked=detail.Books;
    document.getElementById("SafetySockets").checked=detail.SafetySockets;
    document.getElementById('Description').value=detail.description;
    document.getElementById('Policies').value=detail.policies;
    // //images:"Some Images"=detail;
    document.getElementById('PhoneNumber').value=detail.phnno1;
    document.getElementById('AlternateNumber').value=detail.phnno2;
    document.getElementById('Landline').value=detail.landline;
    document.getElementById('Email').value=detail.email;
    document.getElementById('AccountHolersName').value=detail.accholder;
    document.getElementById('AccountNumber').value=detail.accno;
    document.getElementById('GSTNumber').value=detail.gstno;
    document.getElementById('IFSCCode').value=detail.ifsccode;
    document.getElementById('PANNumber').value=detail.panno;
    document.getElementById('AccomodationTax').value=detail.tax;
    document.getElementById('FoodTax').value=detail.foodtaxsame;
  }


 findid(){
   // var x=sessionStorage.getItem("UserEmail");
   // this.$http.get('/api/hotels')
   // .then(response => {
   //   var y= response.data;
   //   console.log(y);
   // });
 }

 update(){
    // this.createhotel();
    // this.createlink();
 }

}



angular.module('roompapaApp')
  .component('hotel', {
    templateUrl: 'app/hotel/hotel.html',
    controller: HotelComponent,
    controllerAs: 'hotelCtrl'
  });

})();
