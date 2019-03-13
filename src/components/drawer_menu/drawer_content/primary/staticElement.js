import React from 'react';
import {
  View, ListItem, Text, Left, Right, Badge,
} from 'native-base';

export default (content, idx) => {
  return (
    <View key={content.label}>
      <ListItem style={{ marginLeft: 0 }}>
        <Left style={{ marginLeft: 10 }}>
          <Text>{content.label}</Text>
        </Left>
        <Right>
          <Badge
            primary={idx % 2 === 0}
            success={idx % 2 !== 0}
          >
            <Text>
              {`$ ${1.09}`}
            </Text>
          </Badge>
        </Right>
      </ListItem>
    </View>
  );
};
