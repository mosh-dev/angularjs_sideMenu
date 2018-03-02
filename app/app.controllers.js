var app = angular.module('myApp.controllers', []).run(function(){ console.log('Controllers Working')});

app.controller('AppCtrl', function ($scope, $mdSidenav, $state) {

    // Init Default Active Item...
    $scope.activeMenu = { };
    $scope.activeSubMenu = { };

    // Sidenav Toggle
    $scope.toggle = function() { $mdSidenav('left').toggle(); };

     $scope.menus = [
        { 
            icon: "ic_apps_24px.svg",
            name: "Tables",
            state: "home.table",
            items : [{name : 'Submenu 1'}, {name : 'Submenu 2'}, {name : 'Submenu 2'}] 
        },
        {   icon: "ic_attach_file_24px.svg", name: "Reminders", items : [] },
        { 
            icon: "ic_archive_24px.svg",
            name: "Inspriation", 
            items : [{name : 'Submenu 1'}, {name : 'Submenu 2'}, {name : 'Submenu 2'}] 
        },
        { 
            icon: "ic_apps_24px.svg",
            name: "Notes", 
            items : [{name : 'Submenu 1'}, {name : 'Submenu 2'}, {name : 'Submenu 2'}] 
        },
        {   icon: "ic_attach_file_24px.svg", name: "Reminders", items : [] },
        { 
            icon: "ic_archive_24px.svg",
            name: "Inspriation", 
            items : [{name : 'Submenu 1'}, {name : 'Submenu 2'}, {name : 'Submenu 2'}] 
        },
        { 
            icon: "ic_battery_30_24px.svg",
            name: "Personal", 
            items : [{name : 'Submenu 1'}, {name : 'Submenu 2'}, {name : 'Submenu 2'}] 
        },
        { 
            icon: "ic_archive_24px.svg",
            name: "Inspriation", 
            items : [{name : 'Submenu 1'}, {name : 'Submenu 2'}, {name : 'Submenu 2'}] 
        }
    ];


    // MENU ITEM NAVIGATION ....................................
    $scope.parentMenuAction = function(menu) {
        //Set as Active Menu or Remove as Active menu
        $scope.activeMenu = (menu === $scope.activeMenu) ? {} : menu;

        // Other Things to Do When Parent Manu is Clicked ...
        console.log('Active Menu ' + $scope.activeMenu.name);
        $state.go(menu.state);

    };

    

    // SUB MENU ITEM NAVIGATION ..............................
    $scope.chieldMenuAction = function(item) {
        // Set As Active SubMenu Item
        $scope.activeSubMenu = item;

        console.log('Active SubMenu ' + $scope.activeSubMenu);
    }


    console.log("Hellow From Appctrl");



});
