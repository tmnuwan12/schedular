angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.dashboard', {
    url: '/page2',
    views: {
      'tab4': {
        templateUrl: 'templates/dashboard.html',
        controller: 'dashboardCtrl'
      }
    }
  })

  .state('tabsController.subjects', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/subjects.html',
        controller: 'subjectsCtrl'
      }
    }
  })

  .state('tabsController.schedules', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/schedules.html',
        controller: 'schedulesCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.addInstructorView', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/addInstructorView.html',
        controller: 'addInstructorViewCtrl'
      }
    }
  })

  .state('tabsController.addSubjectAllocationView', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/addSubjectAllocationView.html',
        controller: 'addSubjectAllocationViewCtrl'
      }
    }
  })

  .state('allocationView', {
    url: '/page7',
    templateUrl: 'templates/allocationView.html',
    controller: 'allocationViewCtrl'
  })

  .state('instructorDetail', {
    url: '/page8',
    templateUrl: 'templates/instructorDetail.html',
    controller: 'instructorDetailCtrl'
  })

  .state('subjectAllocationView', {
    url: '/page9',
    templateUrl: 'templates/subjectAllocationView.html',
    controller: 'subjectAllocationViewCtrl'
  })

  .state('login', {
    url: '/page10',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});