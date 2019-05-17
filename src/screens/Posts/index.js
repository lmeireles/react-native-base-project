import React from 'react'
import {FlatList, Text} from 'react-native';
import {useStateValue} from "../../state";
import Container from "../../components/layout/Container";

const Posts = () => {
  const [posts, {dispatch}] = useStateValue();

  return (
    <Container dark center>
      <FlatList />
    </Container>
  )
};

Posts.navigationOptions = ({ navigation }) => ({
  title: "Posts",
});

export default Posts
