import {Text, View } from 'react-native';
import {styles} from './styles';

export default function Formacao() {

 return (
  
  <View>

    <Text style={{color: '#FFFFFF', marginTop: 15, fontSize: 23, textAlign: 'center'}}>
          Formação
    </Text>
    
    <Text style={styles.textoPrincipal}>
      FATEC PRAIA GRANDE - 
    </Text>
    <Text style={styles.alinhaTexto}>
      Análise e Desenvolvimento de Sistemas - Cursando (12/2023)
    </Text>

    <Text style={styles.textoPrincipal}>
      ETEC DRA. RUTH CARDOSO -
    </Text>
    <Text style={styles.alinhaTexto}>
      Técnico em Informática - Completo (12/2017)
    </Text>
  </View>
  );
}