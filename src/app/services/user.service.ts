import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

// @Injectable()
export class UserService {
private helper: JwtHelper = new JwtHelper();
  constructor() { }

  fetchLogin(user: any) {
    return fetch('http://localhost:3000/api/users/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        return true;
      }
      return false;
    })
    .catch(error => {
      return error;
    });
  }

  isPsicologist() {
    const token = localStorage.getItem('token');
    if (token) {
      const decode = this.helper.decodeToken(token).recordset[0];
      if (decode.rol_id === 1) {
        return true;
      }
    }
    return false;
  }

  isCandidate() {
    const token = localStorage.getItem('token');
    if (token) {
      const decode = this.helper.decodeToken(token).recordset[0];
      if (decode.rol_id === 2) {
        return true;
      }
    }
    return false;
  }

  loggedIn() {
    return tokenNotExpired();
  }

}
