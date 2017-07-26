/**
 * routes.js is the single place for accessing all the routes
 */
import { StackNavigator } from 'react-navigation'
import { StatusBar } from 'react-native'

import Home from '../screens/home/Home'
import CurrencyList from '../screens/currencyList/CurrencyList'
import Options from '../screens/options/Options'
import Themes from '../screens/themes/Themes'

const MainStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null,
        },
    },
    Options: {
        screen: Options,
        navigationOptions: {
            headerTitle: 'Options',
        },
    },
    Themes: {
        screen: Themes,
        navigationOptions: {
            headerTitle: 'Themes',
        },
    }
}, {
    headerMode: 'screen',
})

const CurrencyListStack = StackNavigator({
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        })
    }
})

export default StackNavigator({
    Home: {
        screen: MainStack
    },
    CurrencyList: {
        screen: CurrencyListStack,
    }
}, {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: 'none',
})