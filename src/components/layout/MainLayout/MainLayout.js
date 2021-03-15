import React from 'react';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';

const MainLayout = ({chilldren}) => (
  <div>
    <PageNav />
  </div>

);

MainLayout.propTypes = {
  chilldren: PropTypes.node,
};

export default MainLayout;
