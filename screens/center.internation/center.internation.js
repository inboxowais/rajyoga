import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import Header from './../../components/common/header/header';

export default function CenterInternational(props) {
  return (
    <View>
      <Header title="Center In International" {...props} />
      <Text>About Rajyoga</Text>
    </View>
  );
}
