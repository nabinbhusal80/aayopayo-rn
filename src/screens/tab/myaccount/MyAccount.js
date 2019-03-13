import React, { Component } from 'react';
import { View, Content } from 'native-base';
import Table from '../../../common/Table';

const tempDataArray = [{
  full_name: 'bhagya',
  email: 'bhagyasah4u@gmail.com',
  gender: 'Male',
  state: 'State 2',
  phone_number: '98010174961',
  dob: '2018-3-15',
}];

const lableArray = ['Account Name: ', 'Account Email: ', 'Gender: ', 'Mobile Number: ', 'State: ', 'DOB: '];

const dataArray = tempDataArray.map(data => Object.values(data).map((item, idx) => (
  { value: item, label: lableArray[idx] }
)));

class MyAccount extends Component {
  state={};

  render() {
    return (
      <Content>
        <View style={{ marginTop: 20, borderWidth: 0.5, borderColor: '#000' }}>
          <Table dataArray={dataArray} />
        </View>
      </Content>
    );
  }
}
export default MyAccount;
