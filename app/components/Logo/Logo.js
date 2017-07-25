import React, { Component } from 'react'
import { View, Text, Image, Keyboard, Animated, Platform } from 'react-native'

import { styles, imageSize } from './styles'
import images from '../../config/images'

const ANIMATION_DURATION = 250

class Logo extends Component {

    constructor(props) {
        super(props)
        this.containerImageSize = new Animated.Value(imageSize.container.large)
    }

    componentDidMount() {
        let keyboardShowEvent = 'keyboardWillShow'
        let keyboardHideEvent = 'keyboardWillHide'
        if (Platform.OS === 'android') {
            keyboardShowEvent = 'keyboardDidShow'
            keyboardHideEvent = 'keyboardDidHide'
        }
        this.keyboardShowListener = Keyboard.addListener(keyboardShowEvent, this.onKeyboardShow)
        this.keyboardHideListener = Keyboard.addListener(keyboardHideEvent, this.onKeyboardHide)
    }

    componentWillUnmount() {
        this.keyboardShowListener.remove()
        this.keyboardHideListener.remove()
    }

    onKeyboardShow = () => {
        // For chaining animation use Animated.parallel
        Animated.timing(this.containerImageSize, {
            toValue: imageSize.container.small,
            duration: ANIMATION_DURATION,
        }).start()
    }

    onKeyboardHide = () => {
        Animated.timing(this.containerImageSize, {
            toValue: imageSize.container.large,
            duration: ANIMATION_DURATION,
        }).start()
    }

    render() {
        const containerImageStyle = [
            styles.containerImage,
            { width: this.containerImageSize, height: this.containerImageSize }
        ]
        return (
            <View style={ styles.container } >
                <Animated.Image 
                    source={images.logo} 
                    style={containerImageStyle} 
                    resizeMode="contain" />
                <Text style={styles.text} >Demo Application</Text>
            </View>
        )
    }

}

export default Logo