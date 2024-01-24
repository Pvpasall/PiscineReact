import { Button, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/home.screen';
import Signup from './screen/signup.screen';
import Signin from './screen/signin.screen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: 'Dashbord' }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
            />
            <Stack.Screen
              name="Signin"
              component={Signin}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});