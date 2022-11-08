import {View } from 'react-native';
import Login from './src/views/Login';
import genericStyles from './src/style/generic';

export default function App() {
    return (
        <View style={genericStyles.pageContainer}>
            <Login></Login>
        </View>
    );
}


