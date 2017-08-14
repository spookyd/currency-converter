import { StyleSheet, Dimensions } from 'react-native'
import appStyles from '../../config/styles'

const imageWidth = Dimensions.get('window').width / 2;
const largeContainerImageSize = imageWidth;
const largeImageSize = imageWidth / 2;

const imageSize = {
    container: {
        small: largeContainerImageSize / 2,
        large: largeContainerImageSize,
    },
    nested: {
        small: largeImageSize / 2,
        large: largeImageSize,
    },
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: imageSize.container.large,
        height: imageSize.container.large
    },
    image: {
        width: imageSize.nested.large,
        tintColor: appStyles.colors.primary,
    },
    text: appStyles.text.title
});

export { styles, imageSize }