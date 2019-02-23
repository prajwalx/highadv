'use strict';

(function(){

class PriceComponent {
  constructor($http) {
    this.message = 'Hello';
    this.$http=$http;
  }


  create(){
     var startdate = new Date();
     var enddate=startdate.getTime();
     enddate=new Date(enddate+100*365*24*60*60*1000);
     var price={
                  StartDate:startdate,
                  EndDate:enddate,
                  MainPrice:{
                     PulishedPrice:20,
                     BasePriceSingle:20,
                     BasePriceDouble:20,
                     ExtraAdultCost:20,
                     ExtraChildCost:20,
                     AdultBreakfastRate:20,
                     AdultLunchRate:20,
                     AdultDinnerRate:20,
                     ChildBreakfastRate:20,
                     ChildLunchRate:20,
                     ChildDinnerRate:20,
                  }
                }
     this.$http.post('/api/prices',{
       UserEmail:"newemail@gmail.com",
       HotelId:"String",
       RoomId:"String",
       Price:price,
   });
 }

  //class end
}

angular.module('roompapaApp')
  .component('price', {
    templateUrl: 'app/price/price.html',
    controller: PriceComponent,
    controllerAs: 'priceCtrl'
  });

})();
