angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('https://bootcamp4ramaya947.herokuapp.com/api/listings');
    },
	
	create: function(listing) {
	  return $http.post('https://bootcamp4ramaya947.herokuapp.com/api/listings', listing);
    }, 

    delete: function(id) {
	   /**TODO
        return result of HTTP delete method
       */
      return $http.delete('https://bootcamp4ramaya947.herokuapp.com/api/listings/' + id);
    }
  };

  return methods;
});
