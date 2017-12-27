import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const imgContato = require('../imgs/detalhe_contato.png');

export default class CenaContato extends Component {
  render() {
    return (
	<View>
        <StatusBar backgroundColor='#61BD8C' />
        <BarraNavegacao voltar navigator={this.props.navigator} />  

        <View style={styles.cabecalho}>
          <Image source={imgContato} />
          <Text style={styles.txtTitulo}>Contatos</Text>
        </View>       
     </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20
  },
  txtTitulo: {
    fontSize: 30,
    color: '#61BD8C',
    marginLeft: 10,
    marginTop: 25
  },
  detalheCliente: {
    padding: 20,
    marginTop: 10
  },
  txtDetalheCliente: {
    fontSize: 18,
    marginLeft: 20
  }
});
