import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Header from './../../components/common/header/header';
import Icon from 'react-native-vector-icons/AntDesign';

import Carousel, {Pagination} from 'react-native-snap-carousel';

import {AsyncStorage} from 'react-native';
import {ScrollView} from 'react-native';
import {colors} from '../../constants/colors';

export default function RajyogaMedication(props) {
  useEffect(() => {
    props.getVideos();
    props.getHomeImages();
  }, []);

  const [videoId, setVideoId] = useState('');

  const [viewDetails, setViewDetails] = useState({
    viewWidth: '',
    viewHeight: '',
  });

  const redirectTo = (id) => {
    if (id == 1) {
      props.navigation.navigate('Murli');
    }
    if (id == 2) {
      props.navigation.navigate('Medication');
    }
    if (id == 3) {
      props.navigation.navigate('GitaGayan');
    }
    if (id == 4) {
      props.navigation.navigate('Knowledge');
    }
  };

  const [isFullScreen, setIsFullScreen] = useState(false);

  const onLayout = (event) => {
    setViewDetails({
      ...viewDetails,
      viewHeight: event.nativeEvent.layout.height,
      viewWidth: event.nativeEvent.layout.width,
    });
  };

  const onChangeFullscreen = (event) => {
    // setIsFullScreen(event.isFullscreen);
  };

  const setVideo = (id) => {
    props.navigation.navigate('Youtube', {
      id: id,
    });
  };

  const _renderItem = (item) => {
    var videoId = item.item.video.split('=')[1];

    return (
      <View onLayout={onLayout}>
        <TouchableOpacity onPress={() => setVideo(videoId)}>
          <View
            style={{
              height: 250,
              position: 'relative',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={{uri: `https://img.youtube.com/vi/${videoId}/0.jpg`}}
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
      </View>
    );
  };

  return (
    <React.Fragment>
      <Header title="Rajyoga medication" {...props} />

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.carousel}>
            <Carousel
              data={props.videos.data}
              sliderWidth={Math.round(Dimensions.get('window').width)}
              itemWidth={220}
              renderItem={_renderItem}
            />
          </View>
          <View style={styles.mainBox}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 25,
                color: '#ffffff',
              }}>
              FREE
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: '#ffffff',
              }}>
              7 Days Rahyoga Medication course
            </Text>
          </View>

          <View style={styles.boxses}>
            {props.homeImages &&
              props.homeImages.data &&
              props.homeImages.data.map((data, index) => {
                return (
                  <TouchableOpacity
                    style={styles.box}
                    onPress={() => redirectTo(data.id)}>
                    <Text style={styles.imageText}>{data.title}</Text>
                    <Image
                      style={styles.image}
                      source={{
                        uri: `http://bkteam.aeliusventure.com/assets/uploads/${data.image}`,
                      }}
                    />
                  </TouchableOpacity>
                );
              })}
          </View>
        </View>
      </ScrollView>
      <View style={styles.phone}>
        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
          <Icon name="phone" style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    justifyContent: 'space-evenly',
  },
  carousel: {},
  logo: {
    width: 250,
    height: 250,
    borderRadius: 100,
  },
  buttonContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
  mainBox: {
    width: '100%',
    backgroundColor: colors.pinkColor,
    height: 100,
    marginTop: 10,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxses: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  box: {
    width: '43%',
    margin: 10,
    borderRadius: 10,
    height: 150,
    position: 'relative',
    // border: '1px solid #000000',
  },
  image: {
    width: '100%',
    margin: 10,
    borderRadius: 10,
    height: 150,
    // border: '1px solid #000000',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  imageText: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    left: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  phone: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'gray',
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  iconStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
