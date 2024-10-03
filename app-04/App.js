import { useState } from 'react'
import { View, Text, Button, TextInput, Image } from 'react-native'
import {styles} from './styles'




export default function App(){
  const [alcool, setAlcool] = useState()
  const [gasolina, setGasolina] = useState()
  const [resultado, setResultado] = useState('')

  
  function calcular(){
    if ( (alcool === '') || (gasolina === '')){
      setResultado('Digite dois valores.')
      return;
    }
    result = alcool / gasolina;
    
    if (result < 0.7){
      setResultado('Alcool é melhor para abastecer.')
    } else {
      setResultado('Gasolina é melhor para abastecer.')
    }    
  }


  return(
    <View>
      <Text style={styles.titulo}>Álcool ou Gasolina</Text>

    <Image
        source={{uri: 'https://pplware.sapo.pt/wp-content/uploads/2016/08/combustivel.jpg'}}
        style={{width: 250, height: 250, marginTop: 10, alignSelf: 'center'}}
      />  


      <TextInput
      style={styles.input}
      placeholder="Preço do Álcool (R$)"
      onChangeText={setAlcool}
      />


      <TextInput
      style={styles.input}
      placeholder="Preço da Gasolina (R$)"
      onChangeText={setGasolina}
      />

      <Button title='Calcular' color='orange' onPress={calcular}/>
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  )
}


