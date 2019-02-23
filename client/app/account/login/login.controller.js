'use strict';

class LoginController {
  constructor(Auth, $location) {
    this.user = {};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$location = $location;
  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.login({
          email: this.user.email,
          password: this.user.password
        })
        .then(() => {
          // Logged in, redirect to home
          sessionStorage.setItem("UserEmail", this.user.email);
          this.$location.path('/newhotel');

        })
        .catch(err => {
          this.errors.other = err.message;
        });
    }
  }
}

angular.module('roompapaApp')
  .controller('LoginController', LoginController);
