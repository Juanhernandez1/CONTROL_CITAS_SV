import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Route from './components/Route';
import { paths } from './config/paths';
import { GlobalProvider } from './context/GlobalState';
import { Layout, LayoutHeader } from './Layout';
import Business from './pages/Business';
import BusinessDetail from './pages/BusinessDetail';
import Landing from './pages/Landing';
import AppointmentBook from './pages/AppointmentBook';
import NotFound from './pages/NotFound';
import LoginCitas from './pages/Login/Login';
import AppointmentDetail from './pages/AppointmentDetail';
import BusinessServicess from './pages/BusinessServicess/BusinessServicess';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path={paths.home} component={Landing} layout={LayoutHeader} />
          <Route exact path={paths.login} component={LoginCitas} layout={LayoutHeader} />
          <Route exact path={paths.businessResult} component={Business} layout={LayoutHeader} />
          <Route
            exact
            path={paths.businessDetail(':id')}
            component={BusinessDetail}
            layout={Layout}
          />
          <Route
            exact
            path={paths.businessServices(':id')}
            component={BusinessServicess}
            layout={Layout}
          />
          <Route
            exact
            path={paths.appointmentBook(':id')}
            component={AppointmentBook}
            layout={Layout}
          />
          <Route
            exact
            path={paths.appointmentDetail(':id')}
            component={AppointmentDetail}
            layout={Layout}
          />
          <Route path={paths.notFound} component={NotFound} layout={LayoutHeader} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
