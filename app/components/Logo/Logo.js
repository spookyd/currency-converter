import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, Keyboard, Animated, Platform } from 'react-native'

import { styles, imageSize } from './styles'
import images from '../../config/images'

const ANIMATION_DURATION = 250

class Logo extends Component {
    static propTypes = {
        tintColor: PropTypes.string,
    }

    constructor(props) {
        super(props)
        this.containerImageSize = new Animated.Value(imageSize.container.large)
        this.imageSize = new Animated.Value(imageSize.nested.large)
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
        Animated.parallel([
            Animated.timing(this.containerImageSize, {
                toValue: imageSize.container.small,
                duration: ANIMATION_DURATION,
            }),
            Animated.timing(this.imageSize, {
                toValue: imageSize.nested.small,
                duration: ANIMATION_DURATION,
            }),
        ]).start()
    }

    onKeyboardHide = () => {
        Animated.parallel([
            Animated.timing(this.containerImageSize, {
                toValue: imageSize.container.large,
                duration: ANIMATION_DURATION,
            }),
            Animated.timing(this.imageSize, {
                toValue: imageSize.nested.large,
                duration: ANIMATION_DURATION,
            }),
        ]).start()
    }

    render() {
        const containerImageStyle = [
            styles.containerImage,
            { width: this.containerImageSize, height: this.containerImageSize }
        ]
        const imageStlye = [
            styles.image,
            { width: this.imageSize },
            this.props.tintColor ? { tintColor: this.props.tintColor } : null
        ]
        return (
            <View style={ styles.container } >
                <Animated.Image
                    source={images.background}
                    style={containerImageStyle}
                    resizeMode='contain'
                >
                    <Animated.Image 
                        source={images.logo} 
                        style={imageStlye} 
                        resizeMode="contain" />
                </Animated.Image>
                <Text style={styles.text} >Currency Converter</Text>
            </View>
        )
    }

}

export default Logo