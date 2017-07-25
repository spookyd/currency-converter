import React from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, TouchableHighlight, Text } from 'react-native'

import { styles, underlayColor } from './styles'

const InputWithButton = (props) => {
    const { onPress, buttonText, editable = true } = props

    const containerStyles = [styles.container]
    if (editable === false) {
        containerStyles.push(styles.containerDisabled)
    }

    return (
        <View style={containerStyles}>
            <TouchableHighlight 
                style={styles.buttonContainer} 
                onPress={onPress}
                underlayColor={underlayColor}>
                <Text style={styles.buttonText} >{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border}/>
            <TextInput style={styles.input} {...props} />
        </View>
    )
}

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool
}

export default InputWithButton