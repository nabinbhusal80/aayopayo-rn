import React from 'react';
import PropTypes from 'prop-types';
import { View, CheckBox, Text } from 'native-base';

const CustomCheckBox = ({
  content, navigation, registerForm, updateFormValue, checkBoxPressHandler,
}) => (
  <View style={{ flexDirection: 'row', marginTop: 20 }}>
    <CheckBox checked={registerForm[content.value]} style={{ margin: 10 }} onPress={() => checkBoxPressHandler(content, navigation)} />
    <View>
      <Text style={{ margin: 10, flexGrow: 1 }}>
        { content.nonClickableText }
        <Text style={{ color: 'blue', marginRight: 5 }} onPress={() => navigation.navigate('TermsAndPrivacy')}>
          {content.clickableText}
        </Text>
      </Text>
    </View>
  </View>
);
CustomCheckBox.propTypes = {
  content: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  registerForm: PropTypes.objectOf(PropTypes.any).isRequired,
  updateFormValue: PropTypes.func.isRequired,
}

export default CustomCheckBox;
