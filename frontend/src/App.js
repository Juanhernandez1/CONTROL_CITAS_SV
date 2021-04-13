import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Layout from './Layout';
import { paths } from './config/paths';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={paths.home} component={Landing} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
