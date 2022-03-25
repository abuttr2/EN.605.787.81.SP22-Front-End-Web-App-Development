(function() {
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    
    function ToBuyController(ShoppingListCheckOffService) {
        var itemsList = this;
        itemsList.items = ShoppingListCheckOffService.getBuyItems();
        itemsList.buyItem = function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtItems = this;
        boughtItems.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        //Bought array
        var boughtItems = [];
        var buyItems = [
            { name: "cookies", quantity: 10, pricePerItem: 1 },
            { name: "chips", quantity: 1, pricePerItem: 1  },
            { name: "apples", quantity: 2, pricePerItem: 1 },
            { name: "slice of pizza", quantity: 3, pricePerItem : 3 },
            { name: "soft pretzel", quantity: 4, pricePerItem: 2 }
        ];

        this.getBuyItems = function() {
            return buyItems;
        };

        this.getBoughtItems = function() {
            return boughtItems;
        };

        this.buyItem = function(itemIndex) {
            var item = buyItems[itemIndex];
            //Add item to bought array
            boughtItems.push(item);
            buyItems.splice(itemIndex, 1);
        };

    }
})();