//import logo from './logo.svg';
//import './App.css';
import { 
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import IndexView from './views/IndexView';
import CreateView from './views/CreateView';
import DetailView from './views/DetailView';
import EditView from './views/EditView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <IndexView />
          </Route>
          <Route path="/create">
            <CreateView />
          </Route>
          <Route exact path="/:id">
            <DetailView />
          </Route>
          <Route path="/:id/edit">
            <EditView />
          </Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
