'use strict';

(function(){

class InventoryComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('roompapaApp')
  .component('inventory', {
    templateUrl: 'app/inventory/inventory.html',
    controller: InventoryComponent,
    controllerAs: 'inventoryCtrl'
  });

})();
