import * as React from "react";
import { StyleSheet, View, Text } from "react-native-web";

export const CustomNav1 = () => {
    return (
        <View style={styles.navbox}>
            <Text style={styles.navTitle}> TopMovies</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    navbox: {
        margine: 0,
        width: "100%",
        height: "100%",
        borderWidth: 0,
        backgroundColor: "blue",
        // display: "flex",
        flexDirection: "row",
        alignItemes: "center",
        justiyContent: "center",
        zIndex: 5,
        // alignSelfe: "center",
    },
    navTitle: {
        padding: 10,
        textAlign: "center",

        color: "#FFFFFF",
    },
});

// export { CustomNav1 };
