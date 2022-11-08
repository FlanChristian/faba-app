import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image, TextInput, FlatList} from 'react-native';
import { vehicules, COLORS } from '../database/items';
import Material from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import BackButton from '../component/BackButton';


const Home = ({navigation}) => {

  const [currentSelected, setCurrentSelected] = useState([0]);

  const renderCategories = ({item, index}) => {
    return(
      <TouchableOpacity activeOpacity={0.9} onPress={() => setCurrentSelected(index)}>
        <View style={{
          width: 120, 
          height: 180,
          justifyContent: 'space-evenly', alignItems: 'center',
          backgroundColor: currentSelected == index ? COLORS.accent : COLORS.white,
          borderRadius: 20,
          margin: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          elevation: 5,
        }}>

          <View style={{
            width: 60,
            height: 60
          }}>

            <Image 
            source={item.image}
            style={{
              width:'100%',
              height: '100%',
              resizeMode: 'center',

            }}
            />

          </View>
            <Text style={{
              fontSize: 16,
              color: COLORS.black,
              fontWeight: '600',
            }}>
              {item.name}
            </Text>
            <View style={{
              width:30,
              height:30,
              borderRadius:100,
              backgroundColor:currentSelected == index ? COLORS.white : COLORS.black,
              justifyContent: 'center',
              alignItems: 'center',

            }}>
              <FontAwesome name='angle-right' style={{
                fontSize:12,
                color: currentSelected == index ? COLORS.black : COLORS.white,
              }}/>
            </View>
        </View>
      </TouchableOpacity>
    )
  };

  const renderItems = (data, index) => {
    return(



      <TouchableOpacity 
      key={index}
      activeOpacity={0.9}
        style={{
        width: '100%',
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      
      onPress={() => navigation.push('details',{
        name: data.name,
        depart:data.Depart,
        place: data.Place,
        heure:data.Heure,
        gare:data.Gare,
        image:data.image,
        price:data.price,
        tel:data.tel,
        navigation: navigation,
        
      })}>

        <View style={{
          width: '90%',
          height: 200,
          backgroundColor: COLORS.white,
          borderRadius: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          elevation: 4,
          position: 'relative',
          padding: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>

          <View style={{
            marginBottom: 50
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>

            <FontAwesome name='bell' style={{
              fontSize: 10,
              color: data.connecte ? COLORS.online : COLORS.not,
            }}/>
              <Text style={{
                fontSize: 12,
                color: COLORS.black,
                opacity: 0.8,
                marginLeft: 5,
              }}>
                Ouvert à discution
              </Text>
            </View>
            <Text style={{
              fontSize: 22,
              color: COLORS.black,
              fontWeight: 'bold',
              paddingTop: 10,
            }}>
              {data.name}
            </Text>
            <Text style={{
              fontSize: 12,
              color: COLORS.black,
              opacity: 0.5,
              paddingTop: 10,

            }}>
              <Text style={{fontWeight:'700'}}>Départ :</Text>  {data.Depart}
            </Text>
            <Text style={{
              fontSize: 12,
              color: COLORS.black,
              opacity: 0.5,
            }}>
              <Text style={{fontWeight:'700'}}>Places : </Text>{data.Place}
            </Text>
            <Text style={{
              fontSize: 12,
              color: COLORS.black,
              opacity: 0.5,
            }}>
              <Text style={{fontWeight:'700'}}>Heure : </Text>{data.Heure}
            </Text>
            <Text style={{
              fontSize: 12,
              color: COLORS.black,
              opacity: 0.5,
            }}>
              <Text style={{fontWeight:'700'}}>Gare : </Text>{data.Gare}
            </Text>
          </View>

          <View style={{
            width: 150,
            height: 150,
            marginRight: -28,
          }}>
            <Image source={data.image} style={{
              width: '100%',
              height: '100%',
              borderRadius: 100,
            }}/>
          </View>
          <View style={{
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <View style={{
              width: 85,
              height: 50,
              backgroundColor: COLORS.accent,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Entypo name='plus' style={{
                fontSize: 18, color: COLORS.black
              }}/>
            </View>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 20,
            }}>
                <AntDesign name='star' style={{
                  fontSize: 12, color: COLORS.black, 
                  paddingRight: 5
                }}/>
                <Text style={{fontSize: 15, color: COLORS.black, fontWeight: 'bold',}}>{data.star}</Text>
            </View>
          </View>

        </View>
      </TouchableOpacity>
    )
  }


    return (
      

        <View 
        style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLORS.white,
            marginTop: 20,

        }}>


        <ScrollView showsVerticalScrollIndicator={false}>
            <View  style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLORS.white,
            position: 'relative',
        }}>
        <StatusBar backgroundColor={COLORS.white} barStyle='dark-content' />
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20
        }}>


            <TouchableOpacity style={{
              width: 40,height: 40
            }}>
              
                <Image source={require('../database/Images/user.png')} style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Material name='segment'
              style={{
                fontSize: 28,
                color: COLORS.black,
              }}
              />
            </TouchableOpacity>
        </View>

        

        <View style={{
          padding: 20
        }}>
          

          <Text style={{
            fontSize:16, 
            color: COLORS.black, 
            opacity: 0.5,
            fontWeight: '400'}}>
              Colis
          </Text>
          <Text style={{
            fontSize:40, 
            color: COLORS.black, 
            fontWeight: '600',
            letterSpacing: 2,}}>
              Export
          </Text>
        </View>
        <View style={{
          paddingHorizontal:20,paddingVertical:10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <Ionicons name="search" style={{fontSize: 20, color: COLORS.black, opacity: 0.8}}/>

          <TextInput placeholder='Entrer la destination'
          style={{
            color: COLORS.black,
            fontSize: 16,
            paddingVertical: 5,
            borderBottomWidth: 1,
            borderBottomColor: COLORS.black + 20,
            width: '90%',
            marginLeft: 10,
            letterSpacing: 1,
          }}
          />
        </View>
        <View style={{
          paddingHorizontal:20,paddingVertical:10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <Ionicons name="calendar-outline" style={{fontSize: 20, color: COLORS.black}}/>

          <TextInput placeholder='10/11/2022 - 17/11/2022'
          style={{
            color: COLORS.black,
            fontSize: 16,
            paddingVertical: 5,
            width: '90%',
            marginLeft: 10,
            letterSpacing: 1,
          }}
          />
        </View>
        <Text style={{
          paddingTop: 20,
          paddingHorizontal: 20,
          fontSize:18,
          fontWeight: '700',
          color: COLORS.black,
          letterSpacing: 1,
        }}>
          Categories
        </Text>
        <FlatList 
        horizontal={true}
        data={vehicules}
        renderItem = {renderCategories}
        showsHorizontalScrollIndicator={false}/>

        <Text style={{
          paddingTop: 20,
          paddingHorizontal: 20,
          fontSize: 18,
          fontWeight: '700',
          color: COLORS.black,
        }}>
          Disponible(s)
          </Text>
          {
            vehicules[currentSelected].personnes.map(renderItems)
          }
          <TouchableOpacity style={{
            margin: 30,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0.5,
          }}>
            <Text style={{
              fontSize: 16,
              color: COLORS.black,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.black,
            }}>
              Voir plus
            </Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
        </View>
    ) 

}

export default Home;