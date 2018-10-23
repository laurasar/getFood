import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './components/App';
import Search from './components/Search';
//import * as serviceWorker from './css/serviceWorker';

class Root extends Component {
  render(){
    return(
      <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={App}/>
          <Route path="/search" component={Search}/>
        </div>
      </BrowserRouter>

    </div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
//// Learn more about service workers: http://bit.ly/CRA-PWA
///serviceWorker.unregister();
