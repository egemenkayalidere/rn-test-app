import React from 'react';
import {connect} from 'react-redux';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {addNewUser, setUsers} from '../redux/app-redux/actions';

const ItemContainer = ({id, children}) => {
  return (
    <View
      key={id}
      style={{
        width: '50%',
        height: 100,
        backgroundColor: 'orange',
        padding: 4,
      }}>
      {children}
    </View>
  );
};

const baseUrl = 'https://dummyjson.com/users';

class HomeScreen extends React.Component {
  getUsers = () => {
    axios({
      method: 'get',
      url: `${baseUrl}`,
    }).then(response => {
      const {users} = response?.data;
      this.props.setUsers(users);
    });
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const {users} = this.props;
    return (
      <SafeAreaView>
        <ScrollView
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'red',
          }}
          contentContainerStyle={{
            backgroundColor: 'blue',
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}>
          {users
            ?.sort((x, y) => {
              return y.id - x.id;
            })
            .map((item, key) => {
              const {firstName, age, image} = item;
              return (
                <ItemContainer key={key} id={key}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('DetailsScreen', {
                        user: item,
                      })
                    }
                    style={{
                      backgroundColor: 'red',
                      width: '100%',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={{uri: image}}
                      style={{width: '100%', height: '100%'}}
                      resizeMode="cover"
                    />
                    <View
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text>{`${firstName}, ${age}`}</Text>
                    </View>
                  </TouchableOpacity>
                </ItemContainer>
              );
            })}
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            this.props.addNewUser({
              id: 999,
              firstName: 'Egemen',
              lastName: 'Kayalidere',
              age: 50,
              image: 'https://robohash.org/hicveldicta.png',
              company: {
                address: {},
                department: 'Marketing',
                name: "Blanda-O'Keefe",
                title: 'Help Desk Operator',
              },
            });
          }}
          style={{
            backgroundColor: 'blue',
            width: 300,
            height: 50,
            position: 'absolute',
            bottom: 70,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Add +</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.AppReducer.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUsers: data => {
      dispatch(setUsers(data));
    },
    addNewUser: data => {
      dispatch(addNewUser(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
