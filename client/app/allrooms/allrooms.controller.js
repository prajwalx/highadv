'use strict';

(function(){
var ShowRooms=[];

class AllroomsComponent {
  constructor($http) {
    this.message = 'Hello';
    this.$http=$http;
    this.ShowRooms=[];
  }

  $onInit() {
    var x;
    var useremail=sessionStorage.getItem("UserEmail");
    this.$http.get('/api/rooms/UserEmailHotel/'+useremail)
      .then(response => {
        x = response.data;
        this.ShowPrevRooms(x);
      });
  }

  ShowPrevRooms(x){
    this.ShowRooms=x;
  }

  AddRoomPage(){
    location.href='/room';
  }
}

angular.module('roompapaApp')
  .component('allrooms', {
    templateUrl: 'app/allrooms/allrooms.html',
    controller: AllroomsComponent,
    controllerAs: 'allroomsCtrl'
  });

})();
