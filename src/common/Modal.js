import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import {
  View, Header, Body, Right, Title, Text, Icon, Spinner, Button,
} from 'native-base';
import Modal from 'react-native-modal';
import { APP_COLOR } from '../config';

const renderModalContent = (children, modal) => {
  if (modal.loading) {
    return <Spinner size="large" />;
  } if (modal.error !== '') {
    return <Text style={{ fontSize: 20, color: 'red' }}>{modal.content}</Text>;
  }
  return children;
};

class CustomModal extends React.Component {

  state={ orientation: null, S_HEIGHT: null, S_WIDTH: null }

  componentDidMount() {
    this.getOrientation();
    Dimensions.addEventListener('change', () => {
      this.getOrientation();
    });
  }

  getOrientation = () =>  {
    if (Dimensions.get('window').width < Dimensions.get('window').height) {
      this.setState({ orientation: 'portrait' });
      this.setState({ S_HEIGHT: Dimensions.get('window').height, S_WIDTH: Dimensions.get('window').width });
    } else {
      this.setState({ orientation: 'landscape' });
      this.setState({ S_HEIGHT: Dimensions.get('window').height, S_WIDTH: Dimensions.get('window').width });
    }
  }

  render() {
    const { modal, updateModalValue, children, title, modalShow } = this.props;
    return (
      <Modal
        isVisible={modal[modalShow]}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        onSwipeComplete={() => updateModalValue(modalShow, false)}
        swipeDirection="down"
        style={styles.centerModal} //eslint-disable-line
      >
        <View
          style={this.state.orientation === 'portrait' ? styles(this.state).contentStylePortrait : styles(this.state).contentStyleLandScape} // eslint-disable-line
        >
          <Header style={{ backgroundColor: APP_COLOR, height: 40 }}>
            <Body>
              <Title><Text style={{ color: '#fff', fontSize: 15 }}>{title}</Text></Title>
            </Body>
            <Right>
              <Button transparent onPress={() => updateModalValue(modalShow, false)}>
                <Icon
                  name="close"
                  style={{ color: '#fff' }}
                />
              </Button>
            </Right>
          </Header>
          {renderModalContent(children, modal)}
        </View>
      </Modal>
    );
  }
}

const styles = state => StyleSheet.create({
  centerModal: {
    // justifyContent: 'center',
    // margin: 0,
    // alignItems: 'center',
  },
  contentStylePortrait: {
    maxHeight: state.S_HEIGHT * 0.5,
    minHeight: 100,
    margin: 0,
    width: state.S_WIDTH * 0.9,
    backgroundColor: '#fff',
  },
  contentStyleLandScape: {
    height: state.S_HEIGHT * 0.9,
    margin: 0,
    minHeight: 100,
    width: state.S_WIDTH * 0.90,
    backgroundColor: '#fff',
  },
});

CustomModal.propTypes = {
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  updateModalValue: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  modalShow: PropTypes.string.isRequired,
};
export default CustomModal;
