import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { AlertProvider } from './components/Alert'
import Router from './config/routes'
import store from './config/store'

class App extends Component {
	render() {
	    return (
			<Provider store={store}>
				<AlertProvider>
					<Router onNavigationStateChange={null}/>
				</AlertProvider>
			</Provider>
	    )
  	}
}

export default App;
