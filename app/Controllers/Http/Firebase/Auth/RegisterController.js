'use strict'

class FirebaseAuthRegisterController {

  showRegistrationForm ({view}) {
    return view.render('firebase.auth.register')
  }

  register () {

  }
}

module.exports = FirebaseAuthRegisterController
