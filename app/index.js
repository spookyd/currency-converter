import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import { AlertProvider } from './components/Alert'
import Router from './config/routes'
import store from './config/store'

const App = ({ dispatch, nav }) => (
	<Router 
		navigation={addNavigationHelpers({
			dispatch,
			state: nav,
		})}
	/>
)

const mapStateToProps = (state) => ({
	nav: state.nav,
})

const AppWithRouter = connect(mapStateToProps)(App)

export default () => (
	<Provider store={store}>
		<AlertProvider>
			<AppWithRouter />
		</AlertProvider>
	</Provider>
);
