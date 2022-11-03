import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/views/login/Login';
import genericStyles from './src/style/generic';

export default function App() {
  return (
    <View style={genericStyles.pageContainer}>
      <Login></Login>
    </View>
  );
}

