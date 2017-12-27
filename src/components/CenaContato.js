import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

export default class CenaContato extends Component {
  render() {
    return (
	<View>
        <StatusBar backgroundColor='#B9C941' />
        <BarraNavegacao voltar navigator={this.props.navigator} /> 

        
        
     </View>
    );
  }
}
