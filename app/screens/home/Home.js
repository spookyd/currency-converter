import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, StatusBar, KeyboardAvoidingView } from 'react-native'

import { HeaderToggle } from '../../components/Header'
import { Container } from '../../components/Container'
import { Logo } from '../../components/Logo'
import { InputWithButton } from '../../components/TextInput'
import { ClearButton } from '../../components/Button'
import { LastConverted } from '../../components/Text'

import { swapCurrency, changeCurrencyAmount } from '../../actions/currencies'

import styles from './styles'

class Home extends Component {
    
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        amount: PropTypes.number,
        conversionRate: PropTypes.number,
        lastConvertedDate: PropTypes.object,
        isFetching: PropTypes.bool,
        primaryColor: PropTypes.string,
    }

    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' })
    }

    handlePressQuoteCurrency = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' })
    }

    handleTextChange = (amount) => {
        this.props.dispatch(changeCurrencyAmount(amount))
    }

    handleSwapCurrency = () => {
        this.props.dispatch(swapCurrency())
    }

    handleSettingsPress = () => {
        this.props.navigation.navigate('Options', { title: 'Options'})
    }

    render() {
        let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2)
        if (this.props.isFetching) {
            quotePrice = '...'
        }
        return (
            <Container backgroundColor={this.props.primaryColor}>
                <StatusBar 
                    translucent={false} 
                    barStyle="light-content" />
                <HeaderToggle onPress={this.handleSettingsPress}/>
                <KeyboardAvoidingView behavior="padding">
                    <Logo tintColor={this.props.primaryColor}/>
                    <InputWithButton 
                        buttonText={this.props.baseCurrency} 
                        onPress={this.handlePressBaseCurrency}
                        defaultValue={this.props.amount.toString()}
                        keyboardType="numeric"
                        onChangeText={this.handleTextChange}
                        textColor={this.props.primaryColor}
                        />
                    <InputWithButton 
                        buttonText={this.props.quoteCurrency} 
                        onPress={this.handlePressQuoteCurrency}
                        editable={false}
                        defaultValue={quotePrice}
                        textColor={this.props.primaryColor}
                        />
                    <LastConverted 
                        base={this.props.baseCurrency}
                        quote={this.props.quoteCurrency}
                        conversionRate={this.props.conversionRate}
                        date={this.props.lastConvertedDate}
                    />
                    <ClearButton 
                        text='Reverse Currency'
                        onPress={this.handleSwapCurrency}
                    />
                </KeyboardAvoidingView>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    const baseCurrency = state.currencies.baseCurrency
    const quoteCurrency = state.currencies.quoteCurrency
    const conversionSelector = state.currencies.conversions[baseCurrency] || {}
    const rates = conversionSelector.rates || {}
    return {
        baseCurrency,
        quoteCurrency,
        amount: state.currencies.amount,
        conversionRate: rates[quoteCurrency] || 0,
        lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
        isFetching: conversionSelector.isFetching,
        primaryColor: state.theme.primaryColor,
    }
}

export default connect(mapStateToProps)(Home)