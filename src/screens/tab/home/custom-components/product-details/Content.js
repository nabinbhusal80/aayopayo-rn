import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Spinner } from 'native-base';
import ProductDetails from './ProductDetails';

class Content extends Component {
  state={ loading: true };

  async componentDidMount() {
    const { fetchProductDetails, main } = this.props;
    await fetchProductDetails(main.showProductDetails);
    this.setState({ loading: false });
  }

  render() {
    const { main } = this.props;
    // console.log('sotre value in Prodectun details content', main);
    if (main.loading) {
      return (
        <View style={styles.beforeDataFetchSytyle}>
          <Spinner size="large" />
          <Text>loading....</Text>
        </View>
      );
    }
    if (main.error) {
      return (
        <View style={styles.beforeDataFetchSytyle}>
          <Text style={{ color: 'red' }}>{main.error}</Text>
        </View>
      );
    }
    return (
      !this.state.loading && <ProductDetails {...this.props} />
    );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
  },
  beforeDataFetchSytyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Content;

