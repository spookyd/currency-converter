/**
 * routes.js is the single place for accessing all the routes
 */
import { StackNavigator } from 'react-navigation'
import { StatusBar } from 'react-native'

import Home from '../screens/home/Home'
import CurrencyList from '../screens/currencyList/CurrencyList'

export default StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null, // Removes header since null is a valid component
        },
    },
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        })
    }
}, {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight }
})