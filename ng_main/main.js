angular.module('mainApp',
  ['ngRoute', 'ui.calendar','controllers'])

.config(['$routeProvider', function($routeProvider,$rootScope){
  $routeProvider
    .when('/goCalendar', {
      template:
       "<div ng-controller='calendarController'>" +
			"<div class='calendar' ng-model='eventSources' calendar='testCalendar' ui-calendar='uiConfig.calendar'></div>" +
		"</div>",
      controller: 'calendarController'
    })
    .otherwise({redirectTo: '/'});
}]);
