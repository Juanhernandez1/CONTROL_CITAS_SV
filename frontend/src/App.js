import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Business from './pages/Business';
import Layout from './Layout';
import { paths } from './config/paths';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={paths.home} component={Landing} />
          <Route exact path={paths.businessResult} component={Business} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
