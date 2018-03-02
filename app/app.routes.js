angular.module("myApp.routes", []).run(function(){ console.log('Routes Working')})


.config(function($stateProvider, $urlRouterProvider){

	var home = {
		abstract : true,
		name: 'home', 
		url: '/', 
		templateUrl: 'templates/app/app.htm', 
		controller: 'AppCtrl' 
	};
	
	var dash = {
		name: 'home.dash',
		url: 'dash',
		templateUrl: 'templates/dashboard/dash.htm'
	};

	var table = {
		name: 'home.table', 
		url: 'table', 
		templateUrl: 'templates/table/table.htm'
	};

    $stateProvider.state(home);
    $stateProvider.state(dash);
    $stateProvider.state(table);


    $urlRouterProvider.otherwise('/dash');
})
