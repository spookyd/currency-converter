import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { ListItem, Separator } from '../../components/List/'
import { connectAlert } from '../../components/Alert'

import styles from './styles'

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_WIDTH = 32;
const ICON_COLOR = '#868686';

class Options extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        alertWithType: PropTypes.func,
    };

    handleThemesPress = () => {
        this.props.navigation.navigate('Themes')
    };

    handleSitePress = () => {
        Linking.openURL('http://fixer.io').catch(() => this.props.alertWithType('error', 'Sorry!', "Fixer.io can't be opened right now"))
    };

    render() { 
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle='default' />
                <ListItem 
                    text="Themes" 
                    onPress={this.handleThemesPress} 
                    customIcon={
                        <Icon 
                            name={`${ICON_PREFIX}-arrow-forward`}
                            color={ICON_COLOR}
                            size={ICON_WIDTH}
                        />
                    }
                />
                <Separator />
                <ListItem 
                    text='Fixer.io' 
                    onPress={this.handleSitePress}
                    customIcon={
                        <Icon 
                            name={`${ICON_PREFIX}-link`}
                            color={ICON_COLOR}
                            size={ICON_WIDTH}
                        />
                    }
                />
                <Separator />
            </ScrollView>
        )
    }
}

export default connectAlert(Options)