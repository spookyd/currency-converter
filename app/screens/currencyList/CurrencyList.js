import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FlatList, View, StatusBar } from 'react-native'

import { ListItem, Separator } from '../../components/List/index'

import { changeBaseCurrency, changeQuoteCurrency } from '../../actions/currencies'

import styles from './styles'
import currencies from '../../data/currencies'

class CurrencyList extends Component {

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        primaryColor: PropTypes.string,
    };

    handleRowPress = (currency) => {
        const { type } = this.props.navigation.state.params;
        if (type === 'base') {
            this.props.dispatch(changeBaseCurrency(currency))
        } else if (type === 'quote') {
            this.props.dispatch(changeQuoteCurrency(currency))
        }
        this.props.navigation.goBack(null)
    };

    render() {
        let comparisonCurrency = this.props.baseCurrency;
        if (this.props.navigation.state.params.type == 'quote') {
            comparisonCurrency = this.props.quoteCurrency
        }
        console.log('PrimaryColor',this.props.primaryColor);
        return (
            <View style={styles.container}>
                <StatusBar barStyle='default' translucent={false} />
                <FlatList
                    style={styles.list}
                    data={currencies}
                    renderItem={({item}) => 
                        <ListItem 
                            text={item}
                            selected={item === comparisonCurrency}
                            onPress={() => this.handleRowPress(item)}
                            iconBackground={this.props.primaryColor}
                        /> 
                    }
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        baseCurrency: state.currencies.baseCurrency,
        quoteCurrency: state.currencies.quoteCurrency,
        primaryColor: state.theme.primaryColor,
    }
};

export default connect(mapStateToProps)(CurrencyList)