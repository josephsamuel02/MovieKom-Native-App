import MovieStack from "./MovieStack";
import CommunityHomePage from "../Screens/CommunityHomePage";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <Tab.Navigator
            initialRouteName="MovieStack"
            style={{
                backgroundColor: "red",
            }}
            screenOptions={() => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "black",
                    borderColor: "black",
                    margin: 0,
                    padding: 2,
                    height: 60,
                },
            })}
            // tabBarOptions={{}}
        >
            <Tab.Screen
                name="MovieStack"
                component={MovieStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size, icon }) => {
                        color = focused ? "orange" : "white";
                        icon = focused ? "home" : "home-outline";
                        return (
                            <MaterialCommunityIcons
                                name={icon}
                                size={31}
                                color={color}
                            />
                        );
                    },

                    tabBarLabel: () => {
                        return null;
                    },
                }}
            />
            <Tab.Screen
                name="Add"
                component={MovieStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        color = focused ? "orange" : "white";

                        return (
                            <MaterialIcons
                                name="add-circle"
                                size={60}
                                color={color}
                            />
                        );
                    },
                    tabBarLabel: () => {
                        return null;
                    },
                }}
            />
            <Tab.Screen
                name="Comunity"
                component={CommunityHomePage}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size, icon }) => {
                        color = focused ? "orange" : "white";
                        icon = focused ? "people" : "people-outline";

                        return (
                            <MaterialIcons
                                name={icon}
                                size={31}
                                color={color}
                            />
                        );
                    },
                    tabBarLabel: () => {
                        return null;
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default HomeStack;
