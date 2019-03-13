import React, { Component } from 'react';
import { Content } from 'native-base';
import Table from '../../../common/Table';

const tempDataArray = [{
  preview: 'test',
  product_name: 'Comming soon',
  bid_amount: '500/-',
  date: '2018-5-20',
  time: '98010174961',
  end_at: '2018-3-15',
  action: 'test',
},
{
  preview: 'test',
  product_name: 'Comming soon',
  bid_amount: '500/-',
  date: '2018-5-20',
  time: '98010174961',
  end_at: '2018-3-15',
  action: 'test',
},
{
  preview: 'test',
  product_name: 'Comming soon',
  bid_amount: '500/-',
  date: '2018-5-20',
  time: '98010174961',
  end_at: '2018-3-15',
  action: 'test',
},
{
  preview: 'test',
  product_name: 'Comming soon',
  bid_amount: '500/-',
  date: '2018-5-20',
  time: '98010174961',
  end_at: '2018-3-15',
  action: 'test',
}];

const lableArray = ['Preview: ', 'Product Name: ', 'Bid Amount: ', 'Date(NPT): ', 'Time(NPT): ', 'End At: ', 'Action: '];

const dataArray = tempDataArray.map(data => Object.values(data).map((item, idx) => (
  { value: item, label: lableArray[idx] }
)));

class MyBids extends Component {
  state={};

  render() {
    return (
      <Content>
        <Table dataArray={dataArray} />
      </Content>
    );
  }
}
export default MyBids;
