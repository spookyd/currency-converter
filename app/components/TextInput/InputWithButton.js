import React from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, TouchableHighlight, Text } from 'react-native'

import { styles, underlayColor } from './styles'

const InputWithButton = (props) => {
    const { onPress, buttonText, editable = true, textColor = null } = props;

    const containerStyles = [styles.container];
    if (editable === false) {
        containerStyles.push(styles.containerDisabled)
    }

    const textStyle = [styles.buttonText];
    if (textColor) {
        textStyle.push({ color: textColor })
    }

    return (
        <View style={containerStyles}>
            <TouchableHighlight 
                style={styles.buttonContainer} 
                onPress={onPress}
                underlayColor={underlayColor}>
                <Text style={textStyle} >{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border}/>
            <TextInput style={styles.input} {...props} />
        </View>
    )
};

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
    textColor: PropTypes.string,
};

export default InputWithButton