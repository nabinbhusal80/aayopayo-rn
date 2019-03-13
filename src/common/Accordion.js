import React from 'react';
import {
  ListItem, Text, List, Body, Accordion, View, Icon,
} from 'native-base';

const renderListView = listItemText => (
  <ListItem key={listItemText}>
    <Body>
      <Text>{listItemText}</Text>
    </Body>
  </ListItem>
);

const renderContent = (content) => {
  // console.log(content);
  return (
    <List style={{ backgroundColor: '#ddecf8' }}>
      {content.content.map(item => renderListView(item))}
    </List>
  );
};


const renderHeaderHelper = (data, expended) => {
  return (
    <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row' }}>
        <Icon
          name={data.iconLeft}
          style={{
            marginRight: 10,
            marginLeft: 5,
            fontSize: 20,
            color: '#82B1FF',
          }}
        />
        <Text style={{ color: expended ? '#82B1FF' : '#000' }}>{data.title}</Text>
      </View>
      <View>
        {expended
          ? <Icon name="arrow-dropup" style={{ color: '#82B1FF' }} />
          : <Icon name="arrow-dropdown" style={{ color: '#82B1FF' }} />
      }
      </View>
    </View>
  );
};

export default dataArray => (
  <Accordion
    contentStyle={{ backgroundColor: '#757575' }}
    dataArray={dataArray}
    renderContent={renderContent}
    renderHeader={renderHeaderHelper}
  />
);
