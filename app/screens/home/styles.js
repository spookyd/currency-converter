import { StyleSheet } from 'react-native'

import appStyles from '../../config/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appStyles.colors.primary,
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  header: {
    backgroundColor: appStyles.colors.primary
  }
});

export default styles;