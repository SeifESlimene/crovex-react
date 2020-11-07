/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import logoSmall from '../img/logo-sm.png';
import logo from '../img/logo.png';
import logoDark from '../img/logo-dark.png';
// import user from '../img/user-1.jpg';
import flagUsa from '../img/flags/us_flag.jpg';
import kacemora from '../img/kacemora.png';
// import flagFrench from '../img/flags/french_flag.jpg';
// import flagItaly from '../img/flags/italy_flag.jpg';
// import flagRussia from '../img/flags/russia_flag.jpg';
// import flagSpain from '../img/flags/spain_flag.jpg';
// import flagGermany from '../img/flags/germany_flag.jpg';
import { Link } from 'react-router-dom';
// import Modals from './Modals';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: this.props.isLogin,
    };
  }
  // logout(e) {
  //   e.preventDefault();
  //   this.setState({ isLogin: false });
  //   return <Redirect to="/" />
  // }
  render() {
    if (this.state.isLogin) {
    }

    return (
      <div className='topbar'>
        <div className='topbar-left'>
          <Link to='/' className='logo'>
            <span>
              <img src={logoSmall} alt='logo-small' className='logo-sm' />{' '}
            </span>
            <span>
              <img src={logo} alt='logo-large' className='logo-lg logo-light' />
              <img src={logoDark} alt='logo-large' className='logo-lg' />
            </span>
          </Link>
        </div>

        <nav className='navbar-custom'>
          <ul className='list-unstyled topbar-nav float-right mb-0'>
            <li className='hidden-sm'>

                {/* <Modals ></Modals> */}
                {/* English{' '}
                <img src={flagUsa} className='ml-2' height='16' alt='' />{' '} */}
                {/* <i className='mdi mdi-chevron-down'></i> */}
              {/* <div className='dropdown-menu dropdown-menu-right'>
                  <a className='dropdown-item' href='#'>
                    <span> German </span>
                    <img
                      src={flagGermany}
                      alt=''
                      className='ml-2 float-right'
                      height='14'
                    />
                  </a>
                  <a className='dropdown-item' href='#'>
                    <span> Italian </span>
                    <img
                      src={flagItaly}
                      alt=''
                      className='ml-2 float-right'
                      height='14'
                    />
                  </a>
                  <a className='dropdown-item' href='#'>
                    <span> French </span>
                    <img
                      src={flagFrench}
                      alt=''
                      className='ml-2 float-right'
                      height='14'
                    />
                  </a>
                  <a className='dropdown-item' href='#'>
                    <span> Spanish </span>
                    <img
                      src={flagSpain}
                      alt=''
                      className='ml-2 float-right'
                      height='14'
                    />
                  </a>
                  <a className='dropdown-item' href='#'>
                    <span> Russian </span>
                    <img
                      src={flagRussia}
                      alt=''
                      className='ml-2 float-right'
                      height='14'
                    />
                  </a>
    </div>*/}
            </li>

            <li className='dropdown notification-list'>
              <a
                className='nav-link dropdown-toggle arrow-none waves-light waves-effect'
                data-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='false'
                aria-expanded='false'
              >
                <i className='ti-bell noti-icon'></i>
                {/* <span className='badge badge-danger badge-pill noti-icon-badge'>
                    2
                  </span> */}
              </a>
              <div className='dropdown-menu dropdown-menu-right dropdown-lg pt-0'>
                <h6 className='dropdown-item-text font-15 m-0 py-3 bg-primary text-white d-flex justify-content-between align-items-center'>
                  Notifications{' '}
                  <span className='badge badge-light badge-pill'>0</span>
                </h6>
                {/* <div className='slimscroll notification-list'>
                    <a href='#' className='dropdown-item py-3'>
                      <small className='float-right text-muted pl-2'>
                        2 min ago
                      </small>
                      <div className='media'>
                        <div className='avatar-md bg-primary'>
                          <i className='la la-cart-arrow-down text-white'></i>
                        </div>
                        <div className='media-body align-self-center ml-2 text-truncate'>
                          <h6 className='my-0 font-weight-normal text-dark'>
                            Your order is placed
                          </h6>
                          <small className='text-muted mb-0'>
                            Dummy text of the printing and industry.
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href='#' className='dropdown-item py-3'>
                      <small className='float-right text-muted pl-2'>
                        10 min ago
                      </small>
                      <div className='media'>
                        <div className='avatar-md bg-success'>
                          <i className='la la-group text-white'></i>
                        </div>
                        <div className='media-body align-self-center ml-2 text-truncate'>
                          <h6 className='my-0 font-weight-normal text-dark'>
                            Meeting with designers
                          </h6>
                          <small className='text-muted mb-0'>
                            It is a long established fact that a reader.
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href='#' className='dropdown-item py-3'>
                      <small className='float-right text-muted pl-2'>
                        40 min ago
                      </small>
                      <div className='media'>
                        <div className='avatar-md bg-pink'>
                          <i className='la la-list-alt text-white'></i>
                        </div>
                        <div className='media-body align-self-center ml-2 text-truncate'>
                          <h6 className='my-0 font-weight-normal text-dark'>
                            UX 3 Task complete.
                          </h6>
                          <small className='text-muted mb-0'>
                            Dummy text of the printing.
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href='#' className='dropdown-item py-3'>
                      <small className='float-right text-muted pl-2'>
                        1 hr ago
                      </small>
                      <div className='media'>
                        <div className='avatar-md bg-warning'>
                          <i className='la la-truck text-white'></i>
                        </div>
                        <div className='media-body align-self-center ml-2 text-truncate'>
                          <h6 className='my-0 font-weight-normal text-dark'>
                            Your order is placed
                          </h6>
                          <small className='text-muted mb-0'>
                            It is a long established fact that a reader.
                          </small>
                        </div>
                      </div>
                    </a>
                    <a href='#' className='dropdown-item py-3'>
                      <small className='float-right text-muted pl-2'>
                        2 hrs ago
                      </small>
                      <div className='media'>
                        <div className='avatar-md bg-info'>
                          <i className='la la-check-circle text-white'></i>
                        </div>
                        <div className='media-body align-self-center ml-2 text-truncate'>
                          <h6 className='my-0 font-weight-normal text-dark'>
                            Payment Successfull
                          </h6>
                          <small className='text-muted mb-0'>
                            Dummy text of the printing.
                          </small>
                        </div>
                      </div>
                    </a>
                  </div> */}

                <a href='#' className='dropdown-item text-center text-primary'>
                  View all <i className='fi-arrow-right'></i>
                </a>
              </div>
            </li>

            <li className='dropdown'>
              <a
                className='nav-link dropdown-toggle waves-effect waves-light nav-user'
                data-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='false'
                aria-expanded='false'
              >
                <img
                  src={kacemora}
                  alt='profile-user'
                  className='rounded-circle'
                />{' '}
                <span className='ml-1 nav-user-name hidden-sm'>
                  Mohamed <i className='mdi mdi-chevron-down'></i>{' '}
                </span>
              </a>
              <div className='dropdown-menu dropdown-menu-right'>
                <a className='dropdown-item' href='#'>
                  <i className='ti-user text-muted mr-2'></i> Profile
                </a>
                {/* <a className='dropdown-item' href='#'>
                    <i className='ti-wallet text-muted mr-2'></i> My Wallet
                  </a>
                  <a className='dropdown-item' href='#'>
                    <i className='ti-settings text-muted mr-2'></i> Settings
                  </a>
                  <a className='dropdown-item' href='#'>
                    <i className='ti-lock text-muted mr-2'></i> Lock screen
                  </a> */}
                <div className='dropdown-divider mb-0'></div>
                <Link
                  className='dropdown-item'
                  to='/'
                  // onClick={e => this.logout(e)}
                >
                  <i className='ti-power-off text-muted mr-2'></i> Logout
                </Link>
              </div>
            </li>
          </ul>

          <ul className='list-unstyled topbar-nav mb-0'>
            <li>
              <button className='d-flex nav-link button-menu-mobile waves-effect waves-light'>
                <i className='ti-menu nav-icon zift'></i>
              </button>
            </li>
            <li className='hide-phone app-search'>
              <form role='search' className=''>
                <input
                  type='text'
                  id='AllCompo'
                  placeholder='Search...'
                  className='form-control'
                />
                <a href='#'>
                  <i className='fas fa-search'></i>
                </a>
              </form>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default TopBar;
