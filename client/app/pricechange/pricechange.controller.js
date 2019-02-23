'use strict';

(function(){

class PricechangeComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('roompapaApp')
  .component('pricechange', {
    templateUrl: 'app/pricechange/pricechange.html',
    controller: PricechangeComponent,
    controllerAs: 'pricechangeCtrl'
  });

})();
