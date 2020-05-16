/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import AuthLayout from '../pages/_layouts/auth';
import ClientLayout from '../pages/_layouts/client';
import AdmLayout from '../pages/_layouts/adm';
import { store } from '../store';

export default function RouteWrapper({
  // eslint-disable-next-line react/prop-types
  component: Component,
  // eslint-disable-next-line react/prop-types
  isPrivate,
  ...rest
}) {
  const { signed, admin } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/main" />;
  }
  let Layout = signed ? ClientLayout : AuthLayout;
  if (admin) {
    Layout = AdmLayout;
  }

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
// eslint-disable-next-line react/no-typos
RouteWrapper.PropTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
RouteWrapper.defaultProps = {
  isPrivate: false,
};
