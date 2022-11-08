import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {COLORS} from '../database/items';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';


const Details = ({route, navigation}) => {

    const {name, image, depart, place, heure, gare, price, tel} = route.params;

    return (
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLORS.white,
            position: 'relative',
            marginTop: 20,

          }}>
          <View
            style={{
              padding: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: COLORS.black,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome
                name="angle-left"
                style={{
                  fontSize: 16,
                  color: COLORS.black,
                }}
              />
            </TouchableOpacity>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                backgroundColor: COLORS.accent,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="star" style={{fontSize: 15, color: COLORS.white}} />
            </View>
          </View>
          <Text
            style={{
              fontSize: 38,
              color: COLORS.black,
              fontWeight: '800',
              paddingHorizontal: 20,
              maxWidth: 310,
            }}>
            {name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.accent,
                fontWeight: '900',
                paddingRight: 5,
                paddingBottom: 8,
              }}>
              FCFA
            </Text>
            <Text
              style={{
                fontSize: 38,
                color: COLORS.accent,
                fontWeight: '900',
              }}>
              {price}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              maxHeight: 300,
              width: '100%',
              alignItems: 'center',
              marginTop: 20,

            }}>
            <View style={{paddingHorizontal: 20}}>
              <View style={{paddingVertical: 20}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: COLORS.black,
                    opacity: 0.5,
                  }}>
                  Place
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: COLORS.black,
                    fontWeight: '600',
                  }}>
                  {place}
                </Text>
              </View>
              <View style={{paddingVertical: 20}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: COLORS.black,
                    opacity: 0.5,
                  }}>
                  Heure
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: COLORS.black,
                    fontWeight: '600',
                  }}>
                  {heure}
                </Text>
              </View>
              <View style={{paddingVertical: 20}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: COLORS.black,
                    opacity: 0.5,
                  }}>
                  Départ
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: COLORS.black,
                    fontWeight: '600',
                  }}>
                  {depart} 
                </Text>
              </View>
              <View style={{paddingVertical: 20}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: COLORS.black,
                    opacity: 0.5,
                  }}>
                  Gare
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: COLORS.black,
                    fontWeight: '600',
                  }}>
                  {gare} 
                </Text>
              </View>
              <View style={{paddingVertical: 20}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: COLORS.black,
                    opacity: 0.5,
                  }}>
                  Tel
                </Text>
                <Text
                  style={{
                    fontSize: 24,
                    color: COLORS.accent,
                    fontWeight: '600',
                  }}>
                  {tel} 
                </Text>
              </View>
            </View>
            <View
              style={{
                width: 110,
                height: 180,
              }}>
              <Image
                source={image}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 100,

                }}
              />
            </View>
          </View>
          
          <View
            style={{
              position: 'absolute',
              width: '100%',
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: '90%',
                height: 80,
                backgroundColor: COLORS.accent,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: COLORS.white,
                  letterSpacing: 1,
                  marginRight: 10,
                }}>
                Entrer en contact
              </Text>
              <Entypo
                name="chevron-right"
                style={{fontSize: 16, color: COLORS.white}}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
}

export default Details;