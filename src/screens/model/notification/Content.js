import React from 'react';
import { TouchableOpacity, ScrollView, Alert } from 'react-native';
import {
  View, Text,
} from 'native-base';
import PropTypes from 'prop-types';

const renderNotification = (notifications, idx) => (
  <TouchableOpacity
    onPress={() => Alert.alert('navigate to product details if id is not 0')}
    key={idx}
    style={{
      padding: 10,
      backgroundColor: idx % 2 !== 0 ? '#fff' : '#E3F2FD',
      borderBottomWidth: 1,
      borderBottomColor: '#757575',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        {notifications.header}
      </Text>
      <Text>{notifications.body}</Text>
    </View>
  </TouchableOpacity>
);

const CustomContent = ({ modal }) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    {modal.notificationContent.map((notification, idx) => renderNotification(notification, idx, modal))}
  </ScrollView>
);

CustomContent.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
}
export default CustomContent;
