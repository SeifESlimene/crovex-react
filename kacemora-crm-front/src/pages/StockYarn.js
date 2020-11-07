/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import EditableTable from '../components/EditableTable';

export default class StockYarn extends Component {
  constructor(props) {
    super(props);
    // this.state = { data: [] };
  }
  // componentDidMount() {
  //   fetch('http://localhost/crovex/Crovex/HTML/dashboard/data.php')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ data: data });
  //     });
  // }
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
                    <a href=''>Storage</a>
                  </li>
                  <li className='breadcrumb-item active'>Stock Yarn</li>
                </ol>
              </div>
              <h4 className='page-title'>Yarn List</h4>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <div className='card'>
              <EditableTable />
            </div>
          </div>
        </div>
      </>
    );
  }
}
