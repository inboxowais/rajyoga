import {DrawerContentScrollView} from '@react-navigation/drawer';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import {ScrollView} from 'react-native-gesture-handler';

export default function DrawerCOntent(props) {
  return (
    <DrawerContentScrollView>
      <View>
        <Image
          source={require('./assets/images/top_bar_header.jpg')}
          style={{width: '100%', height: 180}}
        />

        <DrawerItem
          label="RajYoga Medication"
          onPress={() => props.navigation.navigate('RajYogaMedication')}
        />
        <DrawerItem
          label="About Rajyoga"
          onPress={() => props.navigation.navigate('AboutRajYoga')}
        />
        <DrawerItem
          label="Course Solution"
          onPress={() => props.navigation.navigate('CourseSolution')}
        />
        <DrawerItem
          label="Rajyoga Course"
          onPress={() => props.navigation.navigate('RajYogaCourse')}
        />

        <DrawerItem
          label="Gallary"
          onPress={() => props.navigation.navigate('Gallary')}
        />
        <DrawerItem
          label="AboutUs"
          onPress={() => props.navigation.navigate('AboutUs')}
        />
        <DrawerItem
          label="Feedback"
          onPress={() => props.navigation.navigate('FeedBack')}
        />
        <DrawerItem
          label="Center In India"
          onPress={() => props.navigation.navigate('CenterInIndia')}
        />
        <DrawerItem
          label="Center In International"
          onPress={() => props.navigation.navigate('CenterInInternational')}
        />
        <DrawerItem
          label="Contact Us"
          onPress={() => props.navigation.navigate('ContactUs')}
        />
        <DrawerItem
          label="Share"
          onPress={() => props.navigation.navigate('Share')}
        />
      </View>
    </DrawerContentScrollView>
  );
}
