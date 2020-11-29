import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import RedirectPage from '../../pages/redirect-page';
import LearningPage from '../../pages/learning-page';

const App = () => {

  return (
  	<div>
	  	<Header />
  	  	<Switch>
		    <Route path="/learning" component={LearningPage} />
	        <Route path="/" component={RedirectPage} />
	  	</Switch>
	</div>
  );
};

export default App;
