import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      contador: 1
    };

    this.incrementar = this.incrementar.bind(this);
    this.decrementar = this.decrementar.bind(this);
  }
  
  incrementar(){
    this.setState({
      contador: this.state.contador + 1
    });
  }

  decrementar(){
    if (this.state.contador > 0){
      this.setState({
        contador: this.state.contador - 1
      });
    }
  }


  render(){
    return(
      <View style={{ marginTop: 20 }}>

        <Text style={{fontSize: 18, alignSelf: 'center', color: 'green'}}>Contador de Pessoas</Text>
        <Text style={{fontSize: 48, alignSelf: 'center'}}>{this.state.contador}</Text>
        
        <Button color="green" title="+" onPress={this.incrementar} />
        <Button color="red" title="-" onPress={this.decrementar} />

       
      </View>
    )
  }
}


export default App;