import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import InstaStory from "react-native-insta-story";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

const Moments = () => {
  const data = [
    {
      user_id: 1,
      user_image:
        "https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg",
      user_name: "Ahmet Çağlar Durmuş",
      stories: [
        {
          story_id: 1,
          story_image:
            "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 1 swiped"),
        },
        {
          story_id: 2,
          story_image:
            "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
        },
      ],
    },
    {
      user_id: 2,
      user_image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      user_name: "Test User",
      stories: [
        {
          story_id: 1,
          story_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 1 swiped"),
        },
        {
          story_id: 2,
          story_image:
            "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 2 swiped"),
        },
      ],
    },
    {
      user_id: 3,
      user_image:
        "https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg",
      user_name: "Patrick Abel",
      stories: [
        {
          story_id: 1,
          story_image:
            "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 1 swiped"),
        },
        {
          story_id: 2,
          story_image:
            "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
        },
      ],
    },
    {
      user_id: 4,
      user_image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      user_name: "Tapiwa Kundishora",
      stories: [
        {
          story_id: 1,
          story_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 1 swiped"),
        },
        {
          story_id: 2,
          story_image:
            "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 2 swiped"),
        },
      ],
    },
    {
      user_id: 5,
      user_image:
        "https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg",
      user_name: "Ahmet Çağlar Durmuş",
      stories: [
        {
          story_id: 1,
          story_image:
            "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 1 swiped"),
        },
        {
          story_id: 2,
          story_image:
            "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
        },
      ],
    },
    {
      user_id: 6,
      user_image:
        "https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg",
      user_name: "Ahmet Çağlar Durmuş",
      stories: [
        {
          story_id: 1,
          story_image:
            "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 1 swiped"),
        },
        {
          story_id: 2,
          story_image:
            "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
        },
      ],
    },
  ];

  const postInfo = [
    {
      postTitle: "cowboys",
      postPersonImage: require("../images/pfp.png"),
      postImage: require("../FeedImages/cowboys.png"),
      likes: 765,
      isLiked: false,
    },
    {
      postTitle: "common",
      postPersonImage: require("../images/pfp.png"),
      postImage: require("../FeedImages/common.png"),
      likes: 345,
      isLiked: false,
    },
    {
      postTitle: "pdt",
      postPersonImage: require("../images/pfp.png"),
      postImage: require("../FeedImages/pdt.png"),
      likes: 734,
      isLiked: false,
    },
    {
      postTitle: "papi",
      postPersonImage: require("../images/pfp.png"),
      postImage: require("../FeedImages/papi.png"),
      likes: 875,
      isLiked: false,
    },
  ];

  return (
    <View style={styles.container}>
      <InstaStory
        data={data}
        duration={10}
        onStart={(item) => console.log(item)}
        onClose={(item) => console.log("close: ", item)}
        customSwipeUpComponent={
          <View>
            <Text>Swipe</Text>
          </View>
        }
        style={{ marginTop: 30 }}
      />

      <ScrollView style={{ marginBottom: 75 }}>
        <View>
          {postInfo.map((data, index) => {
            const [like, setLike] = useState(data.isLiked);
            return (
              <View
                key={index}
                style={{
                  paddingBottom: 10,
                  borderBottomColor: "gray",
                  borderBottomWidth: 0.1,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 15,
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={data.postPersonImage}
                      style={{ width: 40, height: 40, borderRadius: 100 }}
                    />
                    <View style={{ paddingLeft: 5 }}>
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        {data.postTitle}
                      </Text>
                    </View>
                  </View>
                  <Feather name="more-vertical" style={{ fontSize: 20 }} />
                </View>
                <View
                  style={{
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={data.postImage}
                    style={{ width: "100%", height: 400 }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 12,
                    paddingVertical: 15,
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => setLike(!like)}>
                      <AntDesign
                        name={like ? "heart" : "hearto"}
                        style={{
                          paddingRight: 10,
                          fontSize: 20,
                          color: like ? "red" : "black",
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Ionic
                        name="ios-chatbubble-outline"
                        style={{ fontSize: 20, paddingRight: 10 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Feather name="navigation" style={{ fontSize: 20 }} />
                    </TouchableOpacity>
                  </View>
                  <Feather name="bookmark" style={{ fontSize: 20 }} />
                </View>
                <View style={{ paddingHorizontal: 15 }}>
                  <Text>
                    Liked by {like ? "you and" : ""}{" "}
                    {like ? data.likes + 1 : data.likes} others
                  </Text>
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 14,
                      paddingVertical: 2,
                    }}
                  >
                    If enjoy the video ! Please like and Subscribe :)
                  </Text>
                  <Text style={{ opacity: 0.4, paddingVertical: 2 }}>
                    View all comments
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Image
                        source={data.postPersonImage}
                        style={{
                          width: 25,
                          height: 25,
                          borderRadius: 100,
                          backgroundColor: "orange",
                          marginRight: 10,
                        }}
                      />
                      <TextInput
                        placeholder="Add a comment "
                        style={{ opacity: 0.5 }}
                      />
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Entypo
                        name="emoji-happy"
                        style={{
                          fontSize: 15,
                          color: "lightgreen",
                          marginRight: 10,
                        }}
                      />
                      <Entypo
                        name="emoji-neutral"
                        style={{ fontSize: 15, color: "pink", marginRight: 10 }}
                      />
                      <Entypo
                        name="emoji-sad"
                        style={{ fontSize: 15, color: "red" }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Moments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
