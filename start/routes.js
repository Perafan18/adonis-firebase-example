'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')
Route.group(() => {
    Route.post('login', 'LoginController.login').as('login')
    Route.get('login', 'LoginController.showLoginForm')
    Route.post('logout', 'LoginController.logout')
    Route.post('password/email', 'ForgotPasswordController.sendResetLinkEmail')
    Route.post('password/reset', 'ResetPasswordController.reset')
    Route.get('password/reset', 'ForgotPasswordController.showLinkRequestForm')
    Route.get('password/reset/:token', 'ResetPasswordController.showResetForm')
    Route.get('register', 'RegisterController.showRegistrationForm')
    Route.post('register', 'RegisterController.register').as('register')
}).namespace('Firebase/Auth')
