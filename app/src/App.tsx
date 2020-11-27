import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import Houses from './pages/Houses';
import Maps from './pages/Maps';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Houses} />
          <Route exact path="/maps" component={Maps} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
};

export default App;
