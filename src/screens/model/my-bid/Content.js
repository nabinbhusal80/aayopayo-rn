import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import {
  Text, Thumbnail, Container, Content,
} from 'native-base';

const bidRenderHelper = (bid, idx, updateMainValue) => {
  const backGroundColor = idx % 2 === 0 ? '#f5f5f5' : '#fff';
  return (
    <TouchableOpacity onPress={() => updateMainValue('showProductDetails', bid.productid)} key={idx} style={{ backgroundColor: backGroundColor, padding: 10 }}>
      <Thumbnail source={{ uri: bid.image }} />
      <Text style={{ fontWeight: 'bold' }}>
       Product Name:
        <Text style={{ fontWeight: '100' }}>{` ${bid.name}`}</Text>
      </Text>
      <Text style={{ fontWeight: 'bold' }}>
        Bid Amount:
        <Text style={{ fontWeight: '100' }}>{` ${bid.amount}`}</Text>
      </Text>
      <Text style={{ fontWeight: 'bold' }}>
        Date:
        <Text style={{ fontWeight: '100' }}>{` ${bid.date}`}</Text>
      </Text>
      <Text style={{ fontWeight: 'bold' }}>
        Time:
        <Text style={{ fontWeight: '100' }}>{` ${bid.time}`}</Text>
      </Text>
      <Text style={{ fontWeight: 'bold' }}>
        End At:
        <Text style={{ fontWeight: '100' }}>{` ${bid.end_date}  ${bid.end_time}`}</Text>
      </Text>
    </TouchableOpacity>
  );
};

const CustomContent = ({ modal, updateMainValue }) => {
  const { myBidContent } = modal;
  return (
    <Container>
      <Content>
        {myBidContent.map((bid, idx) => bidRenderHelper(bid, idx, updateMainValue))}
      </Content>
    </Container>
  );
};

export default CustomContent;
CustomContent.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
};
