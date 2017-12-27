import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

const imgVoltar = require('../imgs/btn_voltar.png');

export default class BarraNavegacao extends Component {
  render() {
    if (this.props.voltar) {
     return (
      <View style={[styles.BarraTitulo, { backgroundColor: this.props.corDeFundo }]}>
       <TouchableHighlight onPress={() => { this.props.navigator.pop(); }} >
        <Image source={imgVoltar} />
       </TouchableHighlight>
       <Text style={styles.titulo}>ATM Consultoria</Text>
      </View>
     );
    }

    return (
	<View style={styles.BarraTitulo}>
      <Text style={styles.titulo}>ATM Consultoria</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
	BarraTitulo: {
		backgroundColor: '#CCC',
		padding: 10,
		height: 60,
		flexDirection: 'row'
	},
	titulo: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		color: '#000' 
	}
});
