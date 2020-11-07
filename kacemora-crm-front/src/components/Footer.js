import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <>
        <footer className='footer text-center text-sm-left'>
          &copy; 2020 Crovex{' '}
          <span className='text-muted d-none d-sm-inline-block float-right'>
            Crafted with <i className='mdi mdi-heart text-danger'></i> by
            Mannatthemes
          </span>
        </footer>
      </>
    );
  }
}

export default Footer;
