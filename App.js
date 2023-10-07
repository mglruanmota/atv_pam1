import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";

import CreateCategory from './screens/CreateCategory.js';
import { StatusBar } from "expo-status-bar";


export default function App(){
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator>
      
        <Stack.Screen  

        name="Cadastro"
        component={CreateCategory}
        options={{ 
          headerTitle: (props) => ( // App Logo
          <Image
            style={{ width: 450, height: 380 }}
            source={require('../atv1/assets/canario.jpeg')}
            resizeMode='contain'
          />
        ),
          title: "Cadastrar",
          headerStyle: {
            backgroundColor: '#1966',
          },
          headerTintColor: '#FFFF',

          
    }}

        />

      </Stack.Navigator>

    </NavigationContainer>
  )
}