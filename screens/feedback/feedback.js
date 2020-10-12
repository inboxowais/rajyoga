import React, {useState} from 'react';
import {StyleSheet, _View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Text, TextInput} from 'react-native';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from './../../components/common/header/header';

export default function Feedback(props) {
  const [state, setState] = useState({
    fullName: '',
    fullNameIsFocused: false,
    email: '',
    emailIsFocused: false,
    phoneNumber: '',
    phoneNumberIsFocused: false,
    country: '',
    countryIsFocused: false,
    state: '',
    stateIsFocused: false,
    city: '',
    cityIsFocused: false,
  });

  const onFocus = (name) => {
    setState({...state, [name]: true});
  };

  const onBlur = (name) => {
    setState({...state, [name]: false});
  };

  const onChangeText = (event, value) => {
    setState({...state, [value]: event});
  };

  const onSubmit = () => {
    props.postContact({
      full_name: state.fullName,
    });
  };

  console.log(props.contactResult);

  return (
    <View>
      <Header title="Feedback" {...props} />
      <View style={{padding: 20}}>
        <ScrollView>
          <View>
            <Text style={{color: state.fullNameIsFocused ? '#25D366' : null}}>
              Full name
            </Text>
            <TextInput
              onChangeText={(event) => onChangeText(event, 'fullName')}
              onFocus={() => onFocus('fullNameIsFocused')}
              onBlur={() => onBlur('fullNameIsFocused')}
              style={
                state.fullNameIsFocused
                  ? styles.textInputFocused
                  : styles.textInput
              }
            />
          </View>
          <View style={{paddingTop: 15}}>
            <Text style={{color: state.emailIsFocused ? '#25D366' : null}}>
              Email
            </Text>
            <TextInput
              onChangeText={(event) => onChangeText(event, 'email')}
              onFocus={() => onFocus('emailIsFocused')}
              onBlur={() => onBlur('emailIsFocused')}
              style={
                state.emailIsFocused
                  ? styles.textInputFocused
                  : styles.textInput
              }
            />
          </View>
          <View style={{paddingTop: 15}}>
            <Text
              style={{color: state.phoneNumberIsFocused ? '#25D366' : null}}>
              Phone Number
            </Text>
            <TextInput
              onChangeText={(event) => onChangeText(event, 'phoneNumber')}
              onFocus={() => onFocus('phoneNumberIsFocused')}
              onBlur={() => onBlur('phoneNumberIsFocused')}
              style={
                state.phoneNumberIsFocused
                  ? styles.textInputFocused
                  : styles.textInput
              }
            />
          </View>
          <View style={{paddingTop: 15}}>
            <Text style={{color: state.countryIsFocused ? '#25D366' : null}}>
              Country
            </Text>
            <TextInput
              onChangeText={(event) => onChangeText(event, 'country')}
              onFocus={() => onFocus('countryIsFocused')}
              onBlur={() => onBlur('countryIsFocused')}
              style={
                state.countryIsFocused
                  ? styles.textInputFocused
                  : styles.textInput
              }
            />
          </View>
          <View style={{paddingTop: 15}}>
            <Text style={{color: state.stateIsFocused ? '#25D366' : null}}>
              State
            </Text>
            <TextInput
              onChangeText={(event) => onChangeText(event, 'state')}
              onFocus={() => onFocus('stateIsFocused')}
              onBlur={() => onBlur('stateIsFocused')}
              style={
                state.stateIsFocused
                  ? styles.textInputFocused
                  : styles.textInput
              }
            />
          </View>
          <View style={{paddingTop: 15}}>
            <Text style={{color: state.cityIsFocused ? '#25D366' : null}}>
              City
            </Text>
            <TextInput
              onChangeText={(event) => onChangeText(event, 'city')}
              onFocus={() => onFocus('cityIsFocused')}
              onBlur={() => onBlur('cityIsFocused')}
              style={
                state.cityIsFocused ? styles.textInputFocused : styles.textInput
              }
            />
          </View>
          <TouchableOpacity
            onPress={onSubmit}
            style={{
              width: '100%',
              justifyContent: 'center',
              flexDirection: 'row',
              height: 60,
              marginTop: 10,
              alignItems: 'center',
              backgroundColor: '#25D366',
              borderRadius: 10,
            }}>
            <View>
              <Text
                style={{color: '#ffffff', fontWeight: 'bold', fontSize: 25}}>
                Sent Message
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    height: 40,
  },
  textInputFocused: {
    borderBottomColor: '#25D366',
    borderBottomWidth: 3,
    height: 40,
  },
});
