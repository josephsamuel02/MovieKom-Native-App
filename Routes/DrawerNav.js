import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { globalStyles } from "../Globals/globalstyles";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
const Drawer = createDrawerNavigator();
const DrawerNav = () => {
    return (
        <Drawer.Navigator initialRouteName="HomeStack">
            <Drawer.Screen
                name="Home"
                component={HomeStack}
                options={{
                    title: "MovieKom",
                    headerStyle: {
                        backgroundColor: "#1a1a1a",
                        height: 90,
                        borderWidth: 0,
                        borderBottomColor: "#1a1a1a",
                    },
                    headerTintColor: "#FFFFFF",
                    headerTitleStyle: globalStyles.nav,
                    headerTitleAlign: "center",
                }}
            />
            <Drawer.Screen
                name="AboutS TopMoves"
                component={AboutStack}
                options={{
                    title: " About TopMovies",
                    headerStyle: {
                        backgroundColor: "dodgerblue",
                        height: 90,
                        borderWidth: 0,
                    },
                    headerTintColor: "#FFFFFF",
                    headerTitleStyle: globalStyles.HeaderText,
                    headerTitleAlign: "center",
                }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNav;
