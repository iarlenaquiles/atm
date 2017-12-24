import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';

export default class atm extends Component {
  render() {
    return (
      <Navigator 
       initialRoute={}
       renderScene={(route, navigator) => {

       }}
      />
    );
  }
}

AppRegistry.registerComponent('atm', () => atm);
