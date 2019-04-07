import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { View, Text, Spinner } from 'native-base';
import ProductDetails from './ProductDetails';

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

class Content extends Component {
  state={ loading: true };

  async componentWillMount() {
    const { fetchProductDetails, id } = this.props;
    await fetchProductDetails(id);
    this.setState({ loading: false });
  }

  render() {
    const { main } = this.props;
    const { loading } = this.state;
    if (loading) {
      return (
        <View style={styles.beforeDataFetchSytyle}>
          <Spinner size="large" />
          <Text>loading....</Text>
        </View>
      );
    }
    if (main.error !== '' && main.error) {
      return (
        <View style={styles.beforeDataFetchSytyle}>
          <Text style={{ color: 'red' }}>{` Error: ${main.error}`}</Text>
        </View>
      );
    }
    return (
      !loading && <ProductDetails {...this.props} />
    );
  }
}

export default Content;
Content.propTypes = {
  fetchProductDetails: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  main: PropTypes.objectOf(PropTypes.any).isRequired,
};
