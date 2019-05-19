import React from 'react';
import SimpleText from "../../components/SimpleText";
import {PostItemHolder} from "./styled";

const PostListItem = ({item, index}) => {
  return (
    <PostItemHolder first={index === 0}>
      <SimpleText bold white size={19}>{item.title}</SimpleText>
      <SimpleText primary size={14}>{item.content}</SimpleText>
    </PostItemHolder>
  );
};

export default PostListItem;
