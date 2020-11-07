/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import MetisMenu from '@metismenu/react';
import 'metismenujs/dist/metismenujs.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import Analytics from './Analytics';
import Contact from './Contact';
import Machines from './Machines';
import Profile from './Profile';
import StockFabric from './StockFabric';
import StockYarn from './StockYarn';
import Orders from './Orders';
import Inbox from './Inbox';
import Customers from './Customers';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: this.props.isLogin };
  }

  render() {
    return (
      <div className='dash-ses'>
        <TopBar isLogin={this.state.isLogin} />

        <div className='left-sidenav'>
          <ul className='metismenu left-sidenav-menu'>
            <MetisMenu>
              <li>
                <a href=''>
                  <i className='ti-bar-chart'></i>
                  <span>Dashboard</span>
                  <span className='menu-arrow'>
                    <i className='mdi mdi-chevron-right'></i>
                  </span>
                </a>
                <ul className='nav-second-level' aria-expanded='false'>
                  <li className='nav-item'>
                    <Link className='nav-link' to='./analytics'>
                      <i className='ti-control-record'></i>Analytics
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <a href=''>
                  <i className='mdi mdi-account'></i>
                  <span>Profile</span>
                  <span className='menu-arrow'>
                    <i className='mdi mdi-chevron-right'></i>
                  </span>
                </a>
                <ul className='nav-second-level' aria-expanded='false'>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/profile'>
                      <i className='ti-control-record'></i>Profile
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/inbox'>
                      <i className='ti-control-record'></i>Inbox
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/contact'>
                      <i className='ti-control-record'></i>Contact
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/customers'>
                      <i className='ti-control-record'></i>Customers
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href=''>
                  <i className='mdi mdi-view-grid'></i>
                  <span>Storage</span>
                  <span className='menu-arrow'>
                    <i className='mdi mdi-chevron-right'></i>
                  </span>
                </a>
                <ul className='nav-second-level' aria-expanded='false'>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/stockyarn'>
                      <i className='ti-control-record'></i>Stock Yarn
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/stockfabric'>
                      <i className='ti-control-record'></i>Stock Fabric
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/orders'>
                      <i className='ti-control-record'></i>Orders
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <a href=''>
                  <i className='mdi mdi-factory'></i>
                  <span>Machines</span>
                  <span className='menu-arrow'>
                    <i className='mdi mdi-chevron-right'></i>
                  </span>
                </a>
                <ul className='nav-second-level' aria-expanded='false'>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/machines'>
                      <i className='ti-control-record'></i>Machines
                    </Link>
                  </li>
                </ul>
              </li>
            </MetisMenu>
          </ul>
        </div>

        <div className='page-wrapper'>
          <div className='page-content'>
            <div className='container-fluid'>
              {this.state.isLogin ? (
              
                <Switch>
                  <Route path='/stockyarn' exact component={StockYarn} />
                  <Route path='/customers' exact component={Customers} />
                  <Route path='/stockfabric' exact component={StockFabric} />
                  <Route path='/orders' exact component={Orders} />
                  <Route path='/machines' exact component={Machines} />
                  <Route path='/inbox' exact component={Inbox} />
                  <Route path='/analytics' exact component={Analytics} />
                  <Route path='/profile' exact component={Profile} />
                  <Route path='/contact' exact component={Contact} />
                </Switch>
              )
            
              : (<Redirect to='/login' />)}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
