import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import InstaStory from "react-native-insta-story";
import ProfilePic from "../assets/images/pfp.png";

const Story = () => {
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
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    marginTop: 10,
    marginBottom: 10,
    height: "15%",
  },
});