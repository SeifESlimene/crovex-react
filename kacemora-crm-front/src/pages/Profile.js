/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    return (
      <>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='page-title-box'>
              <div className='float-right'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <a href=''>Crovex</a>
                  </li>
                  <li className='breadcrumb-item'>
                    <a href=''>Profile</a>
                  </li>
                  <li className='breadcrumb-item active'>Profile</li>
                </ol>
              </div>
              <h4 className='page-title'>Profile Management</h4>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <div className='card'>
              <div className='card-body'>
                <ul
                  className='nav nav-pills mb-0'
                  id='pills-tab'
                  role='tablist'
                >
                  <li className='nav-item'>
                    <a
                      className='nav-link active'
                      id='general_detail_tab'
                      data-toggle='pill'
                      href='#general_detail'
                    >
                      General
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='nav-link'
                      id='activity_detail_tab'
                      data-toggle='pill'
                      href='#activity_detail'
                    >
                      Edit Site
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='nav-link'
                      id='portfolio_detail_tab'
                      data-toggle='pill'
                      href='#portfolio_detail'
                    >
                      Manage Users
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='nav-link'
                      id='settings_detail_tab'
                      data-toggle='pill'
                      href='#settings_detail'
                    >
                      Access
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <div className='tab-content detail-list' id='pills-tabContent'>
              <div className='tab-pane fade show active' id='general_detail'>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='card'>
                      <div className='card-body'>Here We Edit Everything!</div>
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
