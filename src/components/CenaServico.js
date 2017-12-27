import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const imgServico = require('../imgs/detalhe_servico.png');

export default class CenaServico extends Component {
  render() {
    return (
	<View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <StatusBar backgroundColor='#19D1C8' />
        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#19D1C8' />  

        <View style={styles.cabecalho}>
          <Image source={imgServico} />
          <Text style={styles.txtTitulo}>Nossos Serviços</Text>
        </View>       

        <View style={styles.detalheServicos}>
         <Text style={styles.txtDetalheServicos}>Consultoria</Text>
         <Text style={styles.txtDetalheServicos}>Processos</Text>
         <Text style={styles.txtDetalheServicos}>Acompanhamento de projetos</Text>
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
    color: '#19D1C8',
    marginLeft: 10,
    marginTop: 25
  },
  detalheServicos: {
    padding: 20,
    marginTop: 20
  },
  txtDetalheServicos: {
    fontSize: 18
  }
});
