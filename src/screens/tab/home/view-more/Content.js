import React from 'react';
import { View, ScrollView } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config';
import ClosedCard from '../closed-product/ClosedCard';
import UpComingCard from '../upcoming/UpComingCard';
import LiveCard from '../live/LiveCard';

const cardRederHelper = (card, product, idx, props) => {
  switch (card) {
    case 'closedProduct':
      return <ClosedCard key={idx} product={product} {...props} />;
    case 'liveProduct':
      return <LiveCard key={idx} product={product} {...props} />;
    case 'upcomingProduct':
      return <UpComingCard key={idx} product={product} {...props} />;
    default:
      return null;
  }
};

export default (props) => {
  const { main, modal } = props;
  return (
    <View style={{ flex: 1, width: SCREEN_WIDTH, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={{
          flexDirection: 'row',
          width: SCREEN_WIDTH,
          flexWrap: 'wrap',
          backgroundColor: '#f5f5f5',
        }}
      >
        {
          main[modal.viewMoreContent].map((product, idx) => cardRederHelper(modal.viewMoreContent, product, idx, props))
        }
      </ScrollView>
    </View>
  );
};
