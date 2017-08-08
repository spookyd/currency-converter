import { NavigationActions } from 'react-navigation'
import Router from '../config/routes'

const initialState = Router.router.getStateForAction(NavigationActions.init(), null)

export default (state = initialState, action) => {
    const nextState = Router.router.getStateForAction(action, state)
    return nextState || state
}