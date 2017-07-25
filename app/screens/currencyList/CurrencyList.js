import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, View, StatusBar } from 'react-native'

import { ListItem, Separator } from '../../components/List/index'

import styles from './styles'
import currencies from '../../data/currencies'

const TEMP_CURRENT_CURRENCY = 'CAD'

class CurrencyList extends Component {

    static propTypes = {
        navigation: PropTypes.object
    }

    handleRowPress = () => {
        this.props.navigation.goBack(null)
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='default' translucent={false} />
                <FlatList
                    style={styles.list}
                    data={currencies}
                    renderItem={({item}) => 
                        <ListItem 
                            text={item}
                            selected={item === TEMP_CURRENT_CURRENCY}
                            onPress={this.handleRowPress}
                        /> 
                    }
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        )
    }
}

export default CurrencyList