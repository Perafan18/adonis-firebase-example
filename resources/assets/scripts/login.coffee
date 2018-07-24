$(document).ready ->
    $('#login-button').click ->
        email = $('#email-input').val()
        password = $('#password-input').val()
        firebase.auth().createUserWithEmailAndPassword(email, password).catch (error) ->
          errorCode = error.code
          errorMessage = error.message
          return
