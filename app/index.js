import React from 'react'
import {connect, Provider} from 'react-redux'
import {addNavigationHelpers} from 'react-navigation'
import {AlertProvider} from './components/Alert'
import Router from './config/routes'
import store from './config/store'

const App = ({ dispatch, nav }) => (
	<Router 
		navigation={addNavigationHelpers({
			dispatch,
			state: nav,
		})}
	/>
);

const mapStateToProps = (state) => {
	return {
	nav: state.nav,
}};

const AppWithRouter = connect(mapStateToProps)(App);

export default () => (
	<Provider store={store}>
		<AlertProvider>
			<AppWithRouter />
		</AlertProvider>
	</Provider>
);
