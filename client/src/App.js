import React, { Component } from 'react';
import { Container } from 'reactstrap';
import AppNav from './components/AppNav';
import TaskList from './components/TaskList';
import TaskModal from './components/TaskModal';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNav />
          <Container>
            <TaskModal />
            <TaskList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
