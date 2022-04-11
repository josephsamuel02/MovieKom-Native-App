import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../Screens/About";

const Stack = createNativeStackNavigator();
const AboutStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="About"
                component={About}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default AboutStack;
