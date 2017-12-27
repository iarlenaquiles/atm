import React, { Component } from 'react';
import {
  StatusBar,
  View
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const imgContato = require('../imgs/detalhe_contato.png');

export default class CenaContato extends Component {
  render() {
    return (
	<View>
        <StatusBar backgroundColor='#61BD8C' />
        <BarraNavegacao voltar navigator={this.props.navigator} />         
     </View>
    );
  }
}
