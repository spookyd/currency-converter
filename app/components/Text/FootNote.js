import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

import styles from './styles'

const FootNote = ({ text }) => (
    <Text style={styles.footnote} >{text}</Text>
);

FootNote.propTypes = {
    text: PropTypes.string
}

export default FootNote