import React from 'react';
import { Route } from 'react-router-dom';
import { DashboardLayout } from 'layouts';


const LayoutRoute = props => {
  const {  component: Component, ...rest } = props;

    return (
      <Route exact {...rest} render={matchProps => (
        <DashboardLayout>
          <Component {...matchProps} />
        </DashboardLayout>
      )}
      />
    );
};


export default LayoutRoute;
