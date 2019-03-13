import React from 'react';
import { Separator, Text } from 'native-base';

export default (content, idx) => {
  return (
    <Separator key={idx} style={{ height: 1 }}>
      <Text
        style={{ fontSize: 0 }}
      >
        {content.label}
      </Text>
    </Separator>
  );
};
