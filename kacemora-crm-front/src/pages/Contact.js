import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Contact extends Component {
  render() {
    return (
      <>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='page-title-box'>
              <div className='float-right'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <Link to=''>Crovex</Link>
                  </li>
                  <li className='breadcrumb-item'>
                    <Link to=''>Profile</Link>
                  </li>
                  <li className='breadcrumb-item active'>Contact</li>
                </ol>
              </div>
              <h4 className='page-title'>Contact</h4>
            </div>
          </div>
        </div>

        <div class='row'>
          <div class='col-lg-8 mx-auto my-5'>
            <div class='card'>
              <div class='card-body'>
                <form class=''>
                  <div class='col-md-12'>
                    <div class='form-group'>
                      <label htmlFor='username'>Name</label>
                      <input
                        type='text'
                        class='form-control'
                        id='username'
                        required=''
                      />
                    </div>
                  </div>
                  <div class='col-md-12'>
                    <div class='form-group'>
                      <label htmlFor='useremail'>Email address</label>
                      <input
                        type='email'
                        class='form-control'
                        id='useremail'
                        required=''
                      />
                    </div>
                  </div>
                  <div class='col-md-12'>
                    <div class='form-group'>
                      <label htmlFor='subject'>Subject</label>
                      <input
                        type='text'
                        class='form-control'
                        id='subject'
                        required=''
                      />
                    </div>
                  </div>
                    <div class='col-md-12'>
                      <div class='form-group'>
                        <label htmlFor='message'>Message</label>
                        <textarea
                          class='form-control'
                          rows='5'
                          id='message'
                          style={{'height': '500px'}}
                        ></textarea>
                      </div>
                    </div>
                    <div class='col-sm-12 text-right'>
                      <button
                        type='submit'
                        class='btn btn-gradient-primary px-5 py-2'
                      >
                        Send Message
                      </button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
