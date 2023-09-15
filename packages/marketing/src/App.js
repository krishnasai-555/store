import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider , createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

//to get reid of css scoping below is the step
const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',   //when ever we run production it will generate class names by using ma instead of jss
});

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
