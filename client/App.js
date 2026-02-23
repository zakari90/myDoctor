import { GOOGLE_API_KEY } from "@env";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform, StyleSheet } from "react-native";
import useScript from "./hooks/useScript";
import DoctorsScreen from "./screens/Doctors";
import HomeScreen from "./screens/Home";
import ProfileScreen from "./screens/Profile";
import SignInScreen from "./screens/SignIn";
import SignUpScreen from "./screens/SignUp";
import UpdateProfileScreen from "./screens/UpdateProfile";

const Stack = createNativeStackNavigator();

export default function App() {
  if (Platform.OS == "web") {
    useScript(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`);
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#007bff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            textAlign: "right",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Doctors"
          component={DoctorsScreen}
          options={{
            title: "صفحة الأطباء",
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            title: "تسجيل مستخدم جديد",
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: "تسجيل الدخول",
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "صفحة المستخدم",
          }}
        />
        <Stack.Screen
          name="UpdateProfile"
          component={UpdateProfileScreen}
          options={{
            title: "صفحة تعديل البيانات الشخصية",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
