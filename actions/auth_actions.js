import { FB_LOGIN_SUCCESS, FB_LOGIN_FAIL } from './types';
import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

//
//
export const facebookLogin = () => {
    return async (dispatch) => {
        let token = await AsyncStorage.getItem('fb_token');
        if (token) {
            dispatch({type: FB_LOGIN_SUCCESS, payload: token})

        }
        else {
            doFacebookLogin(dispatch);

        }
    }
}

const doFacebookLogin = async (dispathch)=>{
    let {type, token} = await Facebook.logInWithReadPermissionsAsync('285056175476062',
    {
        permissions:['public_profile']
    });

    if(type === 'cancel'){
        return dispatch({type: FB_LOGIN_FAIL})
    }
    await AsyncStorage.setItem('fb_token', token);
    dispathch({type: FB_LOGIN_SUCCESS, payload: token});
}