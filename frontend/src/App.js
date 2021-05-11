import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Route from './components/Route';
import { paths } from './config/paths';
import { GlobalProvider } from './context/GlobalState';
import { Layout, LayoutHeader } from './Layout';
import Business from './pages/Business';
import BusinessDetail from './pages/BusinessDetail';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path={paths.home} component={Landing} layout={LayoutHeader} />
          <Route exact path={paths.businessResult} component={Business} layout={LayoutHeader} />
          <Route
            exact
            path={paths.businessDetail(':id')}
            component={BusinessDetail}
            layout={Layout}
          />
          <Route path={paths.notFound} component={NotFound} layout={LayoutHeader} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
