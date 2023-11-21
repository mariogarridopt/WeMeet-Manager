import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LanguageSelector from "./LanguageSelector";
import mainLogo from '/logo.svg'
import login_img from '/login.svg'

import "../css/Auth.css";
import { useTranslation } from 'react-i18next';

async function loginUser(credentials) {
  return fetch('http://127.0.0.1:8181/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(function(res) {
      return res.status == 200 ? res.json() : null;
    }).then(function(data) {
      if(data != null && Object.hasOwn(data, 'token')) {
        return data.token;
      }
      return null;
    })
 }

export default function Auth({ setToken }) {
  const { t } = useTranslation();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      "username": username,
      "password": password
    });
    
    setToken(token);
  }

  return(
    <div className="container" id="login-form">
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src={login_img} className="img-fluid" alt="Phone image" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <LanguageSelector />
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="username">{t('username')}</label>
                  <input type="text" id="username" className="form-control form-control-lg" onChange={e => setUserName(e.target.value)} />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="password">{t('password')}</label>
                  <input type="password" id="password" className="form-control form-control-lg" onChange={e => setPassword(e.target.value)} />
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="rememberme" defaultChecked />
                    <label className="form-check-label" htmlFor="rememberme"> Remember me </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-block submit-btn">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

Auth.propTypes = {
  setToken: PropTypes.func.isRequired
}