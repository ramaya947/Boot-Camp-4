
angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });
    

    $scope.detailedInfo = undefined;
    $scope.newListing = {
      code: "",
      name: "",
      address: ""
    }

    $scope.addListing = function() {
	  /**TODO 
	  *Save the article using the Listings factory. If the object is successfully 
	  saved redirect back to the list page. Otherwise, display the error
	  */
      Listings.create($scope.newListing).then(function(){
        Listings.getAll().then(function(response) {
          $scope.listings = response.data;
        }, function(error) {
          console.log('Unable to retrieve listings:', error);
        });
      }, function(error){
        console.log(error);
      });
      
    };

    $scope.deleteListing = function(id) {
	   /**TODO
        Delete the article using the Listings factory. If the removal is successful, 
		navigate back to 'listing.list'. Otherwise, display the error. 
       */
      Listings.delete(id).then(function(){
        Listings.getAll().then(function(response) {
          $scope.listings = response.data;
        }, function(error) {
          console.log('Unable to retrieve listings:', error);
        });
      }, function(error){
        console.log(error);
      });
      
      
    };

    $scope.showDetails = function(code) {
      var position;
      for (var i = 0; i < $scope.listings.length; i++){
        if ($scope.listings[i].code === code)
          position = i; 
      }
      $scope.detailedInfo = $scope.listings[position];
    };
  }
]);