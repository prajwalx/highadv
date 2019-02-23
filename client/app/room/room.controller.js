'use strict';

(function(){

class RoomComponent {
  constructor($http) {
    this.message = 'Hello';
    this.$http=$http;
  }

  create(){
    this.$http.post('/api/rooms',{
     UserEmail:sessionStorage.getItem("UserEmail"),
     HotelId:sessionStorage.getItem("UserHotelId"),
     RoomType: "String",
     NoOfRoom: 1,
     BedType: true,
     AdultBase:1,
     AdultMax:1,
     Infants:1,
     ChildrenBase:1,
     ChildrenMax:1,
     Total:1,
     ClothesRack:true,
     DryingRack:true,
     FoldUpBed:true,
     SofaBed:true,
     Wardrobe:true,
     Carpeted:true,
     WalkingCloset:true,
     ExtraLongBed:true,
     FirePlace:true,
     Heater:true,
     InterConnectingRooms:true,
     Iron:true,
     Desk:true,
     Wifi:true,
     Smoking:true,
     Telivision:true,
     Bathroom:true,
     ToilerPaper:true,
     BathTub:true,
     Shower:true,
     BathRobe:true,
     FreeToiletries:true,
     HairDryer:true,
     SpaTub:true,
     SharedBathroom:true,
     Slippers:true,
     Toilet:true,
     Geyser:true,
     ExecutiveLounge:true,
     AlarmClock:true,
     WakeUp:true,
     Linens:true,
     Sheets:true,
     AirConditioner:true,
     Cooler:true,
     Fan:true,
     Kettle:true,
     Laundry:true,
     Balcony:true,
     Terrace:true,
     CityView:true,
     LakeView:true,
     LandmarkView:true,
     PoolView:true,
     RiverView:true,
     OceanView:true,
   });
   location.href="/allrooms";
 }

  //class end
}

angular.module('roompapaApp')
  .component('room', {
    templateUrl: 'app/room/room.html',
    controller: RoomComponent,
    controllerAs: 'roomCtrl'
  });

})();
