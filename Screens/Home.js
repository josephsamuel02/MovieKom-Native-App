import React from "react";
import { Picker } from "@react-native-picker/picker";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    SafeAreaView,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
const HomeMoviesContent = [
    {
        id: 1,
        title: "Quick Silver",
        poster: "https://via.placeholder.com/150",
        rating: 2,
    },
    {
        id: 2,
        title: "The batman",
        poster: "https://ipsumimage.appspot.com/640x360",
        rating: 1,
    },
    {
        id: 3,
        title: "Averter: The last Air Bender",
        poster: "https://ipsumimage.appspot.com/640x360",
        rating: 3,
    },
    {
        id: 4,
        title: "Moon Fall",
        poster: "https://ipsumimage.appspot.com/640x360",
        rating: 2,
    },
];

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.ScrollView}
            >
                <View style={styles.QuicklistsBox}>
                    <Text style={styles.QuicklistHeader}>New Updates</Text>

                    <View style={styles.Quicklist}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.QuicklistItem}
                        >
                            <Image
                                style={styles.QuicklistImage}
                                source={require("../assets/Images/pexels-juan-c-palacios-3585607.jpg")}
                            />
                            <View style={styles.QuicklistTitleBox}>
                                <Text style={styles.QuicklistTitle}>
                                    Moon Knight
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.QuicklistItem}
                        >
                            <Image
                                style={styles.QuicklistImage}
                                source={require("../assets/Images/pexels-juan-c-palacios-3585607.jpg")}
                            />
                            <View style={styles.QuicklistTitleBox}>
                                <Text style={styles.QuicklistTitle}>
                                    The Adventures Moon Knight
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.QuicklistItem}
                        >
                            <Image
                                style={styles.QuicklistImage}
                                source={require("../assets/Images/pexels-juan-c-palacios-3585607.jpg")}
                            />
                            <View style={styles.QuicklistTitleBox}>
                                <Text style={styles.QuicklistTitle}>
                                    Eternals
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.QuicklistItem}
                        >
                            <Image
                                style={styles.QuicklistImage}
                                source={require("../assets/Images/pexels-juan-c-palacios-3585607.jpg")}
                            />
                            <View style={styles.QuicklistTitleBox}>
                                <Text style={styles.QuicklistTitle}>
                                    Avengers End Game
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.QuicklistHeader}>Most Recomended</Text>

                    <View style={styles.Quicklist}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.QuicklistItem}
                        >
                            <Image
                                style={styles.QuicklistImage}
                                source={require("../assets/Images/pexels-juan-c-palacios-3585607.jpg")}
                            />
                            <View style={styles.QuicklistTitleBox}>
                                <Text style={styles.QuicklistTitle}>
                                    Sonic The Eedghog
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.QuicklistItem}
                        >
                            <Image
                                style={styles.QuicklistImage}
                                source={require("../assets/Images/pexels-juan-c-palacios-3585607.jpg")}
                            />
                            <View style={styles.QuicklistTitleBox}>
                                <Text style={styles.QuicklistTitle}>
                                    The Eternals
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.QuicklistItem}
                        >
                            <Image
                                style={styles.QuicklistImage}
                                source={require("../assets/Images/pexels-juan-c-palacios-3585607.jpg")}
                            />
                            <View style={styles.QuicklistTitleBox}>
                                <Text style={styles.QuicklistTitle}>
                                    Adventures Of Tintin
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.QuicklistItem}
                        >
                            <Image
                                style={styles.QuicklistImage}
                                source={require("../assets/Images/pexels-juan-c-palacios-3585607.jpg")}
                            />
                            <View style={styles.QuicklistTitleBox}>
                                <Text style={styles.QuicklistTitle}>
                                    Whatch Out
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <SafeAreaView style={styles.SafeAreaView}>
                    <View style={styles.PickerBorderStyle}>
                        <Picker
                            style={styles.PickerStyle}
                            // selectedValue={selectedValue}
                            onValueChange={(itemValue, itemIndex) =>
                                console.log(itemValue + itemIndex)
                            }
                        >
                            <Picker.Item label="Latest Update" value="newest" />
                            <Picker.Item label="Movie Title" value="name" />
                            <Picker.Item label="Top Rated" value="toprated" />
                        </Picker>
                    </View>
                    {HomeMoviesContent
                        ? HomeMoviesContent.map((item) => (
                              <View style={styles.ContentBox} key={item.id}>
                                  <Image
                                      source={require("../assets/Images/pexels-juan-c-palacios-3585607.jpg")}
                                      style={styles.ContentBoxPosters}
                                      // source={{ uri: item.poster }}
                                  />
                                  <TouchableOpacity
                                      style={styles.MovieTitleBox}
                                      onPress={() =>
                                          navigation.navigate(
                                              "MovieDetails",
                                              item
                                          )
                                      }
                                  >
                                      <Text style={styles.MovieTitle}>
                                          {item.title}
                                      </Text>
                                  </TouchableOpacity>
                                  <TouchableWithoutFeedback
                                      style={styles.RatingsBox}
                                  >
                                      <Text style={styles.RatingsItem}>
                                          {item.rating == 1 ? (
                                              <MaterialIcons
                                                  name="star-rate"
                                                  color="gold"
                                                  size={24}
                                              />
                                          ) : null}
                                          {item.rating == 2 ? (
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
                                          {item.rating == 3 ? (
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
                                  </TouchableWithoutFeedback>
                              </View>
                          ))
                        : null}

                    <View style={styles.pageNumbersBox}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.pageNumber}
                        >
                            <Text style={styles.Number}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.pageNumber}
                        >
                            <Text style={styles.Number}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.pageNumber}
                        >
                            <Text style={styles.Number}>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.pageNumber}
                        >
                            <Text style={styles.Number}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.pageNumber}
                        >
                            <Text style={styles.Number}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.pageNumber}
                        >
                            <Text style={styles.Number}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0e0e0f",

        justifyContent: "center",
    },

    ScrollView: {
        margin: 0,
        padding: 0,
        // width: "100%",
        // height: "auto",
        // backgroundColor: "white",
    },
    QuicklistsBox: {
        margin: 5,
        marginTop: 20,
        padding: 1,
        backgroundColor: "#0e0e0f",
    },
    QuicklistHeader: {
        margin: 20,

        fontFamily: "Lobster-Reg",
        fontSize: 22,
        color: "orange",
        justifyContent: "center",
        textAlign: "center",
    },
    Quicklist: {
        margin: 0,
        padding: 5,
        maxWidth: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#0e0e0f",
        justifyContent: "center",
    },
    QuicklistItem: {
        margin: "auto",
        width: 100,
        height: "auto",
        display: "flex",
    },
    QuicklistImage: {
        margin: 0,
        width: 90,
        height: 130,
        alignSelf: "center",
    },
    QuicklistTitleBox: {
        margin: 0,
        padding: "auto",
        width: "100%",
        height: 80,
        color: "white",
        textAlign: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    QuicklistTitle: {
        // fontFamily: "Courgette-Reg",
        fontFamily: "Hind-Reg",
        // fontFamily: "Lobster-Reg",
        fontSize: 13,
        // fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        textAlign: "center",
    },
    SafeAreaView: {
        margin: 20,
        marginTop: 70,
        padding: 0,
    },
    ContentBox: {
        margin: 0,
        marginBottom: 89,
        paddingBottom: 15,

        borderBottomEndRadius: 2,
        borderBottomStartRadius: 2,
        backgroundColor: "dimblackgray",
    },
    ContentBoxPosters: {
        margin: 0,
        padding: 0,
        width: "100%",
        height: 450,
    },
    MovieTitleBox: {
        margin: "auto",
        marginTop: 5,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    MovieTitle: {
        fontFamily: "Courgette-Reg",
        fontWeight: "bold",
        fontSize: 22,
        color: "white",
        textAlign: "center",
    },
    RatingsBox: {
        margin: "auto",
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    RatingsItem: {
        marginEnd: 20,
        fontFamily: "Courgette-Reg",
        fontWeight: "bold",
        fontSize: 19,
        color: "black",
        textAlign: "center",
    },
    PickerBorderStyle: {
        margin: 30,

        height: 50,
        width: 200,
        marginStart: 10,
        borderWidth: 2,
        borderColor: "white",
        backgroundColor: "#0e0e0f",
        borderRadius: 10,
    },
    PickerStyle: {
        margin: 0,
        height: 50,
        color: "white",
        fontFamily: "Hind-Reg",
        fontSize: 17,
        textAlign: "center",

        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "black",
        borderRadius: 10,
    },
    pageNumbersBox: {
        margin: 10,
        // marginStart: 20,
        // marginEnd: 20,
        padding: 15,
        display: "flex",
        flexDirection: "row",
        width: "auto",
        maxHeight: 70,
        backgroundColor: "black",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 7,
    },
    pageNumber: {
        margin: "auto",
        padding: 5,
        display: "flex",
        flexDirection: "row",

        alignContent: "center",
    },
    Number: {
        margin: "auto",
        padding: 5,
        display: "flex",

        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "Courgette-Reg",
        alignContent: "center",
        color: "orange",
    },
});

export default Home;
