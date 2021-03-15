import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const MainLayout = ({chilldren}) => (
  <div>
    <AppBar>
      <Toolbar>
        <PageNav />
      </Toolbar>
    </AppBar>
    {chilldren}
  </div>

);

MainLayout.propTypes = {
  chilldren: PropTypes.node,
};

export default MainLayout;
