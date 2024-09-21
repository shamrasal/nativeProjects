/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import Routes from './src/routes/Routes';
import { AppWriteProvider } from './src/AppWRITE/appWriteContext';

const Main = () => {
    return (
        <AppWriteProvider>
            <Routes />
        </AppWriteProvider>
    );
};

AppRegistry.registerComponent(appName, () => Main);
