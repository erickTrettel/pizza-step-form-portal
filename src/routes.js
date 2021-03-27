import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './layout/Header';
import PizzaFormContainer from './pages/PizzaFormContainer';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />

      <Container>
        <Switch>
          <Route exact path='/' component={PizzaFormContainer} />

          <Redirect to='/' />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
