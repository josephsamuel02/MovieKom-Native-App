import React from "react";
import * as Font from "expo-font";
import { useState } from "react";
import "react-native-gesture-handler";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from "./Routes/DrawerNav";

const getFonts = async () => {
    return await Font.loadAsync({
        "Courgette-Reg": require("./assets/fonts/Courgette-Regular.ttf"),
        "Hind-Reg": require("./assets/fonts/Hind-Regular.ttf"),
        "Lobster-Reg": require("./assets/fonts/Lobster-Regular.ttf"),
    });
};

export default function App() {
    const [gotFonts, setGotFonts] = useState(false);

    if (!gotFonts) {
        return (
            <AppLoading
                startAsync={getFonts}
                onError={() => console.log("An Error Occured")}
                onFinish={() => setGotFonts(true)}
            />
        );
    } else {
        return (
            <NavigationContainer>
                <DrawerNav />
            </NavigationContainer>
        );
    }
}
