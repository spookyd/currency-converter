import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import FootNote from './FootNote'

const LastConverted = (props) => {

    const { base, quote, conversionRate, date } = props

    const formattedText = '1 ' + props.base + ' = ' + props.conversionRate + ' ' + quote + ' as of ' + moment(date).format('MMMM D, YYYY')

    return (
        <FootNote text={formattedText}/>
    )
}

LastConverted.propTypes = {
    base: PropTypes.string,
    quote: PropTypes.string,
    conversionRate: PropTypes.number,
    date: PropTypes.object,
}

export default LastConverted