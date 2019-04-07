import React from 'react';
import {
  View, Text, Button, Spinner,
} from 'native-base';
import PropTypes from 'prop-types';
import Input from '../../../common/Input';

const CustomContent = ({ main, modal, registerForm, updateFormValue, doBidHandler, updateModalValue }) => (
  <View>
    <View style={{ padding: 10, borderBottomColor: '#f5f5f5', borderWidth: 1 }}>
      <Text style={{ color: '#000' }}>
        {`You have: ${main.userCoins} Coins`}
      </Text>
      <Text style={{ fontWeight: 'bold' }}>{`Minumum bid amount: ${main.productDetails.mincredit}`}</Text>
      <Text style={{ color: '#757575', fontSize: 15 }}>Place the amout you want to bid.</Text>
      <View style={{ width: 200, marginTop: 20 }}>
        <Input registerForm={registerForm} updateFormValue={updateFormValue} content={{ label: 'Bid Price', value: 'bidPrice', keyboardType: 'numeric' }} />
      </View>
      <View style={{ height: 45, marginTop: 5, marginBottom: 5 }}>
        {modal.bidLoading && <Spinner success size="small" />}
        {modal.bidError !== '' && <Text style={{ color: 'red' }}>{modal.bidError}</Text>}
        {modal.addBidSuccess !== '' && <Text style={{ color: 'green' }}>{modal.addBidSuccess}</Text>}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Button
          onPress={() => {
            doBidHandler();
          }}
          success
          style={{ height: 30, alignSelf: 'center' }}
        >
          <Text>Bid Now</Text>
        </Button>
        <Button
          onPress={() => updateModalValue('modalPlaynowShow', false)}
          warning
          style={{ height: 30, alignSelf: 'center', margin: 10 }}
        >
          <Text>close</Text>
        </Button>
      </View>
    </View>
  </View>
);

CustomContent.propTypes = {
  main: PropTypes.objectOf(PropTypes.any).isRequired,
  modal: PropTypes.objectOf(PropTypes.any).isRequired,
  registerForm: PropTypes.objectOf(PropTypes.any).isRequired,
  updateFormValue: PropTypes.func.isRequired,
  doBidHandler: PropTypes.func.isRequired,
  updateModalValue: PropTypes.func.isRequired,
};
export default CustomContent;
