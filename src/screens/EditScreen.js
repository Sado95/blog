import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
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

export default EditScreen;
