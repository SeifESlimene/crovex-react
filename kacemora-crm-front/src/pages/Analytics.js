/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Bar from '../components/charts/Bar';
import Map from '../components/charts/Map';
import Audience from '../components/charts/Audience';
import Session from '../components/charts/Session';

class Analytics extends Component {
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
                    <a href=''>Dashboard</a>
                  </li>
                  <li className='breadcrumb-item active'>Analytics</li>
                </ol>
              </div>
              <h4 className='page-title'>Analytics</h4>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='card'>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-lg-8'>
                    <h4 className='header-title mt-0 mb-3'>
                      Sessions By Channel
                    </h4>
                    <Bar />
                  </div>
                  <div className='col-lg-4'>
                    <h4 className='header-title mt-0 mb-3'>Traffic Sources</h4>
                    <div className='traffic-card'>
                      <h3 className='text-dark font-weight-semibold'>80</h3>
                      <h5>Right Now</h5>
                    </div>

                    <ul className='list-unstyled url-list mb-0'>
                      <li>
                        <i className='mdi mdi-circle-medium text-success'></i>{' '}
                        <span>Email</span>
                      </li>
                      <li>
                        <i className='mdi mdi-circle-medium text-pink'></i>{' '}
                        <span>Referral</span>
                      </li>
                      <li>
                        <i className='mdi mdi-circle-medium text-purple'></i>{' '}
                        <span>Organic</span>
                      </li>
                      <li>
                        <i className='mdi mdi-circle-medium text-warning'></i>{' '}
                        <span>Direct</span>
                      </li>
                      <li>
                        <i className='mdi mdi-circle-medium text-secondary'></i>{' '}
                        <span>Campaign</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='card'>
              <div className='card-body'>
                <h4 className='header-title mt-0 mb-3'>
                  Organic Traffic in USA
                </h4>

                <div className='row'>
                  <div className='col-lg-7'>
                    <Map />
                  </div>
                  <div className='col-lg-5 align-self-center'>
                    <div className=''>
                      <span className='text-dark'>Texas</span>
                      <small className='float-right text-muted ml-3 font-13'>
                        81%
                      </small>
                      <div className='progress mt-2' style={{ height: '3px' }}>
                        <div
                          className='progress-bar bg-pink'
                          role='progressbar'
                          style={{ width: '81%', borderRadius: '5px' }}
                          aria-valuenow='81'
                          aria-valuemin='0'
                          aria-valuemax='100'
                        ></div>
                      </div>
                    </div>

                    <div className='mt-3'>
                      <span className='text-dark'>Washington</span>
                      <small className='float-right text-muted ml-3 font-13'>
                        68%
                      </small>
                      <div className='progress mt-2' style={{ height: '3px' }}>
                        <div
                          className='progress-bar bg-secondary'
                          role='progressbar'
                          style={{ width: '68%', borderRadius: '5px' }}
                          aria-valuenow='68'
                          aria-valuemin='0'
                          aria-valuemax='100'
                        ></div>
                      </div>
                    </div>
                    <div className='mt-3'>
                      <span className='text-dark'>Wyoming</span>
                      <small className='float-right text-muted ml-3 font-13'>
                        48%
                      </small>
                      <div className='progress mt-2' style={{ height: '3px' }}>
                        <div
                          className='progress-bar bg-purple'
                          role='progressbar'
                          style={{ width: '48%', borderRadius: '5px' }}
                          aria-valuenow='48'
                          aria-valuemin='0'
                          aria-valuemax='100'
                        ></div>
                      </div>
                    </div>

