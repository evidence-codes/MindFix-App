import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Resource {
  id: string;
  type: string;
  title: string;
  thumbnail: string;
  url: string;
}

// Resource data with thumbnails and links
const resources = [
  {
    id: "1",
    type: "Video",
    title: "Mental Health for All by Involving All",
    thumbnail:
      "https://www.wellness.asu.edu/sites/default/files/styles/video_embed_wysiwyg_preview/public/video_thumbnails/yzm4gpAKrBk.jpg?itok=AQdiArKC",
    url: "https://youtu.be/yzm4gpAKrBk",
  },
  {
    id: "2",
    type: "Video",
    title: "What's So Funny About Mental Illness?",
    thumbnail:
      "https://www.wellness.asu.edu/sites/default/files/styles/video_embed_wysiwyg_preview/public/video_thumbnails/mbbMLOZjUYI.jpg?itok=lZhX1cN4",
    url: "https://youtu.be/mbbMLOZjUYI",
  },
  {
    id: "3",
    type: "Video",
    title: "What Makes a Good Life?",
    thumbnail:
      "https://www.wellness.asu.edu/sites/default/files/styles/video_embed_wysiwyg_preview/public/video_thumbnails/8KkKuTCFvzI.jpg?itok=FNFqB76S",
    url: "https://youtu.be/8KkKuTCFvzI",
  },
  {
    id: "4",
    type: "Video",
    title: "How to Be Happy Every Day: It Will Change the World",
    thumbnail:
      "https://www.wellness.asu.edu/sites/default/files/styles/video_embed_wysiwyg_preview/public/video_thumbnails/78nsxRxbf4w.jpg?itok=tuFjmVR8",
    url: "https://youtu.be/78nsxRxbf4w",
  },
  {
    id: "5",
    type: "Video",
    title: "The Secret to Being Mentally Strong",
    thumbnail:
      "https://www.wellness.asu.edu/sites/default/files/styles/video_embed_wysiwyg_preview/public/video_thumbnails/TFbv757kup4.jpg?itok=5TdFtgWk",
    url: "https://youtu.be/TFbv757kup4",
  },
  {
    id: "6",
    type: "Video",
    title: "How to Fix the Exhausted Brain",
    thumbnail:
      "https://www.wellness.asu.edu/sites/default/files/styles/video_embed_wysiwyg_preview/public/video_thumbnails/XOU2ubWkoPw.jpg?itok=3iZ_UTbS",
    url: "https://youtu.be/XOU2ubWkoPw",
  },
  {
    id: "7",
    type: "Video",
    title: "The Power of Mindfulness: What You Practice Grows Stronger",
    thumbnail:
      "https://www.wellness.asu.edu/sites/default/files/styles/video_embed_wysiwyg_preview/public/video_thumbnails/IeblJdB2-Vo.jpg?itok=8Vr5Vqj7",
    url: "https://youtu.be/IeblJdB2-Vo",
  },
  {
    id: "8",
    type: "Video",
    title: "Change Your Mindset, Change the Game",
    thumbnail:
      "https://www.wellness.asu.edu/sites/default/files/styles/video_embed_wysiwyg_preview/public/video_thumbnails/0tqq66zwa7g.jpg?itok=Tfgsghd0",
    url: "https://youtu.be/0tqq66zwa7g",
  },
  {
    id: "9",
    type: "Video",
    title: "Mind Control: How to Win the War in Your Head",
    thumbnail:
      "https://www.wellness.asu.edu/sites/default/files/styles/video_embed_wysiwyg_preview/public/video_thumbnails/rBwQZv3_OXE.jpg?itok=vTB677Ko",
    url: "https://youtu.be/rBwQZv3_OXE",
  },
  {
    id: "10",
    type: "Video",
    title: "The Surprisingly Dramatic Role of Nutrition in Mental Health",
    thumbnail:
      "https://www.wellness.asu.edu/sites/default/files/styles/video_embed_wysiwyg_preview/public/video_thumbnails/3dqXHHCc5lA.jpg?itok=TeEpKq8X",
    url: "https://youtu.be/3dqXHHCc5lA",
  },
  {
    id: "11",
    type: "Article",
    title: "Mental Health Screening Tools",
    thumbnail:
      "https://www.verywellmind.com/thmb/4FlzID-2dmMR-K0ks-Rq4PThlUg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/toolsformentalhealth-5c02a8d146e0fb00017b7a3a.png",
    url: "https://screening.mhanational.org",
  },
  {
    id: "12",
    type: "Article",
    title: "How to Cope with Anxiety",
    thumbnail:
      "https://www.wellness.asu.edu/sites/default/files/styles/video_embed_wysiwyg_preview/public/video_thumbnails/WWloIAQpMcQ.jpg?itok=DSkyEGiW",
    url: "https://youtu.be/WWloIAQpMcQ",
  },
  {
    id: "13",
    type: "Article",
    title: "Mental Health America Resources",
    thumbnail: "https://www.mhanational.org/sites/default/files/MHA%20Logo.png",
    url: "https://mhanational.org",
  },
  {
    id: "14",
    type: "Article",
    title: "The Trevor Project",
    thumbnail:
      "https://www.thetrevorproject.org/wp-content/uploads/2021/01/The_Trevor_Project_Logo-500px.png",
    url: "https://www.thetrevorproject.org",
  },
  {
    id: "15",
    type: "Article",
    title: "Stop Anxiety in Its Tracks",
    thumbnail:
      "https://cdn.verywellmind.com/thmb/ejVJ9gXV2nStNRms9XJxDeaQGV8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/reduce-stress-anxiety-right-now-4844605_v2-5ef8d37395854a78a4aa46cda5a7d7e6.png",
    url: "https://www.verywellmind.com/anxiety-4844605",
  },
  {
    id: "16",
    type: "Article",
    title: "CHADD (Children and Adults with ADHD)",
    thumbnail:
      "https://chadd.org/wp-content/uploads/2018/07/CHADD-logo-tag-2017.jpg",
    url: "https://chadd.org",
  },
  {
    id: "17",
    type: "Article",
    title: "Depression and Bipolar Support Alliance",
    thumbnail:
      "https://www.dbsalliance.org/wp-content/uploads/2022/05/dbsa-logo-300x112.png",
    url: "https://www.dbsalliance.org",
  },
  {
    id: "18",
    type: "Article",
    title: "Eating Disorder Awareness",
    thumbnail:
      "https://www.nationaleatingdisorders.org/sites/default/files/NEDA_Logo_PMS.png",
    url: "https://www.nationaleatingdisorders.org",
  },
  {
    id: "19",
    type: "Article",
    title: "Anxiety & Depression Association of America",
    thumbnail: "https://adaa.org/sites/default/files/adaa-logo-wtag.png",
    url: "https://adaa.org",
  },
  {
    id: "20",
    type: "Article",
    title: "Crisis Support and Hotlines",
    thumbnail:
      "https://www.nimh.nih.gov/sites/default/files/images/content/organization/NIMH-logo-blue-500x500.png",
    url: "https://www.nimh.nih.gov/health/find-help",
  },
];

// Fisher-Yates shuffle algorithm to randomize the list
const shuffleArray = (array: Resource[]) => {
  let shuffledArray = array.slice(); // Create a copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const ResourceItem = ({ item }: { item: Resource }) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={() => Linking.openURL(item.url)}
  >
    <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Icon
        name={item.type === "Video" ? "play-circle-outline" : "article"}
        size={24}
        color="gray"
      />
    </View>
  </TouchableOpacity>
);

const MentalHealthResources = () => {
  const [shuffledResources, setShuffledResources] = useState([] as Resource[]);

  useEffect(() => {
    setShuffledResources(shuffleArray(resources));
  }, []);

  return (
    <View style={styles.container}>
      <Text className="text-3xl font-pbold pt-24 pb-4">
        Mental Health Resources
      </Text>
      <FlatList
        data={shuffledResources}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ResourceItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
    padding: 16,
  },
  itemContainer: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    overflow: "hidden",
  },
  thumbnail: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    // fontWeight: "bold",
  },
});

export default MentalHealthResources;
