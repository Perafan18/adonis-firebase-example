'use strict'

const Config = use('Config')

class FirebaseAuthLoginController {

  login () {

  }

  showLoginForm ({ view }) {
    return view.render('firebase.auth.login')
  }

  logout () {

  }
}

module.exports = FirebaseAuthLoginController
