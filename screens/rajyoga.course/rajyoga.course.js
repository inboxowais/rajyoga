import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import {Text} from 'react-native';
import {View, CheckBox} from 'react-native';
import {colors} from '../../constants/colors';
import Header from './../../components/common/header/header';

export default function Rajyogacourse(props) {
  useEffect(() => {
    props.getRajYogaCouse({
      id: 58,
    });
  }, [props.getRajYogaCouse]);

  const [selectedCheck, setSelectedCheck] = useState('English');

  const onChange = (event, value) => {
    if (value == 'English') {
      props.getRajYogaCouse({
        id: 58,
      });
    }
    if (value == 'Hindi') {
      props.getRajYogaCouse({
        id: 59,
      });
    }
    setSelectedCheck(value);
  };

  const navigateTo = (data) => {
    props.navigation.navigate('RajYogaCourseList', {
      id: data.id,
      title: data.Title,
    });
  };

  return (
    <View>
      <Header title="Rajyoga Couse" {...props} />
      <View
        style={{
          backgroundColor: colors.primaryColor,
          marginTop: 20,
          marginBottom: 20,
          paddingTop: 10,
          paddingBottom: 10,
        }}>
        <Text style={styles.mainHeading}>7 days Rajyoga meditation course</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: colors.primaryColor,
        }}>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox
            onChange={(event) => onChange(event, 'English')}
            value={selectedCheck === 'English'}
          />
          <Text style={{fontWeight: 'bold', color: '#ffffff'}}>English</Text>
        </View>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox
            onChange={(event) => onChange(event, 'Hindi')}
            value={selectedCheck === 'Hindi'}
          />
          <Text style={{fontWeight: 'bold', color: '#ffffff'}}>Hindi</Text>
        </View>
      </View>
      <View style={{marginTop: 10, marginBottom: 10}}></View>
      <ScrollView style={{marginBottom: 200}}>
        {props.rajYogaCourses &&
          props.rajYogaCourses.data &&
          props.rajYogaCourses.data.map((data, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => navigateTo(data)}>
                <View>
                  <Text style={styles.heading}>{data.Title}</Text>
                  <View>
                    <Image
                      style={styles.imageBox}
                      source={{
                        uri: `http://bkteam.aeliusventure.com/assets/uploads/${data.Image}`,
                      }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.primaryColor,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  imageBox: {
    height: 200,
    width: '100%',
    marginTop: 20,
  },
  mainHeading: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
