import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContato from './src/components/CenaContato';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServico from './src/components/CenaServico';

export default class atm extends Component {
  render() {
    return (
      <Navigator 
       initialRoute={{ id: 'principal' }}
       renderScene={(route, navigator) => {
          switch (route.id) {
            case 'principal': return (<CenaPrincipal navigator={navigator} />);
            case 'clientes': return (<CenaClientes navigator={navigator} />);
            case 'contatos': return (<CenaContato navigator={navigator} />);
            case 'empresa': return (<CenaEmpresa navigator={navigator} />);
            case 'servico': return (<CenaServico navigator={navigator} />);
            default: return false;
          }
       }}
      />
    );
  }
}

AppRegistry.registerComponent('atm', () => atm);
