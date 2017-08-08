import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight } from 'react-native'

import Icon from './Icon'
import Separator from './Separator'

import { styles, underlayColor } from './styles'

const ListItem = ({ 
    text, 
    onPress,
    selected = false, 
    checkmark = true, 
    visible = true, 
    customIcon = null,
    customStyle = {},
    iconBackground }) => {
        let rowStyles = [styles.row, customStyle.row]
        let textStyles = [styles.text, customStyle.text]
        return (
        <TouchableHighlight 
            onPress={onPress}
            underlayColor={underlayColor}
        >
            <View style={rowStyles}>
                <Text style={textStyles}>{text}</Text>
                {selected ? <Icon checkmark={checkmark} visible={visible} iconBackground={iconBackground}/> : <Icon />}
                {customIcon}
            </View>
        </TouchableHighlight>
        )
    }

ListItem.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    selected: PropTypes.bool,
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    customIcon: PropTypes.element,
    customStyle: PropTypes.object,
    iconBackground: PropTypes.string
}

export default ListItem