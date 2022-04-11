import React, { useState } from "react";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    SafeAreaView,
    Image,
    Modal,
    FlatList,
    ScrollView,
    ImageBackground,
} from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const CommunityHomePage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.shotVideosBox}>
                <View style={styles.shotVideoItem}>
                    <Image
                        source={require("../assets/Images/pexels-juan-c-palacios-3585607.jpg")}
                        style={styles.shotVideo}
                    />
                </View>
                <View style={styles.shotVideoItem}>
                    <Image
                        source={require("../assets/Images/pexels-juan-c-palacios-3585607.jpg")}
                        style={styles.shotVideo}
                    />
                </View>
                <View style={styles.shotVideoItem}>
                    <Image
                        source={require("../assets/Images/pexels-juan-c-palacios-3585607.jpg")}
                        style={styles.shotVideo}
                    />
                </View>
                <View style={styles.shotVideoItem}>
                    <Image
                        source={require("../assets/Images/pexels-juan-c-palacios-3585607.jpg")}
                        style={styles.shotVideo}
                    />
                </View>
            </View>
            <TouchableHighlight style={styles.seeShotVideos}>
                <MaterialCommunityIcons
                    name="chevron-double-down"
                    size={23}
                    color="black"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignSelf: "center",
                        padding: 0,
                        margin: 0,
                    }}
                />
            </TouchableHighlight>

            {/* ///////////////////////  PAGES BOX //////////////////////////// */}
            <ImageBackground
                style={styles.communityBackground}
                source={require("../assets/Images/pexels-juan-c-palacios-3585607.jpg")}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <SafeAreaView style={styles.communityBoxesContainer}>
                        <TouchableOpacity style={styles.communityBox}>
                            <Text style={styles.communityBoxText}>ACTION</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.communityBox}>
                            <Text style={styles.communityBoxText}>
                                ADVENTURE
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.communityBox}>
                            <Image
                                source={require("../assets/Images/fxdomain.jpg")}
                                style={styles.communityposter}
                            ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.communityBox}>
                            <Text style={styles.communityBoxText}>HORROR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.communityBox}>
                            <Image
                                source={require("../assets/Images/pexels-juan-c-palacios-3585607.jpg")}
                                style={styles.communityposter}
                            ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.communityBox}>
                            <Image
                                source={require("../assets/Images/fxdomain.jpg")}
                                style={styles.communityposter}
                            ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.communityBox}>
                            <Image
                                source={require("../assets/Images/pexels-juan-c-palacios-3585607.jpg")}
                                style={styles.communityposter}
                            ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.communityBox}>
                            <Image
                                source={require("../assets/Images/pexels-juan-c-palacios-3585607.jpg")}
                                style={styles.communityposter}
                            ></Image>
                        </TouchableOpacity>
                        {/* /////////////////////////////// */}
                        <TouchableOpacity style={styles.communityBox}>
                            <Text style={styles.communityBoxText}>ACTION</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.communityBox}>
                            <Text style={styles.communityBoxText}>
                                ADVENTURE
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.communityBox}>
                            <Text style={styles.communityBoxText}>SCI_FI</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.communityBox}>
                            <Text style={styles.communityBoxText}>HORROR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.communityBox}>
                            <Text style={styles.communityBoxText}>
                                ANIMATION
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.communityBox}>
                            <Text style={styles.communityBoxText}>FANTACY</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        padding: 0,
        backgroundColor: "black",
    },
    shotVideosBox: {
        margin: 0,
        padding: 2,
        width: "100%",
        height: 200,
        display: "flex",
        flexDirection: "row",

        overflow: "scroll",
    },
    shotVideoItem: {
        margin: "auto",
        marginStart: 8,
        padding: 0,
        width: 110,
        height: "100%",
        display: "flex",

        justifyContent: "center",
        alignSelf: "center",

        borderColor: "lightgray",
        borderRadius: 20,
    },
    shotVideo: {
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100%",
        borderRadius: 20,
    },
    seeShotVideos: {
        margin: 0,
        marginBottom: 3,
        padding: 0,
        width: "100%",
        height: 20,
        backgroundColor: "orange",
    },
    communityBackground: {
        flex: 1,
        margin: 0,
        padding: 3,
        width: "100%",
        display: "flex",
    },
    communityBoxesContainer: {
        margin: 0,
        padding: 3,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    communityBox: {
        margin: "auto",
        marginBottom: 5,
        padding: 0,
        width: "45%",
        height: 120,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 17,
    },
    communityposter: {
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100%",
        borderRadius: 17,
    },
    communityBoxText: {
        margin: 0,
        padding: 0,

        fontFamily: "Lobster-Reg",
        fontSize: 28,
        // fontWeight: "bold",
        color: "lightgray",
        textAlign: "center",
    },
});

export default CommunityHomePage;
