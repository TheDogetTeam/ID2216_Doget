import React from 'react';
import BottomBar from './src/components/BottomBar';

//Pages
import OCR_Page from './src/components/OCR_Page';
import DogPage from './src/components/DogPage';
import Main from './src/components/Main';
import NewItem from './src/components/NewItem';
import Statistics from './src/components/Statistics';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// export { StorybookUIRoot as default };
//xport {DogPage as default};

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//

const Stack = createNativeStackNavigator();

 export default function App (){
     return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="OCR_Page" component={OCR_Page} />
            <Stack.Screen name="DogPage" component={DogPage} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="NewItem" component={NewItem} />
            <Stack.Screen name="Statistics" component={Statistics} />
            <Stack.Screen name="BottomBar" component={BottomBar} />

        </Stack.Navigator>
      </NavigationContainer>

//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
     );
 }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });