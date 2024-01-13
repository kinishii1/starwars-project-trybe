import { createContext } from 'react';
import { AppProviderValues } from '../types';

const AppContext = createContext({} as AppProviderValues);

export default AppContext;
