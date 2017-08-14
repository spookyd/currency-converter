import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Image } from 'react-native'

import images from '../../config/images'
import styles from './styles'

const HeaderToggle = ({ onPress }) => (
    <View style={styles.container}>
        <TouchableOpacity 
            style={styles.button}
            onPress={onPress}>
            <Image 
                style={styles.icon} 
                source={images.gear}
                resizeMode='contain'
            />
        </TouchableOpacity>
    </View>
);

HeaderToggle.propTypes = {
    onPress: PropTypes.func
};

export default HeaderToggle