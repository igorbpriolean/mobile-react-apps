import {Text, View, Image } from 'react-native';
import {styles} from './styles';

export default function MeusDados() {

 return (
  
  <View>

   <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/69820242'}}
          style={styles.imagem}
    />  


    <Text style={{color: '#FFFFFF', marginTop: 15, fontSize: 23, textAlign: 'center'}}>
      Dados Pessoais
    </Text>
    <Text style={styles.textoPrincipal}>
      Nome: 
    </Text>
    <Text style={styles.alinhaTexto}>
      Igor Batista
    </Text>

    <Text style={styles.textoPrincipal}>
      Data de Nascimento: 
    </Text>
    <Text style={styles.alinhaTexto}>
      02/08/1996
    </Text>

    <Text style={styles.textoPrincipal}>
      Cel.: 
    </Text>
    <Text style={styles.alinhaTexto}>
      (13) 98213-0345
    </Text>
  </View>
  );
}