import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text, Image } from 'react-native'

import images from '../../config/images'
import styles from './styles'

const ClearButton = ({ text, onPress }) => (
    <TouchableOpacity 
        style={styles.container}
        onPress={onPress}
        >
        <View style={styles.buttonContainer} >
            <Image 
                style={styles.image}
                source={images.logo}
                resizeMode='contain'
            />
            <Text style={styles.text} >{text}</Text>
        </View>
    </TouchableOpacity>
);

ClearButton.propTypes = { 
    text: PropTypes.string,
    onPress: PropTypes.func
};

export default ClearButton