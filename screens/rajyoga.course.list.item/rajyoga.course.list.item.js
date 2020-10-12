import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import {ScrollView} from 'react-native';
import {Text} from 'react-native';
import {View} from 'react-native';
import Header from '../../components/common/header/header';
import {colors} from '../../constants/colors';
import Icon from 'react-native-vector-icons/AntDesign';

export default function RajyogaCourseListItem(props) {
  useEffect(() => {
    props.getRajYogaCourseList({
      course_id: props.route.params.id,
    });
  }, [props.route.params.id]);

  const playVideo = (id) => {
    props.navigation.navigate('Youtube', {
      id: id,
    });
  };

  return (
    <View style={{flex: 1}}>
      <Header {...props} title={props.route.params.title} />
      <ScrollView style={{flex: 1}}>
        {props.rajYogaCourseList &&
          props.rajYogaCourseList.data.map((data, index) => {
            var videoId = data.firstvideo.split('=')[1];
            return (
              <View style={{padding: 10}}>
                <Text style={styles.heading}>{data.title}</Text>
                {data.firstimage != '' ? (
                  <Image
                    style={styles.imageBox}
                    source={{
                      uri: `http://bkteam.aeliusventure.com/assets/uploads/${data.firstimage}`,
                    }}
                  />
                ) : null}
                <Text>{data.description}</Text>
                {data.firstvideo ? (
                  <TouchableOpacity onPress={() => playVideo(videoId)}>
                    <View
                      style={{
                        height: 200,
                        backgroundColor: 'gray',
                        position: 'relative',
                      }}>
                      <Image
                        style={{width: '100%', height: 200}}
                        source={{
                          uri: `https://img.youtube.com/vi/${videoId}/0.jpg`,
                        }}
                      />
                      <Icon
                        name="play"
                        style={{
                          position: 'absolute',
                          left: '40%',
                          top: '40%',
                          fontSize: 45,
                          color: 'red',
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                ) : null}
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    color: colors.primaryColor,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  imageBox: {
    height: 200,
    width: '100%',
  },
  video: {
    width: '100%',
    height: 150,
    backgroundColor: 'red',
    marginTop: 10,
    marginBottom: 10,
  },
});
