import { Route,Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import JobAll from './components/Job/JobAll/JobAll'
import JobDetails from './components/Job/JobDetails/JobDetails'


function App() {
  return (
    <div className="App">

      <Header />
      <Switch>

        <Route path="/home" component={Home} />
        <Route path="/jobs/all" component={JobAll} />
        <Route path="/jobs/details/:jobId" component={JobDetails} />

      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
