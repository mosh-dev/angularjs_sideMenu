angular.module("myApp", [
    'ui.router',
    'ngMaterial',
    'myApp.routes',
    'myApp.controllers'

]).run(function(){ console.log('Main Module Working')})

