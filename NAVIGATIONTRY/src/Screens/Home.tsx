import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import { rootStackParamList } from '../App';
import ProductItems from '../Components/ProductItems';
import Separator from '../Components/Separator';
import { PRODUCTS_LIST } from '../Constants/Constants';

type HomeProps = NativeStackScreenProps<rootStackParamList,'Home'>

const Home = ({navigation}:HomeProps) => {
    return (
        <View>
            <FlatList
                data={PRODUCTS_LIST}
                keyExtractor={(product)=>product.id}
                ItemSeparatorComponent={Separator}
                renderItem={({item})=>(
                    <Pressable 
                        onPress={()=>{
                            navigation.navigate('Details',{
                                Product:item
                            })
                        }}
                    >
                        <ProductItems product={item}/>
                    </Pressable>
                )}

            />
            <Text>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
  
      padding: 12,
      backgroundColor: '#FFFFFF',
    },
  });

export default Home;
