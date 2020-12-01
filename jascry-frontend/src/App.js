import React, { useState } from 'react';
import classes from './App.module.css';
import Layout from './containers/Layout/Layout'
import MainSite from './containers/MainSite/MainSite'
import {Route, Switch} from 'react-router-dom' 
import SignUp from './containers/SingUp/SignUp'
import ScrollToTop from './containers/ScrollToTop/ScrollToTop';
import RedirectPageAfterRegister from './components/SignUp/RedirectPageAfterRegister/RedirectPageAfterRegister';
import Blog from './containers/Blog/Blog';
import Subject from './components/MainSite/Subjects/Subject/Subject';

function App(props) {
  const [subject, setSubject] = useState('java');

  let clickSubjectHandle = (subject) => {
    setSubject(subject);
  }
  console.log(props)
  return (
    <div className = {classes.App}>
      {/* <MemoryRouter> */}
      <Layout>
        <ScrollToTop>
        <Switch>
            <Route path="/blog" render={(props) => <Blog {...props} subject={subject} ></Blog>} />
            {/* <Route path="/signup" exact component={SignUp} /> */}
            {/* <Route path="/signup/success" render={(props) => <RedirectPageAfterRegister/>} /> */}
        <Route path="/" render= {(props) =><MainSite {...props} subject={subject} clicked={clickSubjectHandle}></MainSite>} />
        </Switch>
        </ScrollToTop>
      </Layout>
      {/* </MemoryRouter> */}
    </div>
  );
}

export default App;
