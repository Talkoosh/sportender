import { View } from "react-native";
import genericStyles from "./src/style/generic";
import Login from "./src/views/Login";
import MainPage from "./src/views/MainPage";

export default function App() {
  return (
    <View style={genericStyles.pageContainer}>
      {/* <Login /> */}
      <MainPage></MainPage>
    </View>
  );
}
