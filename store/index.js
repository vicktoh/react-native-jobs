import {createStore, compose, applyMiddleware } from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native'
import thunk from 'redux-thunk';
import reducers from '../reducers';

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));
persistStore(store, {storage: AsyncStorage, whitelist: ['likedJobs']})
export default store;