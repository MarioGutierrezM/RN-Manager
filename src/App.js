import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/loginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCeEE4-0JJn5CQaV3KlAKeb8f60XKuZzlU',
      authDomain: 'manager-359c7.firebaseapp.com',
      databaseURL: 'https://manager-359c7.firebaseio.com',
      projectId: 'manager-359c7',
      storageBucket: 'manager-359c7.appspot.com',
      messagingSenderId: '323949238138'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App; //17,126
