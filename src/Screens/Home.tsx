import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FAB, Image, Text } from '@rneui/base';
import Snackbar from 'react-native-snackbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppwriteContext } from '../AppWRITE/appWriteContext';

type userObj = {
    name : string,
    email : string
}

const Home = () => {
    const [userData, setUserData] = useState<userObj>()
    const {appwrite,isLoggedIn,setIsLoggedIn} = useContext(AppwriteContext)

    const handleLogout = () => {
        appwrite
        .logout()
        .then(response =>{
            setIsLoggedIn(false)
            Snackbar.show({
                text: "user logged out",
            })
        })
        .catch(_=>{
            setIsLoggedIn(false);
        })
    }

    useEffect(() => {
        appwrite.getCurrentUser()
        .then(response => {
          if (response) {
            const user: userObj = {
              name: response.name,
              email: response.email
            }
            setUserData(user)
          }
        })
      }, [appwrite])
      
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.welcomeContainer}>
            <Image
              style={styles.welcomeImage}
              source={{
                uri:"https://thumbs.dreamstime.com/b/owl-illustration-owl-illustration-logo-jpg-ai-278162984.jpg"
              }}
              resizeMode="contain"
            />
            <Text style={styles.message}>
              Build Fast. Scale Big. All in One Place.
            </Text>
            {userData && (
              <View style={styles.userContainer}>
                <Text style={styles.userDetails}>Name: {userData.name}</Text>
                <Text style={styles.userDetails}>Email: {userData.email}</Text>
              </View>
            )}
          </View>
          <FAB
            placement="right"
            color="#f02e65"
            size="large"
            title="Logout"
            icon={{name: 'logout', color: '#FFFFFF'}}
            onPress={handleLogout}
          />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0B0D32',
    },
    welcomeImage:{
      width: 400,
      height:500,
    },
    welcomeContainer: {
      padding: 12,
      flex: 1,
      alignItems: 'center',
    },
    message: {
      fontSize: 26,
      fontWeight: '500',
      color: '#FFFFFF',
    },
    userContainer: {
      marginTop: 24,
    },
    userDetails: {
      fontSize: 20,
      color: '#FFFFFF',
    },
  });

export default Home;
