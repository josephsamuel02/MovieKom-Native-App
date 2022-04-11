import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
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
} from "react-native";

const CommentsModal = () => {
    const [openPupUpChat, setOpenPupUpChat] = useState(false);
    const [openPupUpReply, setOpenPupUpReply] = useState(false);

    const [userComentItems, setUserComentItems] = useState();
    const [Data, setData] = useState([
        {
            movieid: 243,
            userid: 2,
            userimage: "https://pexcels.com/123x344",
            username: "bala ogudule",
            comment:
                "this is a fantastic movie ,but it could have been better if the main protagonist  didnt die",
            likes: 34,
            dislike: 2,
            replies: [
                {
                    username: "Speaker",
                    comment:
                        "A wondrful work A wondrful work A wondrful work A wondrful work A wondrful work",
                },
                {
                    username: "Speaker",
                    comment:
                        "A wondrful work A wondrful work A wondrful work A wondrful work A wondrful work",
                },
                {
                    username: "Speaker",
                    comment:
                        "A wondrful work A wondrful work A wondrful work A wondrful work A wondrful work",
                },
                {
                    username: "Speaker",
                    comment:
                        "A wondrful work A wondrful work A wondrful work A wondrful work A wondrful work",
                },
                {
                    username: "Speaker",
                    comment:
                        "A wondrful work A wondrful work A wondrful work A wondrful work A wondrful work",
                },
            ],
        },
        {
            movieid: 243,
            userid: 62,
            userimage: "https://pexcels.com/123x344",
            username: "bala ogudule",
            comment:
                "this is a fantastic movie ,but it could have been better ",
            likes: 4,
            dislike: 0,
            replies: [
                {
                    username: "Speaker",
                    comment:
                        "A wondrful work A wondrful work A wondrful work A wondrful work A wondrful work",
                },
                {
                    username: "Speaker",
                    comment:
                        "A wondrful work A wondrful work A wondrful work A wondrful work A wondrful work",
                },
                {
                    username: "Speaker",
                    comment:
                        "A wondrful work A wondrful work A wondrful work A wondrful work A wondrful work",
                },
                {
                    username: "Speaker",
                    comment:
                        "A wondrful work A wondrful work A wondrful work A wondrful work A wondrful work",
                },
                {
                    username: "Speaker",
                    comment:
                        "A wondrful work A wondrful work A wondrful work A wondrful work A wondrful work",
                },
            ],
        },
        {
            movieid: 243,
            userid: 42,
            userimage: "https://pexcels.com/123x344",
            username: "bala ogudule",
            comment: "this is a fantastic movie , but it could have  didnt die",
            likes: 342,
            dislike: 42,
            replies: [
                {
                    username: "Speaker",
                    comment:
                        "A wondrful work A wondrful work A wondrful work A wondrful work A wondrful work",
                },
                {
                    username: "Speaker",
                    comment:
                        "A wondrful work A wondrful work A wondrful work A wondrful work A wondrful work",
                },
                {
                    username: "Speaker",
                    comment:
                        "A wondrful work A wondrful work A wondrful work A wondrful work A wondrful work",
                },
                {
                    username: "Speaker",
                    comment:
                        "A wondrful work A wondrful work A wondrful work A wondrful work A wondrful work",
                },
                {
                    username: "Speaker",
                    comment:
                        "A wondrful work A wondrful work A wondrful work A wondrful work A wondrful work",
                },
            ],
        },
        {
            movieid: 243,
            userid: 12,
            userimage: "https://pexcels.com/123x344",
            username: "bala ogudule",
            comment:
                "this is a fantastic movie , but it could have been better if the main protagonist  didnt die",
            likes: 44,
            dislike: 12,
            replies: [
                {
                    username: "Speaker",
                    comment:
                        "A wondrful work A wondrful work A wondrful work A wondrful work A wondrful work",
                },
                {
                    username: "Speaker",
                    comment:
                        "A wondrful work A wondrful work A wondrful work A wondrful work A wondrful work",
                },
                {
                    username: "Speaker",
                    comment:
                        "A wondrful work A wondrful work A wondrful work A wondrful work A wondrful work",
                },
                {
                    username: "Speaker",
                    comment:
                        "A wondrful work A wondrful work A wondrful work A wondrful work A wondrful work",
                },
                {
                    username: "Speaker",
                    comment:
                        "A wondrful work A wondrful work A wondrful work A wondrful work A wondrful work",
                },
            ],
        },
    ]);
    return (
        <View style={styles.modalContentBox}>
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.userid}
                data={Data}
                renderItem={({ item }) => (
                    <View style={styles.commentsBox}>
                        <Image
                            source={require("../assets/Images/pexels-juan-c-palacios-3585607.jpg")}
                            style={styles.userImage}
                            // source={{ uri: item.userimage }}
                        />
                        <View style={styles.commentsTextBox}>
                            <Text style={styles.username}>
                                @{item.username}
                            </Text>
                            <Text style={styles.userComment}>
                                {item.comment}
                            </Text>
                            <View style={styles.btnsBox}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.btnbtn}
                                >
                                    <MaterialIcons
                                        name="thumb-up"
                                        size={21}
                                        color={"orange"}
                                    />

                                    <Text style={styles.btncount}>
                                        {item.likes}
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.btnbtn}
                                >
                                    <MaterialIcons
                                        name="thumb-down"
                                        size={23}
                                        color={"orange"}
                                        margin={"auto"}
                                    />

                                    <Text style={styles.btncount}>
                                        {item.dislike}
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.btnbtn}
                                    onPress={() => {
                                        setUserComentItems([
                                            { username: "@" + item.username },
                                            { comment: item.comment },
                                            { userid: item.userid },
                                            { replies: item.replies },
                                        ]);
                                        setOpenPupUpReply(true);
                                    }}
                                >
                                    <MaterialIcons
                                        name="chat"
                                        size={23}
                                        color={"orange"}
                                    />
                                    <Text style={styles.btncount}>reply</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
            <TouchableHighlight
                activeOpacity={0.7}
                underlayColor={"orangered"}
                onPress={() => setOpenPupUpChat(true)}
                style={styles.chatBtn}
            >
                <MaterialIcons name="chat" size={28} />
            </TouchableHighlight>

            {/* CHAT INPUT MODAL */}
            <Modal visible={openPupUpChat} transparent animationType="fade">
                <BlurView style={styles.BlurView} tint="light" intensity={10}>
                    <View style={styles.popUpChat}>
                        <TextInput
                            showsVerticalScrollIndicator={false}
                            multiline
                            placeholder="Drop your view"
                            style={styles.inputComment}
                        />

                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.postCommentBtn}
                        >
                            <Text style={styles.postCommentText}>
                                <MaterialIcons name="send" size={28} />
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.closeCommentPupUp}
                            onPress={() => setOpenPupUpChat(false)}
                        >
                            <Text style={styles.closeCommentPupUpText}>
                                close
                            </Text>
                        </TouchableOpacity>
                    </View>
                </BlurView>
            </Modal>

            {/* REPLY INPUT MODAL */}
            <Modal visible={openPupUpReply} transparent animationType="fade">
                <BlurView
                    tint="dark"
                    intensity={10}
                    style={styles.replyBlurView}
                >
                    <TouchableOpacity
                        style={styles.closeReplyPupUp}
                        onPress={() => setOpenPupUpReply(false)}
                    >
                        <Text style={styles.closeReplyPupUpText}>
                            <MaterialIcons
                                name="close"
                                size={17}
                                color="black"
                            />
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.replyPopUpChat}>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={styles.replyPopUpContent}
                        >
                            {userComentItems &&
                                userComentItems.map(
                                    ({ username, comment }, index) => (
                                        <SafeAreaView key={index}>
                                            <Text
                                                style={
                                                    styles.replyPopUpContentText
                                                }
                                            >
                                                <Text
                                                    style={{
                                                        margin: 0,
                                                        padding: 0,
                                                        fontSize: 16,
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    {username}
                                                </Text>
                                                {comment}
                                            </Text>
                                        </SafeAreaView>
                                    )
                                )}
                        </ScrollView>

                        <View style={styles.replyInputCommentWrapper}>
                            <TextInput
                                showsVerticalScrollIndicator={false}
                                multiline
                                placeholder="Drop your view"
                                style={styles.replyInputComment}
                            />

                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.replyInputCommentBtn}
                            >
                                <Text style={styles.replyInputCommentBtnText}>
                                    <MaterialIcons
                                        name="send"
                                        size={28}
                                        color="white"
                                    />
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={styles.replyList}
                        >
                            {userComentItems &&
                                userComentItems.map((a, index) => (
                                    <View
                                        key={index}
                                        style={styles.replyListWrap}
                                    >
                                        {a.replies &&
                                            a.replies.map((i, idx) => (
                                                <SafeAreaView
                                                    key={idx}
                                                    style={{
                                                        marginBottom: 15,
                                                        borderLeftWidth: 1,
                                                        borderColor: "white",
                                                    }}
                                                >
                                                    <Text
                                                        style={
                                                            styles.replyListUserName
                                                        }
                                                    >
                                                        @{i.username}
                                                    </Text>
                                                    <Text
                                                        style={
                                                            styles.replyListText
                                                        }
                                                    >
                                                        {i.comment}
                                                    </Text>
                                                </SafeAreaView>
                                            ))}
                                    </View>
                                ))}
                        </ScrollView>
                    </View>
                </BlurView>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    modalContentBox: {
        flex: 1,
        margin: 0,
        padding: 3,
        paddingBottom: 25,
        backgroundColor: "black",
    },
    commentsBox: {
        margin: 15,
        marginTop: 10,
        marginBottom: 20,
        padding: 5,
        display: "flex",
        flexDirection: "row",
        maxWidth: "100%",
        borderRadius: 30,
    },
    userImage: {
        margin: 2,
        marginRight: 18,
        padding: 5,
        width: 60,
        height: 60,
        borderRadius: 100,
    },
    commentsTextBox: {
        margin: 0,
        padding: 15,
        display: "flex",
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "white",
        maxWidth: "80%",
        borderRadius: 30,
        backgroundColor: "black",
    },
    username: {
        margin: 2,
        marginStart: 5,
        padding: 1,
        fontSize: 18,
        fontFamily: "Hind-Reg",
        fontWeight: "bold",
        color: "white",
    },
    userComment: {
        margin: 2,
        padding: 4,
        fontSize: 17,
        fontFamily: "Hind-Reg",
        color: "white",
    },
    btnsBox: {
        margin: 5,
        padding: 5,
        display: "flex",
        flexDirection: "row",
    },
    btnbtn: {
        margin: 5,
        marginStart: 10,
        padding: 5,

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    btncount: {
        margin: "auto",
        marginStart: 6,
        fontSize: 14,
        fontFamily: "Hind-Reg",
        color: "white",
        textAlign: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    chatBtn: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "orange",
        borderRadius: 100,
        padding: 17,
    },
    BlurView: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 0,
        padding: 0,
    },
    popUpChat: {
        position: "absolute",
        top: "18%",
        width: "87%",
        height: 500,
        backgroundColor: "black",
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "orange",
        borderRadius: 15,
    },
    inputComment: {
        margin: 0,
        marginTop: 30,
        padding: 15,
        width: "80%",
        height: 240,
        borderWidth: 1,
        borderColor: "white",
        alignSelf: "center",
        color: "white",
        fontFamily: "Hind-Reg",
        fontSize: 19,
        borderRadius: 28,
        backgroundColor: "#0f0f0f",
    },
    postCommentBtn: {
        margin: 10,
        marginTop: 15,
        marginLeft: "65%",
        padding: 8,
        width: "22%",
        height: "auto",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
    },
    postCommentText: {
        margin: 0,
        padding: 0,
        color: "white",
        fontFamily: "Lobster-Reg",
        fontSize: 19,

        textAlign: "center",
    },
    closeCommentPupUp: {
        position: "absolute",
        bottom: 20,
        margin: 0,
        marginTop: 15,
        padding: 10,
        width: "90%",
        height: "auto",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 10,
        backgroundColor: "black",
        alignSelf: "center",
    },
    closeCommentPupUpText: {
        margin: 0,
        padding: 0,
        color: "white",
        fontFamily: "Hind-Reg",
        fontSize: 18,

        textAlign: "center",
    },

    ////////////////////////////////////////////////////////

    replyBlurView: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 0,
        padding: 0,
    },

    closeReplyPupUp: {
        position: "absolute",
        top: "6%",
        right: "3%",
        width: 30,
        height: 30,
        padding: 5,
        backgroundColor: "silver",

        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
    },
    closeReplyPupUpText: {
        margin: 0,
        padding: 0,

        alignSelf: "center",
        textAlign: "center",
    },
    replyPopUpChat: {
        position: "absolute",
        top: "13%",
        width: "87%",
        height: 600,
        backgroundColor: "black",
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "orange",
        borderRadius: 15,
    },
    replyPopUpContent: {
        margin: 0,
        marginTop: 15,
        padding: 5,
        width: "80%",
        maxHeight: 200,
        borderWidth: 1,
        borderColor: "silver",
        borderRadius: 30,

        alignSelf: "center",
    },
    replyPopUpContentText: {
        margin: 0,
        marginTop: 4,
        padding: 15,
        color: "white",
        fontFamily: "Hind-Reg",
        fontSize: 15,
        // textAlign: "center",
    },
    replyList: {
        margin: 0,
        marginTop: 10,
        marginBottom: 25,
        padding: 15,
        width: "85%",
        height: 200,
        borderLeftWidth: 1,
        // borderColor: "orange",
        // borderRadius: 20,

        alignSelf: "center",
    },
    replyListWrap: {
        margin: 0,
        padding: 5,
        height: "auto",
        justifyContent: "center",
    },
    replyListUserName: {
        margin: 0,

        marginStart: 3,
        marginBottom: 5,
        padding: 0,
        color: "white",
        fontFamily: "Hind-Reg",
        fontSize: 14,
        fontSize: 17,
        fontWeight: "bold",
        justifyContent: "center",
    },
    replyListText: {
        margin: 3,
        marginStart: 22,
        padding: 0,
        color: "white",
        fontFamily: "Hind-Reg",
        fontSize: 14,
    },
    replyInputCommentWrapper: {
        margin: 0,
        marginTop: 25,
        marginStart: 20,
        marginEnd: 20,
        padding: 0,
        width: "95%",
        height: 80,
        alignSelf: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },

    replyInputComment: {
        margin: "auto",
        marginBottom: 15,
        padding: 15,
        width: "70%",
        height: 80,
        alignSelf: "center",
        color: "white",
        fontFamily: "Hind-Reg",
        fontSize: 15,
        borderLeftWidth: 1,
        borderColor: "silver",
        backgroundColor: "#0e0d0d",
    },
    replyInputCommentBtn: {
        margin: "auto",
        marginBottom: 15,
        // padding: 1,
        width: "22%",
        height: 48,
        display: "flex",
        backgroundColor: "black",
        alignSelf: "center",
        justifyContent: "center",
        alignContent: "center",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 3,
    },
    replyInputCommentBtnText: {
        margin: "auto",
        // padding: 1,
        textAlign: "center",
        alignSelf: "center",
        justifyContent: "center",
    },

    ////////////////////////////////////////
});

export default CommentsModal;
