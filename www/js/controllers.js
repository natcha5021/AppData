angular.module('startercontrollers', [])


  .controller('PlaceCreateCtrl', ['$scope', '$http', function($scope,$http,$cordovaGeolocation) {

      $scope.place = {
     // attribute
      }
    $scope.addplace = function () {
      $scope.error = false;
      var server= "http://52.163.91.205";
      var path = "/";

      var data ={ place: $scope.place}

      //var config = {
      //  headers: {
      //    'Content-Type': 'application/json; charset=utf-8;'
      //  }
      //}

      $http.post(server+path,data)
        .then(function (response) {
          console.log(response);

        }).catch(function (err) {
        console.log(err);
        $scope.error = true;

      });
    };

    $scope.getlocation = function () {

      var posOptions = {timeout: 10000, enableHighAccuracy: false};
      $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function (position) {
          var lat  = position.coords.latitude
          var long = position.coords.longitude
        }, function(err) {
          // error
        });

    };

    $scope.uploadFile = function(files) {
      var fd = new FormData();
      //Take the first selected file
      fd.append("file", files[0]);

      $http.post(uploadUrl, fd, {
        withCredentials: true,
        headers: {'Content-Type': undefined },
        transformRequest: angular.identity
      }).success(allright).error();

    };

  }])


//// add place

//  Places.add = function(Place, callback) {
//    var database = DatabaseSrv;
//    database.method = "POST";
//    database.path = "Place/add";
//    database.data = Place;
//    database.req(function(res) {
//      callback(res);
//    });
//    // products.list.push(product);
//  };

//.controller('PlaceCreateCtrl', ['$scope', '$routeParams', 'PlaceSrv', 'ngNotify',
//
//    function($scope, $routeParams, PlaceSrv, ngNotify) {
//      $scope.place = {
//        // attribute
//      }
//      if ($routeParams.id) {
//        $scope.place = PlaceSrv.get($routeParams.id);
//      }
//
//      $scope.insertData = function(place) {
//        PlaceSrv.add(place, $scope.save);
//      };
//      $scope.save = function(req) {
//        if (!req.data) {
//          return ngNotify.set('There is an data missing. Please check.', 'error');
//        }
//        // product.id = productSrv.list.length + 1;
//        // productSrv.add(product);
//        return ngNotify.set('Place updated.', 'success');
//      };
//    }
//  ])



.controller('ChatDetailCtrl', function($scope, $stateParams, placeService) {
    $scope.place = placeService.get($stateParams.chatId);
  })


.controller('listplace', function($scope, placeService) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  $scope.$on('$ionicView.enter', function(e) {
  });

  $scope.places = placeService.all();

  $scope.remove = function(place) {
    placeService.remove(place);
  };
});



//
//
//  .controller('ChatsCtrl', function($scope, PlaceSrv) {
//    // With the new view caching in Ionic, Controllers are only called
//    // when they are recreated or on app start, instead of every page change.
//    // To listen for when this page is active (for example, to refresh data),
//    // listen for the $ionicView.enter event:
//    //
//    //$scope.$on('$ionicView.enter', function(e) {
//    //});
//
//   // $scope.Places = PlaceSrv.all();
//    //$scope.remove = function(chat) {
//    //  Chats.remove(chat);
//    //};
//  })
//


//.controller('AccountCtrl', function($scope) {
//  //$scope.settings = {
//  //  enableFriends: true
//  //};
//})
//
//
//  .controller('PlaceCreateTest', ['$scope', '$routeParams', 'PlaceSrv', 'ngNotify',
//
//
//
//  ])
//
//

//
//////
//  .controller('EditCtrl', ['$scope', '$routeParams', '$location', 'PlaceSrv', 'ngNotify',
//    //function($scope, $routeParams, $location, PlaceSrv, ngNotify) {
//    //  $scope.place = {
//    //    id: 0,
//    //    name: '',
//    //    price: 0,
//    //    code: '',
//    //    stock: 0
//    //  }
//    //  if ($routeParams.id != '') {
//    //    $scope.place = PlaceSrv.get($routeParams.id);
//    //  }
//    //  // $scope.validate = function(product) {
//    //  //     if (product.name == '') {
//    //  //         return false;
//    //  //     } else if (product.price == 0) {
//    //  //         return false;
//    //  //     } else if (product.code == '') {
//    //  //         return false;
//    //  //     } else if (product.stock == 0) {
//    //  //         return false;
//    //  //     } else return true;
//    //  // };
//    //  // $scope.save = function(product) {
//    //  //     if (!$scope.validate(product)) {
//    //  //         return ngNotify.set('There is an data missing. Please check.', 'error');
//    //  //     }
//    //  //     productSrv.update($routeParams.id, product);
//    //  //     return ngNotify.set('New product added.', 'success');
//    //  // };
//    //
//    //  $scope.add = function(place) {
//    //    PlaceSrv.add(place, $scope.save);
//    //  };
//    //  $scope.save = function(req) {
//    //    if (!req.data) {
//    //      return ngNotify.set('There is an data missing. Please check.', 'error');
//    //    }
//    //    // product.id = productSrv.list.length + 1;
//    //    // productSrv.add(product);
//    //    return ngNotify.set('Place updated.', 'success');
//    //  };
//    //}
//  ]);

//
//startercontrollers.controller('DashCtrl', function($scope,$http) {
//  $scope.insertData = function () {
//
//
//    var data = $.param({
//
//      language: $scope.language = 'en',
//      name: $scope.name,
//      description: $scope.description,
//      type: $scope.type,
//      //location
//      la: $scope.la,
//      ln: $scope.ln,
//      //Contact
//      contactName: $scope.contactName,
//      phoneNumber: $scope.phoneNumber,
//      address: $scope.address,
//      website: $scope.website,
//      openTime: $scope.openTime,
//      closeTime: $scope.closeTime,
//      workingDay: $scope.workingDay,
//      description: $scope.description,
//      question: $scope.question,
//      answer1: $scope.answer1,
//      answer2: $scope.answer2,
//      answer3: $scope.answer3,
//      answer4: $scope.answer4,
//      solution: $scope.solution,
//      score: $scope.score
//    });
//
//    $http.post("http://52.163.91.205/",data).success(function (data, status, headers, config) {
//      console.log(" sucess ")
//    })
//
//
//  }
//})



