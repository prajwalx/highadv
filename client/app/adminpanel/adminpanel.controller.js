'use strict';

(function(){

  var allHotel={};
  var allCity={};
  var citychangeid="";
class AdminpanelComponent {

  constructor($http) {
    this.message = 'Hello';
    this.$http=$http;
    this.allCity={};
    this.allHotel={};
  }

  $onInit(){
    this.hotel();
    this.getcitylist();

  }

  hotel(){
    this.$http.get('/api/hotels/')
      .then(response => {
        allHotel = response.data;
        this.allHotel=allHotel;
        document.getElementById('NoOfHotel').innerHTML=allHotel.length;
        console.log(this.allHotel);
      });
  }

  getcitylist(){
    this.$http.get('/api/citylists/')
      .then(response => {
        allCity = response.data;
        this.allCity=allCity;
        console.log(allCity);
      });
  }

  addcity(){
    console.log("1");
    this.$http.post('/api/citylists',{
      State:document.getElementById("stateinput").value.toLowerCase(),
      City:document.getElementById("cityinput").value.toLowerCase()
    });
    window.alert("successfully added");
    location.reload();
  }

  getValue(x){
    document.getElementById("stateinput").value=x.State;
    document.getElementById("cityinput").value=x.City;
    citychangeid=x._id;
    document.getElementById('updatecity').style.visibility = 'visible';
    document.getElementById('addcity').style.visibility = 'hidden';
  }

  updatestatecity(){
    this.$http.put('/api/citylists/'+citychangeid,{
      State:document.getElementById("stateinput").value.toLowerCase(),
      City:document.getElementById("cityinput").value.toLowerCase()
    });
    document.getElementById('updatecity').style.visibility = 'hidden';
    document.getElementById('addcity').style.visibility = 'visible';
    document.getElementById("stateinput").value="";
    document.getElementById("cityinput").value="";
    window.alert("successfully updated");
    location.reload();
  }

  openhoteledit(hotel)
  {
    console.log("call");
    console.log(hotel.email);
  }

  edithotel(hotel)
  {
    sessionstorage.setItem("EditHotelEmail",hotel.email);
    console.log("calledithotel");
  }
}

angular.module('roompapaApp')
  .component('adminpanel', {
    templateUrl: 'app/adminpanel/adminpanel.html',
    controller: AdminpanelComponent,
    controllerAs: 'adminpanelCtrl'
  });

})();
