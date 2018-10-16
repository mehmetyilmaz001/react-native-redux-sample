import React, {Component} from 'react';
import { View} from 'react-native';
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import reducers from './src/reducers'
import { Header } from './src/components/common'
import LibraryList from './src/components/LibraryList'


export default class App extends Component{
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}


