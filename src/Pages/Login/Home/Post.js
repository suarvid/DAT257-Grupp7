import React from 'react';
import { List } from 'antd';

const Post = props => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={props.data}
      renderItem={item => (
        <List.Item
          key={item.title}
        >
          <List.Item.Meta
            title={<a href={`/post/${item.id}`}> {item.title} </a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default Post;
