import React from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, Text, View} from 'react-native';

class DetailsScreen extends React.Component {
  render() {
    const {params} = this.props.route;
    return (
      <SafeAreaView>
        <View style={{width: '100%', height: 200, backgroundColor: 'blue'}}>
          <Text>{params.user?.firstName}</Text>
          <Text>{params.user?.lastName}</Text>
          <Text>{params.user?.age}</Text>
          <Text>{params.user?.company?.name}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);
