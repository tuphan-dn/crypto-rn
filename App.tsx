import './polyfill/global'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Solana from './pages/solana'
import Ethereum from './pages/ethereum'
import Desig from './pages/desig'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Ethereum">
        <Tab.Screen name="Ethereum" component={Ethereum} />
        <Tab.Screen name="Solana" component={Solana} />
        <Tab.Screen name="Desig" component={Desig} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
