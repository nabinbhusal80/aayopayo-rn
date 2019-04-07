import React from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import {
  View, Text,
} from 'native-base';
import PropTypes from 'prop-types';

const renderNotification = (notifications, idx, updateMainValue, updateModalValue, navigation) => (
  <TouchableOpacity
    onPress={() => {
      if (notifications.productId !== '0') {
        navigation.navigate('ProductDetails', { id: notifications.productId });
        updateModalValue('modalNotificationShow', false);
      }
    }}
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

const CustomContent = ({ modal, updateMainValue, updateModalValue, navigation }) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    {modal.notificationContent.map((notification, idx) => renderNotification(notification, idx, updateMainValue, updateModalValue, navigation))}
  </ScrollView>
);

CustomContent.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMainValue: PropTypes.func.isRequired,
  updateModalValue: PropTypes.func.isRequired,
};
export default CustomContent;
