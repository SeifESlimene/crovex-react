/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import logoSmall from '../img/logo-sm.png';
// eslint-disable-next-line no-unused-vars
import kacemora from '../img/kacemora.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      image: logoSmall,
      username: null,
      password: null,
      setUserName: false,
      setPassword: false,
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    fetch('http://localhost/crovex/Crovex/HTML/authentication/index.php', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        [e.target.name]: e.target.value,
      }),
    })
      .then(res => res.json())
      .then(result => {
        result.username
          ? this.setState({ setUserName: true, color: '#0f0', image: kacemora })
          : this.setState({ setUserName: false, color: '', image: logoSmall });
        result.username && result.password
          ? this.setState({ setPassword: true })
          : this.setState({ setPassword: false });
      })
      .catch(err => console.log(err));
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.setUserName && this.state.setPassword) {
      this.setState({ color: '#00f' });
      setTimeout(() => {
        this.props.callbackFromParent(this.state.setPassword);
      }, 2000);
    } else {
      this.setState({ color: '#f00' });
    }
  };

  render() {
    const styles = {
      boxShadow: `0px 0px 20px ${this.state.color}`,
    };
    return (
      <>
        <div className='container'>
          <div className='row vh-100 '>
            <div className='col-12 align-self-center'>
              <div className='auth-page'>
                <div className='card auth-card -lg'>
                  <div className='card-body text-center'>
                    <div className='px-3'>
                      <div className='auth-logo-box'>
                        <a href='#' className='logo logo-admin'>
                          <img
                            src={this.state.image}
                            height='125'
                            width='125'
                            alt={this.state.username}
                            className='auth-logo'
                            style={
                              this.state.color !== ''
                                ? styles
                                : { boxShadow: 'none' }
                            }
                          />
                        </a>
                      </div>

                      <form
                        className='form-horizontal auth-form my-4'
                        id='form-login'
                      >
                        <div className='form-group'>
                          <div className='input-group'>
                            <label htmlFor='username'>Username</label>

                            <input
                              type='text'
                              className='form-control'
                              id='username'
                              style={{ textAlign: 'center' }}
                              onChange={this.handleChange}
                              name='username'
                              autoComplete='off'
                            />
                          </div>
                        </div>

                        <div className='form-group'>
                          <div className='input-group'>
                            <label htmlFor='userpassword'>Password</label>
                            <input
                              type='password'
                              className='form-control'
                              id='userpassword'
                              style={{ textAlign: 'center' }}
                              onChange={this.handleChange}
                              name='password'
                            />
                          </div>
                        </div>

                        <span>
                          <div className='col-4 mt-2'></div>
                          <button
                            className='btn btn-gradient-primary btn waves-effect waves-light'
                            type='button'
                            name='submit'
                            onClick={this.handleSubmit}
                          >
                            Log In <i className='fas fa-sign-in-alt ml-1'></i>
                          </button>
                        </span>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
