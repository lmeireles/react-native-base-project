import React, {useEffect} from 'react'
import {List} from './styled';
import PostListItem from './PostListItem';
import Container from "../../components/layout/Container";
import usePostsList from "../../state/Post/hooks/usePostsList";
import {useStateValue} from "../../state";

const Posts = () => {
  const [{posts}] = useStateValue();
  const setPostsList = usePostsList();

  useEffect(() => {
    posts.list.length === 0 ? setPostsList() : null
  }, []);

  return (
    <Container dark center padder={0}>
      <List
        data={posts.list}
        refreshing={posts.loading}
        onRefresh={setPostsList}
        keyExtractor={item => item.id}
        renderItem={(item) => <PostListItem {...item}/>}
      />
    </Container>
  )
};

Posts.navigationOptions = ({ navigation }) => ({
  title: "Posts",
});

export default Posts
