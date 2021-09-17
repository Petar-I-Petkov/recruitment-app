import { Route,Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import JobAll from './components/Job/JobAll/JobAll'
import JobAdd from './components/Job/JobAdd/JobAdd'
import JobDetails from './components/Job/JobDetails/JobDetails'
import InterviewsAll from './components/Interview/InterviewsAll/InterviewsAll'


function App() {
  return (
    <div className="App">

      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/jobs/all" component={JobAll} />
        <Route path="/jobs/add" component={JobAdd} />
        <Route path="/jobs/details/:jobId" component={JobDetails} />
        <Route path="/interviews/all" component={InterviewsAll} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
