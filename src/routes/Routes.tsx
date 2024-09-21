import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppwriteContext, AppWriteProvider } from '../AppWRITE/appWriteContext';
import Loading from '../components/Loading';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import Snackbar from 'react-native-snackbar';


const Routes = () => {
    const [isLoading,setIsLoading] = useState<boolean>(true) 
    const { appwrite, isLoggedIn, setIsLoggedIn } = useContext(AppwriteContext);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const response = await appwrite.getCurrentUser();
                setIsLoading(false);

                if (response) {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (error) {
                setIsLoading(false);
                setIsLoggedIn(false);
                console.error("Error fetching user:", error);
            }
        };

        checkUser();
      }, [appwrite, setIsLoggedIn])

    if(isLoading){
        return(
            <Loading></Loading>
        )
    }

    return (
        <NavigationContainer>
            {
                isLoggedIn ? <AppStack/> : <AuthStack/>
            }
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default Routes;
