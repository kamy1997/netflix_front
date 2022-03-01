"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  register: function register(user) {
    return fetch("http://localhost:3131/api/v1/users/register", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(function (res) {
      return res.json();
    });
  },
  login: function login(user) {
    return fetch("".concat(process.env.NEXT_PUBLIC_API_URL, "/users/login"), {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(function (res) {
      return res.json();
    });
  },
  getUser: function getUser(token) {
    return fetch('http://localhost:3131/api/v1/users/get-user', {
      headers: {
        "authorization": token
      }
    }).then(function (res) {
      return res.json();
    });
  },
  updateUser: function updateUser(token, user) {
    return fetch('http://localhost:3131/api/v1/users/update-user', {
      method: "PUT",
      headers: {
        "authorization": token,
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(function (res) {
      return res.json();
    });
  },
  verifyToken: function verifyToken(token) {
    return fetch('http://localhost:3131/api/v1/users/verifytoken', {
      headers: {
        "authorization": token
      }
    }).then(function (res) {
      return res.json();
    });
  }
};
exports["default"] = _default;