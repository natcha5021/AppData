var starterservices =angular.module('starterservices', [])

starterservices.factory('placeService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data


    var chats = [{
    id:'1',
      language: 'EN',
    type: 'Landmark',
    name: 'School',
    description: 'description',
        //location
        la: '111',
        ln: '222',
        //Contact
        contactName: 'john',
        phoneNumber: '0997868584',
        address: 'chiang mai university',
        website:'www.dd.com',
        openTime: '08.00',
        closeTime: '09.00',
        workingDay: 'mon-fri',
        note: 'note',
        question: 'question',
        answer1: 'answer1',
        answer2: 'answer2',
        answer3: 'answer3',
        answer4: 'answer4',
        solution: 'answer2',
        score:'5'
  }, {
      id:'2',
    language: 'CN',
    type: 'Landmark',
    name: 'Park',
    description: 'description',
    //location
    la: '111',
    ln: '222',
    //Contact
    contactName: 'john',
    phoneNumber: '0997868584',
    address: 'chiang mai university',
    website:'www.dd.com',
    openTime: '08.00',
    closeTime: '09.00',
    workingDay: 'mon-fri',
    note: 'note',
    question: 'question',
    answer1: 'answer1',
    answer2: 'answer2',
    answer3: 'answer3',
    answer4: 'answer4',
    solution: 'answer2',
    score:'5'
  }, {
      id:'3',
    language: 'EN',
    type: 'Landmark',
    name: 'Garden',
    description: 'description',
    //location
    la: '111',
    ln: '222',
    //Contact
    contactName: 'john',
    phoneNumber: '0997868584',
    address: 'chiang mai university',
    website:'www.dd.com',
    openTime: '08.00',
    closeTime: '09.00',
    workingDay: 'mon-fri',
    note: 'note',
    question: 'question',
    answer1: 'answer1',
    answer2: 'answer2',
    answer3: 'answer3',
    answer4: 'answer4',
    solution: 'answer2',
    score:'5'

  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

//.factory('PlaceSrv', function(DatabaseSrv) {
//  var Places = {};
//
//  Places.get = function(index) {
//    return Places.list[index];
//  };
//  Places.getById = function(id) {
//    var Place = null;
//    Places.list.forEach(function(item, index) {
//      if (item.id == id) {
//        Place = item
//      }
//    });
//    return Place;
//  };
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
//
//  Places.update = function(Place, callback) {
//    var database = DatabaseSrv;
//    database.method = "POST";
//    database.path = "Place/edit";
//    database.data = Place;
//    database.req(function(res) {
//      callback(res);
//    });
//    // products.list[index] = product;
//  };
//  Places.del = function(Place, callback) {
//    // if (id == 0) {
//    //     products.list.splice(0, 1);
//    // } else {
//    //     products.list.splice(id, 1);
//    // }
//    var database = DatabaseSrv;
//    database.method = "POST";
//    database.path = "Place/delete";
//    database.data = Place;
//    database.req(function(res) {
//      callback(res);
//    });
//    // products.list.splice(index);
//    // delete products.list[id];
//  };
//  Places.fetch = function(callback) {
//    var database = DatabaseSrv;
//    database.method = "GET";
//    database.path = "Place/";
//    database.req(function(res) {
//      Places.list = res.data;
//      callback(res);
//    });
//  };
//
//



//.factory('DatabaseSrv', ["$http",
//    function($http) {
//      var database = {
//        server: "http://52.163.91.205/",
//        path: "",
//        method: "GET",
//        data: null,
//        prepared: function(){
//          return {
//            method: this.method,
//            url: this.server + this.path,
//            data: this.data
//          };
//        },
//        req: function(callback) {
//          $http(this.prepared()).then(function successCallback(response) {
//            console.log(response);
//            callback(response);
//          }, function errorCallback(response) {
//            console.log(response);
//            callback(response);
//          });
//        }
//      }
//      return database;
//    }
//  ]);






