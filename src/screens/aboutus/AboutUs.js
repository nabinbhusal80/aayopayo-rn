import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from 'native-base';
import renderScreenHeader from '../../common/ScreenHeader';
import Accordion from '../../common/Accordion';


const dataArray = [
  {
    title: 'About Aayopayo',
    content: ['Aaayo payo content goes here'],
  },
  {
    title: 'Values, Vision & Mission',
    content: ['Vlues vision mission content goes here'],
  },
  {
    title: 'Why Aayopayo',
    content: ['why content goes here'],
  },
  {
    title: 'Our Services',
    content: ['our service goes here'],
  },
];

class AboutUs extends Component {
  static navigationOptions = {
    header: null,
  }

  state={};

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        {renderScreenHeader('About Us', navigation)}
        <Content>
          {Accordion(dataArray)}
        </Content>
      </Container>
    );
  }
}

AboutUs.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AboutUs;
