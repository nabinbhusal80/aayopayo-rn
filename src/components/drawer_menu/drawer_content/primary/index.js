import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'native-base';
import touchableElement from './touchableElement';
import staticElement from './staticElement';
import separatorElement from './separatorElement';
// import * as actions from '../../../../actions';

const contentElement = (content, idx, toggleMenu, props) => {
  switch (content.element) {
    case 'static':
      return staticElement(content, idx, props);
    case 'touchable':
      return touchableElement(content, idx, toggleMenu, props);
    case 'separator':
      return separatorElement(content, idx, props);
    default:
      return null;
  }
};

const DrawerContent = (props) => {
  // console.log('state in Drawercontent', props);
  const { contents, navigation, } = props;
  return (
    <View>
      {contents.map((content, idx) => contentElement(content, idx, navigation, props))}
    </View>
  );
};

DrawerContent.defaultProps = {
  contents: [],
};

DrawerContent.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.any),
};

export default DrawerContent;
