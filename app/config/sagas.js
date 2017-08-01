import { takeEvery, select, call, put } from 'redux-saga/effects' // Allows us to hook into every action

// 1. Swap Currency
// 2. Change base currency
// 3. Upon initial state

import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION, CONVERSION_RESULT, CONVERSION_ERROR } from '../actions/currencies'

const getLatestRate = (currency) => fetch(`https://api.fixer.io/latest?base=${currency}`)

function* fetchLatestConversionRates(action) {
    try {
        let currency = action.currency
        if (currency === undefined) {
            currency = yield select(state => state.currencies.baseCurrency)
        }
        const response = yield call(getLatestRate, currency)
        const result = yield response.json()
        if (result.error) {
            yield put({ type: CONVERSION_ERROR, error: result.error })
        } else {
            yield put({ type: CONVERSION_RESULT, result })
        }
    } catch (e) {
        yield put({ type: CONVERSION_ERROR, error: e.message })
    }
}

export default function* rootSaga() {
    yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates)
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates)
    yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates)
}