import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import SymbolImage from './../../../assets/images/app_symbol.png';
import {colors} from './../../../constants/colors';

export default function Header(props) {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
          <Icon name="bars" style={styles.iconStyle} />
        </TouchableOpacity>
        <View>
          <Text style={styles.heading}>{props.title ? props.title : null}</Text>
        </View>
      </View>
      <View>
        <Image
          source={require('./../../../assets/images/app_symbol.png')}
          style={{width: 50, height: 50}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 100,
    color: '#ffffff',
  },
  header: {
    height: 60,

    backgroundColor: colors.primaryColor,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    color: '#ffffff',
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'row',
    color: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  heading: {
    color: '#ffffff',
    fontSize: 20,
    paddingLeft: 10,
  },
});
