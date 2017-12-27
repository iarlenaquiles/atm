import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const imgEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaContato extends Component {
  render() {
    return (
	<View>
        <StatusBar backgroundColor='#EC7148' />
        <BarraNavegacao voltar navigator={this.props.navigator} />  

        <View style={styles.cabecalho}>
          <Image source={imgEmpresa} />
          <Text style={styles.txtTitulo}>A Empresa</Text>
        </View>       

        <View style={styles.detalheEmpresa}>
         <Text style={styles.txtDetalheEmpresa}>Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom Lorem ipsom</Text>
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
    color: '#EC7148',
    marginLeft: 10,
    marginTop: 25
  },
  detalheEmpresa: {
    padding: 20,
    marginTop: 20
  },
  txtDetalheEmpresa: {
    fontSize: 18
  }
});
