import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import MovieDetails from "../Screens/MovieDetails";
const Stack = createNativeStackNavigator();
const MovieStack = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="MovieDetails"
                component={MovieDetails}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default MovieStack;
