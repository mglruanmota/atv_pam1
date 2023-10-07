import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { StyleSheet, Text, SafeAreaView, Image, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';



export default function CreateCategory() {
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>
        <View>
          <Image style={styles.imagem} source={require('../assets/Images/FotoCadastro.png')} />
        </View>

        <View style={styles.containerInput}>
          <MaterialIcons name='database-plus' size={25} style={styles.icons}></MaterialIcons>
          <TextInput style={styles.input} placeholder='Nome da categoria' placeholderTextColor={'white'} maxLength={255}></TextInput>
        </View>

        <View style={styles.containerInput}>
          <MaterialIcons name='database-plus-outline' size={25} style={styles.icons}></MaterialIcons>
          <TextInput style={styles.input} placeholder='Observações da categoria' placeholderTextColor={'white'} maxLength={255} multiline={true} number></TextInput>
        </View>

        <View style={styles.containerBtn}>
          <TouchableOpacity style={styles.btnEnter}>
            <Text style={styles.txtEnter}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B4652',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "5em"
  },
  imagem: {
    width: 350,
    height: 300
  },
  containerInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 15,
    borderBottomLeftRadius: 25,
    borderColor: 'white',
    padding: 8,
    paddingLeft: 14,
    marginBottom: 15
  },
  input: {
    padding: 10,
    width: '80%',
    color: 'white'
  },
  icons: {
    color: '#28FFC6'
  },
  btnEnter: {
    backgroundColor: '#28FFC6',
    padding: 20,
    borderRadius: 15,
    borderBottomLeftRadius: 25,
    width: "100%"
  },
  txtEnter:{
    textAlign: 'center',
    color: '#333',
    fontWeight: '700',
    fontSize: 15,
  },
  containerBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200
  }
});