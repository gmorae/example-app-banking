import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeSlice from './src/home-slice/screens/home-slice.screen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeSlice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;