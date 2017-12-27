import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContato from './src/components/CenaContato';

export default class atm extends Component {
  render() {
    return (
      <Navigator 
       initialRoute={{ id: 'a' }}
       renderScene={(route, navigator) => {
          if (route.id === 'a') {
            return (<CenaPrincipal navigator={navigator} />);
          }

          if (route.id === 'b') {
            return (<CenaClientes navigator={navigator} />);
          }

          if (route.id === 'c') {
            return (<CenaContato navigator={navigator} />);
          }
       }}
      />
    );
  }
}

AppRegistry.registerComponent('atm', () => atm);
