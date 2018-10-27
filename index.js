/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import Libros from './src/components/libros/Libros';
import LibrosList from './src/components/libros/LibrosList';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LibrosList);
