(function() {
  'use strict';

  var app = angular.module('mdDatetimeInline', ['mdDateTime']);

  var contains = function(container, contained) {
    var node;
    node = contained.parentNode;
    while (node !== null && node !== container) {
      node = node.parentNode;
    }
    return node !== null;
  };

  app.directive('outsideClick', [
    '$document', '$parse',
    function($document, $parse) {
      return {
        link: function($scope, $element, $attributes) {
          var onDocumentClick, scopeExpression;
          scopeExpression = $attributes.outsideClick;
          onDocumentClick = function(event) {
            if (!contains($element[0], event.target)) {
              $scope.$apply(scopeExpression);
            }
          };
          $document.on('click', onDocumentClick);
          $element.on('$destroy', function() {
            $document.off('click', onDocumentClick);
          });
        }
      };
    }
  ]);

  app.directive('mdDatetimeInline', mdDatetimeInline);

  angular.module('mdDateTime').run(['$templateCache',
    function($templateCache) {
      $templateCache.put('md-date-time.tpl.html', [
        '<div outside-click ng-class="modeClass()" class="time-date">',
        '  <div ng-click="modeSwitch()" aria-label="Switch to {{modeSwitchText()}}" class="display">',
        '    <div class="title">{{display.title()}}</div>',
        '    <div class="content">',
        '      <div class="super-title">{{display.super()}}</div>',
        '      <div ng-bind-html="display.main()" class="main-title" style="color: white;"></div>',
        '      <div class="sub-title">{{display.sub()}}</div>',
        '    </div>',
        '  </div>',
        '  <div class="control">',
        '    <div class="full-title">{{date | date:\'yyyy-MM-dd HH:mm\' }}</div>',
        '    <div class="slider">',
        '      <div class="date-control">',
        '        <div class="title">',
        '          <md-button ng-click="calendar._incMonth(-1)" aria-label="Previous Month" style="float: left"><i class="fa fa-caret-left"></i></md-button>',
        '          <input ng-model="calendar._year" ng-change="calendar.monthChange()" type="number" class="year-part" style="text-align: right;">',
        '          <span class="month-part">{{date | date:\'MM\'}}',
        '            <select ng-model="calendar._month" ng-change="calendar.monthChange()" ng-options="calendar._months.indexOf(month) as month for month in calendar._months"></select>',
        '          </span>',
        '          <md-button ng-click="calendar._incMonth(1)" aria-label="Next Month" style="float: right; margin-right: 1rem;"><i class="fa fa-caret-right"></i></md-button>',
        '        </div>',
        '        <div class="headers">',
        '          <div class="day-cell">日</div>',
        '          <div class="day-cell">一</div>',
        '          <div class="day-cell">二</div>',
        '          <div class="day-cell">三</div>',
        '          <div class="day-cell">四</div>',
        '          <div class="day-cell">五</div>',
        '          <div class="day-cell">六</div>',
        '        </div>',
        '        <div class="days">',
        '          <md-button ng-style="{\'margin-left\': calendar.offsetMargin()}" ng-class="calendar.class(1)" ng-show="calendar.isVisible(1)" ng-click="calendar.select(1)" class="day-cell">1</md-button>',
        '          <md-button ng-class="calendar.class(2)" ng-show="calendar.isVisible(2)" ng-click="calendar.select(2)" class="day-cell">2</md-button>',
        '          <md-button ng-class="calendar.class(3)" ng-show="calendar.isVisible(3)" ng-click="calendar.select(3)" class="day-cell">3</md-button>',
        '          <md-button ng-class="calendar.class(4)" ng-show="calendar.isVisible(4)" ng-click="calendar.select(4)" class="day-cell">4</md-button>',
        '          <md-button ng-class="calendar.class(5)" ng-show="calendar.isVisible(5)" ng-click="calendar.select(5)" class="day-cell">5</md-button>',
        '          <md-button ng-class="calendar.class(6)" ng-show="calendar.isVisible(6)" ng-click="calendar.select(6)" class="day-cell">6</md-button>',
        '          <md-button ng-class="calendar.class(7)" ng-show="calendar.isVisible(7)" ng-click="calendar.select(7)" class="day-cell">7</md-button>',
        '          <md-button ng-class="calendar.class(8)" ng-show="calendar.isVisible(8)" ng-click="calendar.select(8)" class="day-cell">8</md-button>',
        '          <md-button ng-class="calendar.class(9)" ng-show="calendar.isVisible(9)" ng-click="calendar.select(9)" class="day-cell">9</md-button>',
        '          <md-button ng-class="calendar.class(10)" ng-show="calendar.isVisible(10)" ng-click="calendar.select(10)" class="day-cell">10</md-button>',
        '          <md-button ng-class="calendar.class(11)" ng-show="calendar.isVisible(11)" ng-click="calendar.select(11)" class="day-cell">11</md-button>',
        '          <md-button ng-class="calendar.class(12)" ng-show="calendar.isVisible(12)" ng-click="calendar.select(12)" class="day-cell">12</md-button>',
        '          <md-button ng-class="calendar.class(13)" ng-show="calendar.isVisible(13)" ng-click="calendar.select(13)" class="day-cell">13</md-button>',
        '          <md-button ng-class="calendar.class(14)" ng-show="calendar.isVisible(14)" ng-click="calendar.select(14)" class="day-cell">14</md-button>',
        '          <md-button ng-class="calendar.class(15)" ng-show="calendar.isVisible(15)" ng-click="calendar.select(15)" class="day-cell">15</md-button>',
        '          <md-button ng-class="calendar.class(16)" ng-show="calendar.isVisible(16)" ng-click="calendar.select(16)" class="day-cell">16</md-button>',
        '          <md-button ng-class="calendar.class(17)" ng-show="calendar.isVisible(17)" ng-click="calendar.select(17)" class="day-cell">17</md-button>',
        '          <md-button ng-class="calendar.class(18)" ng-show="calendar.isVisible(18)" ng-click="calendar.select(18)" class="day-cell">18</md-button>',
        '          <md-button ng-class="calendar.class(19)" ng-show="calendar.isVisible(19)" ng-click="calendar.select(19)" class="day-cell">19</md-button>',
        '          <md-button ng-class="calendar.class(20)" ng-show="calendar.isVisible(20)" ng-click="calendar.select(20)" class="day-cell">20</md-button>',
        '          <md-button ng-class="calendar.class(21)" ng-show="calendar.isVisible(21)" ng-click="calendar.select(21)" class="day-cell">21</md-button>',
        '          <md-button ng-class="calendar.class(22)" ng-show="calendar.isVisible(22)" ng-click="calendar.select(22)" class="day-cell">22</md-button>',
        '          <md-button ng-class="calendar.class(23)" ng-show="calendar.isVisible(23)" ng-click="calendar.select(23)" class="day-cell">23</md-button>',
        '          <md-button ng-class="calendar.class(24)" ng-show="calendar.isVisible(24)" ng-click="calendar.select(24)" class="day-cell">24</md-button>',
        '          <md-button ng-class="calendar.class(25)" ng-show="calendar.isVisible(25)" ng-click="calendar.select(25)" class="day-cell">25</md-button>',
        '          <md-button ng-class="calendar.class(26)" ng-show="calendar.isVisible(26)" ng-click="calendar.select(26)" class="day-cell">26</md-button>',
        '          <md-button ng-class="calendar.class(27)" ng-show="calendar.isVisible(27)" ng-click="calendar.select(27)" class="day-cell">27</md-button>',
        '          <md-button ng-class="calendar.class(28)" ng-show="calendar.isVisible(28)" ng-click="calendar.select(28)" class="day-cell">28</md-button>',
        '          <md-button ng-class="calendar.class(29)" ng-show="calendar.isVisible(29)" ng-click="calendar.select(29)" class="day-cell">29</md-button>',
        '          <md-button ng-class="calendar.class(30)" ng-show="calendar.isVisible(30)" ng-click="calendar.select(30)" class="day-cell">30</md-button>',
        '          <md-button ng-class="calendar.class(31)" ng-show="calendar.isVisible(31)" ng-click="calendar.select(31)" class="day-cell">31</md-button>',
        '        </div>',
        '      </div>',
        '      <md-button ng-click="modeSwitch()" aria-label="Switch to {{modeSwitchText()}}" class="switch-control"><i class="fa fa-clock-o"></i><i class="fa fa-calendar"></i><span class="visuallyhidden">{{modeSwitchText()}}</span></md-button>',
        '      <div class="time-control">',
        '        <div class="time-inputs">',
        '          <input type="tel" disabled min="{{_hours24 ? 0 : 1}}" max="{{_hours24 ? 23 : 12}}" style="margin:0; font-size: 6rem; text-align: center; float: left; width: 10rem;" ng-model="clock._hours">',
        '          <md-button ng-click="clock._incHours(1)" aria-label="Increment Hours" class="hours up" style="top: -2.5rem; margin: 0; padding: 0; left: 0; width: 10rem;"><i class="fa fa-caret-up"></i></md-button>',
        '          <md-button ng-click="clock._incHours(-1)" aria-label="Decrement Hours" class="hours down" style="bottom: -3rem; margin: 0; padding: 0; left: 0; width: 10rem;"><i class="fa fa-caret-down"></i></md-button>',
        '          <input type="tel" disabled min="0" max="59" ng-model="clock._minutes" style="margin:0; font-size: 6rem; text-align: center; float: right; width: 10rem;">',
        '          <md-button ng-click="clock._incMinutes(1)" aria-label="Increment Minutes" class="minutes up" style="top: -2.5rem; margin: 0; padding: 0; left: auto; right: 0; width: 10rem;"><i class="fa fa-caret-up"></i></md-button>',
        '          <md-button ng-click="clock._incMinutes(-1)" aria-label="Decrement Minutes" class="minutes down" style="bottom: -3rem; margin: 0; padding: 0; left: auto; right: 0; width: 10rem;"><i class="fa fa-caret-down"></i></md-button>',
        '        </div>',
        '        <div ng-if="!_hours24" class="buttons">',
        '          <md-button ng-click="clock.setAM()" aria-label="Switch AM/PM">{{date | date:\'a\'}}</md-button>',
        '        </div>',
        '      </div>',
        '    </div>',
        '  </div>',
        '  <div class="buttons">',
        '    <md-button ng-click="setNow()" aria-label="Set To Current {{ _dispalyMode == \'date\' ? \'Date\' : \'Date/Time\'}}">今天</md-button>',
        '    <md-button ng-click="cancel()" aria-label="Cancel">取消</md-button>',
        '    <md-button ng-click="save()" aria-label="Save">确定</md-button>',
        '  </div>',
        '</div>'].join(''));
    }
  ]);

  /**
   * @ngInject
   */
  function mdDatetimeInline() {
    return {
      restrict: 'EA',
      scope: {
        initDatatime: '=',
        placeholder: '@',
        dateChanged: '&'
      },
      template: [
        '<div class="datatime-picker-inline">',
        ' <md-input-container md-no-float class="md-block" ng-click="vm.showPicker($event)">',
        '   <input ng-model="initDatatime" readonly placeholder="{{vm.placeholder}}">',
        ' </md-input-container>',
        ' <div class="datatime-picker-wrap" ng-class="vm.isShowPicker ? \'show\' : \'\'">',
        '   <div class="show-date" ng-click="vm.datetime=\'date\'" ng-class="vm.datetime === \'time\' ? \'show\' : \'\'">',
        '     <i class="fa fa-angle-left inline-icon" aria-hidden="true"></i>',
        '     <i class="fa fa-calendar inline-icon" aria-hidden="true"></i>',
        '   </div>',
        '   <div class="show-time" ng-click="vm.datetime=\'time\'" ng-class="vm.datetime === \'date\' ? \'show\' : \'\'">',
        '     <i class="fa fa-clock-o inline-icon" aria-hidden="true"></i>',
        '     <i class="fa fa-angle-right inline-icon" aria-hidden="true"></i>',
        '   </div>',
        '   <time-date-picker class="datatime-picker {{ vm.datetime }}" ng-model="vm.dateValue" ',
        '     display-twentyfour="true" on-save="vm.save($value)" display-mode="full" on-cancel="vm.cancel()"></time-date-picker>',
        ' </div>',
        '</div>'
      ].join(''),
      controller: Controller,
      controllerAs: 'vm'
    };

    /**
     * @ngInject
     */
    function Controller($scope, $timeout, dateFilter) {
      var vm = this;

      vm.placeholder = $scope.placeholder;
      vm.dateValue = $scope.initDatatime;

      vm.datetime = 'date';

      var format = 'yyyy-MM-dd HH:mm:ss';
      vm.save = function(value) {
        $scope.initDatatime = dateFilter(new Date(value), format);//moment(value).format(format);
        if (typeof($scope.dateChanged) === 'function') {
          $scope.dateChanged();
        }

        vm.isShowPicker = false;
      };

      vm.cancel = function() {
        vm.isShowPicker = false;
      };

      vm.showPicker = function(event) {
        vm.isShowPicker = !vm.isShowPicker;
      };
    }
  }

})();
