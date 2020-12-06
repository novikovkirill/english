import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import RedirectPage from '../../pages/redirect-page';
import LearningPage from '../../pages/learning-page';
import Tabs from '../tabs';

const App = () => {

  const tabs = [ { title: 'Learning', to: '/learning' }, { title: 'Journal', to: '/timer' } ];

  return (
  	<div>
	  	<Header />
	  	<Tabs tabs={ tabs } />
  	  	<Switch>
		    <Route path="/learning" component={ LearningPage } />
	        <Route path="/" component={ RedirectPage } />
	  	</Switch>
	</div>
  );
};

export default App;
