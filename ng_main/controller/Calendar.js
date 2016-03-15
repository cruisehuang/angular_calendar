angular.module('controllers', ['ui.calendar'])

.controller('calendarController', function($scope, $timeout, $compile, uiCalendarConfig) {
                     
  $scope.eventSources= new Array();

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  $scope.scheduleEvents = [
      { title: 'Plan1',
        start: new Date(y, m, d, 8,0),
        end: new Date(y, m, d, 14,0),
        rendering: 'background',
        backgroundColor: 'orange'
      },
      { title: 'Plan2 ',
        start: new Date(y, m, d+1, 13,0),
        end: new Date(y, m, d+1, 17,0),
        rendering: 'background',
        backgroundColor: 'blue'
      },
      { title: 'Plan3 ',
        start: new Date(y, m, d+2, 11,0),
        end: new Date(y, m, d+2, 16,0),
        rendering: 'background',
        backgroundColor: 'red'
      },
    ];
  $scope.eventSources.push($scope.scheduleEvents);

  $scope.events = [
      { title: 'appointment1',
        start: new Date(y, m, d, 12,0),
        end: new Date(y, m, d, 12,30),
      },
      { title: 'meeting',
        start: new Date(y, m, d+1, 16,0),
        end: new Date(y, m, d+1, 17,0),
      },
      { title: 'private',
        start: new Date(y, m, d+2, 10,0),
        end: new Date(y, m, d+2, 10,30),
      },
    ];
  $scope.eventSources.push($scope.events);

  /* Change View */
  $scope.changeView = function(view, calendar)
  {
    uiCalendarConfig.calendars[calendar].fullCalendar('changeView', view);
  };
  /* Change View */
  $scope.renderCalender = function(calendar)
  {
    $timeout(function()
    {
      if (uiCalendarConfig.calendars[calendar])
      {
        uiCalendarConfig.calendars[calendar].fullCalendar('render');
      }
    });
  };
  /* Render Tooltip */
  $scope.eventRender = function( event, element, view ) {
//     element.attr({'tooltip': event.title,
//                   'tooltip-append-to-body': true});
     $compile(element)($scope);
  };
  /* config object */
  $scope.uiConfig = {
    calendar : {
      editable : true,
      header : {
        left : 'prev,next today',
        center : 'title',
        right : 'agendaWeek,agendaDay'
      },
      defaultView : 'agendaDay',
      allDaySlot : false,
      slotDuration : '00:15:00',
      slotMinutes : 30,
      defaultEventMinutes : 30,
      minTime: '06:00',
      maxTime: '23:00',
      firstHour : 7,
      eventColor : 'green',
      contentHeight : 720,
      nowIndicator : true,
      businessHours : {
        start : '8:00', // a start time (10am in this example)
        end : '18:00', // an end time (6pm in this example)
        dow : [ 0, 1, 2, 3, 4, 5, 6 ]
      },
      eventRender : $scope.eventRender
    }
  };
});


