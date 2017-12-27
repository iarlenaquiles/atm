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
	<View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <StatusBar backgroundColor='#61BD8C' />
        <BarraNavegacao voltar navigator={this.props.navigator} />  

        <View style={styles.cabecalho}>
          <Image source={imgContato} />
          <Text style={styles.txtTitulo}>Contatos</Text>
        </View>       

        <View style={styles.detalheContatos}>
         <Text style={styles.txtDetalheContato}>TEL: (85) 9 9876-9848</Text>
         <Text style={styles.txtDetalheContato}>CEL: (85) 9 9876-9848</Text>
         <Text style={styles.txtDetalheContato}>E-MAIL: iarlensilva@gmail.com</Text>
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
  detalheContatos: {
    padding: 20,
    marginTop: 20
  },
  txtDetalheContato: {
    fontSize: 18
  }
});
