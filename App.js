import { View, Text } from "react-native";
import genericStyles from "./src/style/generic";
import Login from "./src/views/Login";
import MainPage from "./src/views/MainPage";
import SignupCompanyOrUser from "./src/views/SignupCompanyOrUser";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Login"
        >
          <Stack.Screen name={"Login"} component={Login} />
          <Stack.Screen name={"Main"} component={MainPage} />
          <Stack.Screen name={"Signup"} component={SignupCompanyOrUser} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
