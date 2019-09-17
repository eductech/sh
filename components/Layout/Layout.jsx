import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import HeadBase from '../HeadBase';
import Nav from '../nav';

const Layout = (props) => (
  <>
    <HeadBase title={props.title} />
    <CssBaseline />

    <Nav />
    { props.children }
  </>
);

export default Layout;
