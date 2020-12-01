import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
};

export default App;
