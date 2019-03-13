import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import {
  Container, Content, Spinner,
} from 'native-base';
import { DrawerHeader, DrawerContent } from '../../components/drawer_menu';
import { header, contents } from './PrimaryStructure';

class MenuContent extends Component {
  state ={};

  render() {
    const { registerForm } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <DrawerHeader header={header} {...this.props} />
          <Content>
            <DrawerContent contents={contents(registerForm.loginStatus)} {...this.props} />
          </Content>
        </Container>
        {registerForm.asyncLoading && <Spinner size="large" />}
      </SafeAreaView>
    );
  }
}

export default MenuContent;
