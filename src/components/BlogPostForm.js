import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />

      <TouchableOpacity style={styles.btn}>
        <Text
          style={{ textAlign: "center" }}
          onPress={() => onSubmit(title, content)}
        >
          SAVE BLOG POST
        </Text>
      </TouchableOpacity>
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1.5,
    borderColor: "gray",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  container: {
    marginHorizontal: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 5,
  },
  btn: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "lightgray",
    borderRadius: 5,
  },
});

export default BlogPostForm;
