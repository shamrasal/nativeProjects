import React, { createContext, FC, PropsWithChildren, useContext, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppWriteService from './Service';

type AppContextType = {
    appwrite: AppWriteService;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const AppwriteContext = createContext<AppContextType>({
    appwrite: new AppWriteService(),
    isLoggedIn: false,
    setIsLoggedIn: () => {}
})

const appwriteService = new AppWriteService();


export const AppWriteProvider:FC<PropsWithChildren> = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const defaultValue = {
        appwrite: appwriteService, // Use the same instance
        isLoggedIn,
        setIsLoggedIn,
    };

    return (
        <AppwriteContext.Provider value={defaultValue}>
            {children}
      </AppwriteContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Adjust as necessary
    },
})
