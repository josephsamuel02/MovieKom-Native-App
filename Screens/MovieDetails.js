import React, { useState } from "react";

import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    Modal,
} from "react-native";

import CommentsModal from "./CommentsModal";

import { globalStyles } from "../Globals/globalstyles";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const MovieDetails = ({ navigation, route: { params } }) => {
    const { title, rating, poster } = params;
    const [openModal, setOpenModal] = useState(false);

    return (
        <View style={globalStyles.Container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.contentBox}
            >
                <>
                    <Image
                        source={require("../assets/Images/pexels-juan-c-palacios-3585607.jpg")}
                        style={styles.ContentBoxPosters}
                        // source={{ uri: poster }}
                    />
                    <Text style={styles.title}> {title}</Text>
                    <Text style={styles.rating}>
                        {rating == 1 ? (
                            <MaterialIcons
                                name="star-rate"
                                color="gold"
                                size={24}
                            />
                        ) : null}
                        {rating == 2 ? (
                            <>
                                <MaterialIcons
                                    name="star-rate"
                                    color="gold"
                                    size={24}
                                />
                                <MaterialIcons
                                    name="star-rate"
                                    color="gold"
                                    size={24}
                                />
                            </>
                        ) : null}
                        {rating == 3 ? (
                            <>
                                <MaterialIcons
                                    name="star-rate"
                                    color="gold"
                                    size={24}
                                />
                                <MaterialIcons
                                    name="star-rate"
                                    color="gold"
                                    size={24}
                                />
                                <MaterialIcons
                                    name="star-rate"
                                    color="gold"
                                    size={24}
                                />
                            </>
                        ) : null}
                    </Text>

                    <Text style={styles.genre}>Action | Fantacy | Si-Fi</Text>
                    <Text style={styles.aboutMovie}>
                        About The Movie: the quick silver is one of the fastest
                        super heros in the marvel universe and also one of the
                        most entertack silver is one of the fastest super heros
                        in the marvel universe and also one of the most
                        entertaing to watch in action, with his typical fun
                        fight style of fighting, he enjoies doing whst he dose
                        ,knowing that no one is fast enough to catch him.
                    </Text>
                </>

                <View style={styles.inputContainer}>
                    <Text style={styles.commentInputHeader}>
                        Comments & Reviews
                    </Text>

                    <View style={styles.inputBox}>
                        <TextInput
                            // scrollEnabled={false}
                            multiline
                            placeholder="Drop your view about this movie"
                            style={styles.commentInput}
                        />
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.commentBtn}
                        >
                            <MaterialIcons name="send" size={28} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={styles.chatroomBtn}
                        onPress={() => setOpenModal(true)}
                    >
                        <Text style={styles.chatroomBtnIcon}>
                            <MaterialCommunityIcons
                                name="chevron-double-up"
                                size={28}
                            />
                        </Text>
                        <Text style={styles.chatroomBtnText}>
                            View what the community is saying
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.retunBtn}
            >
                <MaterialIcons name="keyboard-return" size={28} />
            </TouchableOpacity>

            <Modal
                visible={openModal}
                animationType="slide"
                style={styles.modal}
            >
                <TouchableOpacity
                    style={styles.chatroomCloseBtn}
                    onPress={() => setOpenModal(false)}
                >
                    <MaterialCommunityIcons
                        name="chevron-double-down"
                        size={28}
                    />
                </TouchableOpacity>

                <CommentsModal />
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    contentBox: {
        margin: 0,
        marginStart: 15,
        marginEnd: 15,
        paddingTop: 25,
        padding: 0,
        backgroundColor: "black",
    },
    ContentBoxPosters: {
        margin: 0,
        padding: 0,
        width: "100%",
        height: 500,
        borderRadius: 5,
    },
    title: {
        margin: 25,
        fontFamily: "Courgette-Reg",
        fontWeight: "bold",
        fontSize: 24,
        color: "white",
        textAlign: "center",
    },
    rating: {
        margin: 16,
        fontFamily: "Courgette-Reg",
        fontWeight: "bold",
        fontSize: 24,
        color: "yellow",
    },
    genre: {
        margin: 16,
        fontFamily: "Lobster-Reg",
        fontWeight: "bold",
        fontSize: 20,
        color: "orange",
    },
    aboutMovie: {
        margin: 20,
        marginStart: 15,
        marginEnd: 15,
        fontFamily: "Hind-Reg",
        fontSize: 16,
        color: "white",
    },
    retunBtn: {
        position: "absolute",
        bottom: 20,
        left: 20,
        backgroundColor: "orange",
        borderRadius: 100,
        padding: 17,
        shadowColor: "silver",
        shadowRadius: 3,
        shadowOpacity: 3,
        elevation: 8,
    },
    inputContainer: {
        margin: 5,
        marginTop: 40,
        marginBottom: 60,
        padding: 2,
        paddingTop: 30,
    },
    commentInputHeader: {
        fontSize: 21,
        fontFamily: "Lobster-Reg",
        color: "orange",
    },
    inputBox: {
        margin: 0,
        marginTop: 30,
        marginBottom: 0,
        padding: 0,
        display: "flex",
        flexDirection: "row",
    },
    commentInput: {
        margin: 5,
        padding: 5,
        paddingStart: 17,
        paddingEnd: 17,
        height: 70,
        width: "80%",
        backgroundColor: "#161515",
        fontSize: 18,
        fontFamily: "Hind-Reg",
        color: "#d1cbcb",
        flexWrap: "wrap",
        borderRadius: 20,

        justifyContent: "center",
    },
    commentBtn: {
        margin: "auto",
        padding: 15,

        display: "flex",

        backgroundColor: "orange",
        borderRadius: 100,
        justifyContent: "center",
        alignSelf: "center",
    },
    commentBtnText: {
        margin: "auto",
        display: "flex",
    },
    chatroomBtn: {
        margin: 5,
        marginTop: 20,
        padding: 0,
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "orange",
        borderWidth: 2,
        borderColor: "orange",
        justifyContent: "center",
        borderRadius: 7,
    },
    chatroomBtnIcon: {
        margin: 0,
        padding: 4,
        fontSize: 18,
        fontFamily: "Hind-Reg",
        backgroundColor: "orange",
        textAlign: "center",
        justifyContent: "center",
    },
    chatroomBtnText: {
        margin: 0,
        padding: 4,
        fontSize: 18,
        fontFamily: "Hind-Reg",
        color: "white",
        textAlign: "center",
        backgroundColor: "black",
        justifyContent: "center",
        borderRadius: 7,
    },

    modal: {
        flex: 1,
    },
    chatroomCloseBtn: {
        display: "flex",
        backgroundColor: "orange",
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default MovieDetails;
