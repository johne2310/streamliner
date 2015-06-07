// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

(function() {

  var app = angular.module('app', ['ionic']);

  //////////////////////////
  //start controllers section
  /////////////////////////
  app.controller('DrugController', ['$scope', '$http', '$state',
    function($scope, $http, $state) {
      $http.get('js/data.json').success(function(data) {
        $scope.drugs = data.Drugs;
      });
    }
  ]);

  app.controller('PBSController', ['$scope', '$http', '$state',
    function($scope, $http, $state) {
      $http.get('js/data.json').success(function(data) {
        $scope.prescribing = data.Drugs.Prescribing;
      });
    }
  ]);



  //////////////////////////
  //start app config section
  /////////////////////////
  app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'templates/home.html'
        }
      }
    });

    $stateProvider.state('druglist', {
      url: '/druglist',
      views: {
        'tab-druglist': {
          templateUrl: 'templates/druglist.html',
          controller: 'DrugController'
        }
      }
    });
    $stateProvider.state('details', {
      url: '/details/:drugIndex',
      views: {
        'tab-druglist': {
          templateUrl: 'templates/details.html',
          controller: 'DrugController'
        }
      }
    });

    $urlRouterProvider.otherwise('/home');
  });
  ////////////////////////
  //end app config section
  ////////////////////////


  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });


}());
