import React from 'react';
import { Route as ReactRoute } from 'react-router-dom';

const Route = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <ReactRoute
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default Route;
