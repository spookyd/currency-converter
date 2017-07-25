import React, { Component } from 'react'
import { ScrollView, StatusBar } from 'react-native'

import { ListItem, Separator } from '../../components/List'

import appStyles from '../../config/styles'
import styles from './styles'

class Themes extends Component {
    
    handleThemePress = (color) => {
        console.log('Theme pressed ', color)
    }

    render() {
        console.log('GOingi to render', appStyles.colors.orangeTheme)
        return (
            <ScrollView>
                <StatusBar barStyle='default' translucent={false} />
                <ListItem 
                    text="Blue"
                    onPress={() => this.handleThemePress(appStyles.colors.primary)}
                    selected
                    checkmark={false}
                    iconBackground={appStyles.colors.primary}
                />
                <Separator/>
                <ListItem 
                    text="Orange"
                    onPress={() => this.handleThemePress(appStyles.colors.orangeTheme)}
                    selected
                    checkmark={false}
                    iconBackground={appStyles.colors.orangeTheme}
                />
                <Separator />
                <ListItem 
                    text="Green"
                    onPress={() => this.handleThemePress(appStyles.colors.greenTheme)}
                    selected
                    checkmark={false}
                    iconBackground={appStyles.colors.greenTheme}
                />
                <Separator />
                <ListItem 
                    text="Purple"
                    onPress={() => this.handleThemePress(appStyles.colors.purpleTheme)}
                    selected
                    checkmark={false}
                    iconBackground={appStyles.colors.purpleTheme}
                />
                <Separator />
            </ScrollView>
        )
    }

}

export default Themes