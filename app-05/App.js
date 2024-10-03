import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      peso: 0,
      altura: 0,
      resultado: ''
    };
    
    this.pegaPeso = this.pegaPeso.bind(this);
    this.pegaAltura = this.pegaAltura.bind(this);
    this.calcular = this.calcular.bind(this);
  }
 
  calcular(){
    res = this.state.peso / (this.state.altura * this.state.altura)
    if (res < 18.5)
      texto = 'Abaixo do peso'
    else if (res < 24.9)
      texto = 'Peso normal'
    else if (res < 29.9)
      texto = 'Sobrepeso'
    else if (res < 34.9)
      texto = 'Obesidade Grau I'
    else if (res < 39.9)
      texto = 'Obesidade Grau II'
    else
      texto = 'Obesidade Grau III ou Mórbida'
    this.setState({
      resultado: texto
    });
  }

  pegaPeso(p){
    this.setState({peso: p});
  }

  pegaAltura(a){
    this.setState({altura: a});
  }
 
  render(){
    return(
      <View style={styles.container}>

      <Text style={styles.titulo}>Cálculo do IMC</Text>
 
      <Image
        source={{uri: 'https://inuba.com/wp-content/uploads/2022/03/como-calcular-indice-masa-corporal.webp'}}
        style={styles.imagem}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o peso em Kg..."
        onChangeText={this.pegaPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite a altura (ex.: 1.70)..."
        onChangeText={this.pegaAltura}
      />

      <Button title="Calcular" onPress={this.calcular} />
 
      <Text style={styles.resultado}> {this.state.resultado} 
      </Text>

      <Image
        source={{uri: 'https://cirurgiabrasilia.com/wp-content/uploads/2020/07/tabela_imc.png'}}
        style={styles.imagem2}
      />
      </View>
    );
  }
}
export default App;