import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
// const NoMatch = () => <h2>Pagina no Encontrada!!</h2>
const NoMatch = ({ location }) => (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );

  const BasicExample = () => (
    <div>
        <Router>
            <Switch>
                <div>                
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    {/* <Route path="*" component={NoMatch} /> */}
                    <Route component={NoMatch} />
                </div>
            </Switch>
        </Router>
   </div>
  );



export default BasicExample;