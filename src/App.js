import React, { useState } from 'react';
import Navigation from './Navigations';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import { ProgressProvider, UserProvider } from './Contexts';

const cacheImages = images => {
    return images.map(image => {
        if(typeof image === 'string')   return Image.prefetch(image);
        else                            return Asset.fromModule(image).downloadAsync();
    })
}
const cacheFonts = fonts => {
    return fonts.map(font => Font.loadAsync(font));
}

const App = () => {
    const [isReady, setIsReady] = useState(false);
    
    const _loadAssets = async () => {
        const imageAssets   = cacheImages( [ require('./Asset/images/splash.png') ]);
        const fontAssets    = cacheFonts([]);
        await Promise.all([...imageAssets, ...fontAssets]);
    }

    return isReady ? (
        <ThemeProvider theme={theme}>
            <UserProvider>
                <ProgressProvider>
                    <Navigation />
                </ProgressProvider>
            </UserProvider>
        </ThemeProvider>
    ) : (
        <AppLoading startAsync ={_loadAssets} onFinish={()=>setIsReady(true)} onError={console.warn} />
    );
};

export default App;