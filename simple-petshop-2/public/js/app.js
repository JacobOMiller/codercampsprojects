'use strict';

var app = angular.module('MyApp',['ui.router']);

app.config([
    '$stateProvider',
    function ($stateProvider){
        $stateProvider
        .state('home',{
            url:'/home',
            template:'<h2>home</h2>'
        })
        .state('about',{
            url:'/about',
            template:'<h2>about</h2>'
        })
        .state('contact',{
            url:'/contact',
            template:'<h2>contact</h2>'
        })
        .state('store',{
            url:'/store',
            templateUrl:'/templates/blog/list.html',
            controller:'Store.storeController'
        })
        .state('store-create',{
            url:'/store/create',
            templateUrl:'/templates/blog/edit.html',
            controller:'Store.storeController'
        })
        .state('posts-view',{
            url:'/store/:id',
            templateUrl:'/templates/blog/postView.html',
            controller:'Store.storeController'
        })
        .state('posts-update',{
            url:'/store/:id/update',
            templateUrl:'/templates/blog/edit.html',
            controller:'Store.storeController'
        });

    }
])