                    <div className='mt-3'>
                      <span className='text-dark'>Virginia</span>
                      <small className='float-right text-muted ml-3 font-13'>
                        32%
                      </small>
                      <div className='progress mt-2' style={{ height: '3px' }}>
                        <div
                          className='progress-bar bg-warning'
                          role='progressbar'
                          style={{ width: '32%', borderRadius: '5px' }}
                          aria-valuenow='32'
                          aria-valuemin='0'
                          aria-valuemax='100'
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-lg-3'>
            <div className='card report-card'>
              <div className='card-body'>
                <div className='d-flex justify-content-between'>
                  <div>
                    <p className='text-dark font-weight-semibold font-14'>
                      Sessions
                    </p>
                    <h3 className='my-3'>24k</h3>
                    <p className='mb-0 text-truncate'>
                      <span className='text-success'>
                        <i className='mdi mdi-trending-up'></i>8.5%
                      </span>{' '}
                      New Sessions Today
                    </p>
                  </div>
                  <div className='align-self-center'>
                    <i className='dripicons-user-group report-main-icon bg-soft-purple text-purple'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-3'>
            <div className='card report-card'>
              <div className='card-body'>
                <div className='d-flex justify-content-between'>
                  <div>
                    <p className='text-dark font-weight-semibold font-14'>
                      Avg.Sessions
                    </p>
                    <h3 className='my-3'>00:18</h3>
                    <p className='mb-0 text-truncate'>
                      <span className='text-success'>
                        <i className='mdi mdi-trending-up'></i>1.5%
                      </span>{' '}
                      Weekly Avg.Sessions
                    </p>
                  </div>
                  <div className='align-self-center'>
                    <i className='dripicons-clock report-main-icon bg-soft-danger text-danger'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-3'>
            <div className='card report-card'>
              <div className='card-body'>
                <div className='d-flex justify-content-between'>
                  <div>
                    <p className='text-dark font-weight-semibold font-14'>
                      Bounce Rate
                    </p>
                    <h3 className='my-3'>$2400</h3>
                    <p className='mb-0 text-truncate'>
                      <span className='text-danger'>
                        <i className='mdi mdi-trending-down'></i>35%
                      </span>{' '}
                      Bounce Rate Weekly
                    </p>
                  </div>
                  <div className='align-self-center'>
                    <i className='dripicons-meter report-main-icon bg-soft-secondary text-secondary'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-3'>
            <div className='card report-card'>
              <div className='card-body'>
                <div className='d-flex justify-content-between'>
                  <div>
                    <p className='text-dark font-weight-semibold font-14'>
                      Goal Completions
                    </p>
                    <h3 className='my-3'>85000</h3>
                    <p className='mb-0 text-truncate'>
                      <span className='text-success'>
                        <i className='mdi mdi-trending-up'></i>10.5%
                      </span>{' '}
                      Completions Weekly
                    </p>
                  </div>
                  <div className='align-self-center'>
                    <i className='dripicons-wallet report-main-icon bg-soft-warning text-warning'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='card'>
              <div className='card-body'>
                <h4 className='header-title mt-0'>Audience Overview</h4>
                <div className=''>
                  <Audience />
                </div>
              </div>
              <div className='card-body bg-light chart-report-card'>
                <div className='row d-flex justify-content-between'>
                  <div className='col-lg-4'>
                    <div className='media'>
                      <i className='dripicons-user-group report-main-icon bg-card text-dark mr-2'></i>
                      <div className='media-body align-self-center text-truncate'>
                        <h4 className='mt-0 mb-0 font-weight-semibold text-dark font-24'>
                          140k
                          <span className='text-success  font-12 font-weight-normal'>
                            <i className='mdi mdi-arrow-up mr-1'></i>21%
                          </span>
                        </h4>
                        <p className='text-dark font-weight-semibold mb-0 font-14'>
                          Users
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='media'>
                      <i className='dripicons-rocket report-main-icon bg-card text-dark mr-2'></i>
                      <div className='media-body align-self-center text-truncate'>
                        <h4 className='mt-0 mb-0 font-weight-semibold text-dark font-24'>
                          2154
                          <span className='text-success  font-12 font-weight-normal'>
                            <i className='mdi mdi-arrow-up mr-1'></i>21%
                          </span>
                        </h4>
                        <p className='text-dark font-weight-semibold mb-0 font-14'>
                          Page views
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='media'>
                      <i className='dripicons-preview report-main-icon bg-card text-dark mr-2'></i>
                      <div className='media-body align-self-center text-truncate'>
                        <h4 className='mt-0 mb-0 font-weight-semibold text-dark font-24'>
                          183k
                          <span className='text-success  font-12 font-weight-normal'>
                            <i className='mdi mdi-arrow-up mr-1'></i>21%
                          </span>
                        </h4>
                        <p className='text-dark font-weight-semibold mb-0 font-14'>
                          Impressions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='card'>
              <div className='card-body'>
                <h4 className='header-title mt-0'>Sessions Device</h4>
                <Session />
                <div className='table-responsive mt-4'>
                  <table className='table mb-0'>
                    <thead className='thead-light'>
                      <tr>
                        <th>Device</th>
                        <th>Sassions</th>
                        <th>Day</th>
                        <th>Week</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>Dasktops</th>
                        <td>1843</td>
                        <td>-3</td>
                        <td>-12</td>
                      </tr>
                      <tr>
                        <th scope='row'>Tablets</th>
                        <td>2543</td>
                        <td>-5</td>
                        <td>-2</td>
                      </tr>
                      <tr>
                        <th scope='row'>Mobiles</th>
                        <td>3654</td>
                        <td>-5</td>
                        <td>-6</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='card'>
              <div className='card-body'>
                <h4 className='header-title mt-0 mb-3'>
                  Browser Used By Users
                </h4>
                <div className='table-responsive browser_users'>
                  <table className='table mb-0'>
                    <thead className='thead-light'>
                      <tr>
                        <th className='border-top-0'>Browser</th>
                        <th className='border-top-0'>Sessions</th>
                        <th className='border-top-0'>Bounce Rate</th>
                        <th className='border-top-0'>Transactions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <i className='fab fa-chrome mr-2 text-danger font-16'></i>
                          Chrome
                        </td>
                        <td>
                          10853<small className='text-muted'>(52%)</small>
                        </td>
                        <td> 52.80%</td>
                        <td>
                          566<small className='text-muted'>(92%)</small>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className='fab fa-safari mr-2 text-info font-16'></i>
                          Safari
                        </td>
                        <td>
                          2545<small className='text-muted'>(47%)</small>
                        </td>
                        <td> 47.54%</td>
                        <td>
                          498<small className='text-muted'>(81%)</small>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className='fab fa-internet-explorer mr-2 text-warning font-16'></i>
                          Internet-Explorer
                        </td>
                        <td>
                          1836<small className='text-muted'>(38%)</small>
                        </td>
                        <td> 41.12%</td>
                        <td>
                          455<small className='text-muted'>(74%)</small>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className='fab fa-opera mr-2 text-danger font-16'></i>
                          Opera
                        </td>
                        <td>
                          1958<small className='text-muted'>(31%)</small>
                        </td>
                        <td> 36.82%</td>
                        <td>
                          361<small className='text-muted'>(61%)</small>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className='fab fa-firefox mr-2 text-blue font-16'></i>
                          Firefox
                        </td>
                        <td>
                          1566<small className='text-muted'>(26%)</small>
                        </td>
                        <td> 29.33%</td>
                        <td>
                          299<small className='text-muted'>(49%)</small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='card'>
              <div className='card-body'>
                <h4 className='header-title mt-0 mb-3'>Traffic Sources</h4>
                <div className='table-responsive browser_users'>
                  <table className='table mb-0'>
                    <thead className='thead-light'>
                      <tr>
                        <th className='border-top-0'>Channel</th>
                        <th className='border-top-0'>Sessions</th>
                        <th className='border-top-0'>Prev.Period</th>
                        <th className='border-top-0'>% Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href='' className='text-primary'>
                            Organic search
                          </a>
                        </td>
                        <td>
                          10853<small className='text-muted'>(52%)</small>
                        </td>
                        <td>
                          566<small className='text-muted'>(92%)</small>
                        </td>
                        <td>
                          {' '}
                          52.80%{' '}
                          <i className='fas fa-caret-up text-success font-16'></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href='' className='text-primary'>
                            Direct
                          </a>
                        </td>
                        <td>
                          2545<small className='text-muted'>(47%)</small>
                        </td>
                        <td>
                          498<small className='text-muted'>(81%)</small>
                        </td>
                        <td>
                          {' '}
                          -17.20%{' '}
                          <i className='fas fa-caret-down text-danger font-16'></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href='' className='text-primary'>
                            Referal
                          </a>
                        </td>
                        <td>
                          1836<small className='text-muted'>(38%)</small>
                        </td>
                        <td>
                          455<small className='text-muted'>(74%)</small>
                        </td>
                        <td>
                          {' '}
                          41.12%{' '}
                          <i className='fas fa-caret-up text-success font-16'></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href='' className='text-primary'>
                            Email
                          </a>
                        </td>
                        <td>
                          1958<small className='text-muted'>(31%)</small>
                        </td>
                        <td>
                          361<small className='text-muted'>(61%)</small>
                        </td>
                        <td>
                          {' '}
                          -8.24%{' '}
                          <i className='fas fa-caret-down text-danger font-16'></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href='' className='text-primary'>
                            Social
                          </a>
                        </td>
                        <td>
                          1566<small className='text-muted'>(26%)</small>
                        </td>
                        <td>
                          299<small className='text-muted'>(49%)</small>
                        </td>
                        <td>
                          {' '}
                          29.33%{' '}
                          <i className='fas fa-caret-up text-success'></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Analytics;
