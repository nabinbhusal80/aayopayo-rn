import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import RootRouter from './src/routers';
import { APP_COLOR } from './src/config';

export default class App extends React.Component {

  state= {}

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor={APP_COLOR} barStyle="light-content" />
          <RootRouter />
        </View>
      </Provider>
    );
  }
}
