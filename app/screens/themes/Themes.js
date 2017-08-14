import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ScrollView, StatusBar, View, SegmentedControlIOS } from 'react-native'

import { ListItem, Separator } from '../../components/List'

import { changePrimaryColor, changeTheme } from '../../actions/theme'

import appStyles, { primaryColors } from '../../config/styles'
import styles from './styles'

const THEME_OPTIONS = ['Light', 'Dark'];

class Themes extends Component {

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        selectedTheme: PropTypes.string,
        themeStyles: PropTypes.object,
        primaryColor: PropTypes.string,
    };

    // TODO: This was causing errors
    // static navigationOptions = {
    //     header: ({ navigation }) => ({ 
    //         headerStyle: { backgroundColor: '#458274'}//navigation.state.params ? navigation.state.params.themeStyles.styles.background : {},
    //     })
    // }
    
    handleThemePress = (color) => {
        this.props.dispatch(changePrimaryColor(color));
        this.props.navigation.goBack()
    };

    handleThemeChange = (theme) => {
        this.props.dispatch(changeTheme(theme))
    };

    componentWillReceiveProps(nextProps) {
        let styles = nextProps.themeStyles;
        if (styles && styles !== this.props.themeStyles) {
            this.props.navigation.setParams({ styles })
        }
    }

    render() {
        let containerStyles = [styles.container];
        if (this.props.themeStyles) {
            containerStyles.push(this.props.themeStyles.background)
        }
        let rowStyle = this.props.themeStyles.card;
        let rowTextStyle = this.props.themeStyles.primaryText;
        return (
            <ScrollView style={containerStyles}>
                <StatusBar barStyle='default' translucent={false} />
                {/* <View style={styles.themeCell}>
                    <SegmentedControlIOS 
                        values={THEME_OPTIONS}
                        selectedIndex={ this.props.selectedTheme === 'Light' ? 0 : 1 }
                        onChange={(event) => 
                            this.handleThemeChange(THEME_OPTIONS[event.nativeEvent.selectedSegmentIndex])
                        }
                        tintColor={this.props.primaryColor}
                    />
                </View>
                <Separator/> */}
                <ListItem 
                    text="Blue"
                    onPress={() => this.handleThemePress(appStyles.colors.primary)}
                    customStyle={ {row: rowStyle, text: rowTextStyle} }
                    selected
                    checkmark={false}
                    iconBackground={appStyles.colors.primary}
                />
                <Separator/>
                <ListItem 
                    text="Orange"
                    onPress={() => this.handleThemePress(primaryColors.orange)}
                    customStyle={ {row: rowStyle, text: rowTextStyle} }
                    selected
                    checkmark={false}
                    iconBackground={primaryColors.orange}
                />
                <Separator />
                <ListItem 
                    text="Green"
                    onPress={() => this.handleThemePress(primaryColors.green)}
                    customStyle={ {row: rowStyle, text: rowTextStyle} }
                    selected
                    checkmark={false}
                    iconBackground={primaryColors.green}
                />
                <Separator />
                <ListItem 
                    text="Purple"
                    onPress={() => this.handleThemePress(primaryColors.purple)}
                    customStyle={ {row: rowStyle, text: rowTextStyle} }
                    selected
                    checkmark={false}
                    iconBackground={primaryColors.purple}
                />
                <Separator />
            </ScrollView>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        selectedTheme: state.theme.type,
        themeStyles: state.theme.styles,
        primaryColor: state.theme.primaryColor,
    }
};

export default connect(mapStateToProps)(Themes)