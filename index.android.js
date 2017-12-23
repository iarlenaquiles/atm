import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  View
} from 'react-native';

import BarraNavegacao from './src/components/BarraNavegacao';

export default class atm extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor='#CCC' />
        <BarraNavegacao /> 
      </View>
    );
  }
}

AppRegistry.registerComponent('atm', () => atm);
