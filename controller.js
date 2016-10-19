
(function() {
  'use strict';

  const app = angular.module('formValidation');

  app.controller('validationcontroller', function($scope, $rootScope) {
    const target = this;
    target.nameTaken = false;
    target.users = [];
    target.submitForm = function(form) {
      var taken = false;
      target.users.map((user) => {
        if (user.username === form.username) {
          taken = true;
        }
      });
      if (!taken) {
        target.users.push({username: form.username, password: form.password, email: form.email, zip: form.zip});
        target.nameTaken = false;
      }
      else target.nameTaken = true;
    };
  });
}());
