import { authRequest, getErrorMessage, postRequest } from "./utils";
import { getAccessToken,setAccessToken,getUserId, setRefreshToken, setUserId, refreshAccessToken } from './tokensAPI'


const LOGIN_URL = "/auth/signin";
const LOGOUT_URL = "/auth/logout";
const ACCESS_URL = "/auth/access";
const REFRESH_URL = "/auth/refreshtoken";

var result = { status: false, error: null};//global variable declared

export const loginIn= async (credentials) => {
    // credentials = {username:"supun97", password:"qweasdzxc"}// -input payload sample
    await postRequest(LOGIN_URL,credentials).then(({data,error}) => {
        if(!error){
            const {token, refreshToken,id} = data.data;
            setAccessToken(token);
            setRefreshToken(refreshToken);
            setUserId(id)
            console.log("login success")
            result =  {status:true, error:null};
        }else{
            result = {status:false, error:getErrorMessage(error)};
        }
      }).catch(error=>{
        console.log("error "+error)
        result = {status:false, error:getErrorMessage(error)};
      });
      return result;
};

export const logOut = async (id) =>{
    const userId = getUserId("userid")
    var config = {
        method: 'POST',
        url: LOGOUT_URL+`/${userId}`,
      };
    await authRequest(config)
      .then(({data,error}) => {
        if (!error && data.status === 200) {
            console.log("logged out");
            setAccessToken(null);
            setRefreshToken(null);
            setUserId(null);
            result =  {status:true, error:null};
        }else{
            result = {status:false, error:getErrorMessage(error)};
        }
      })
      .catch((error) => {
        result = {status:false, error:getErrorMessage(error)};
    });
    return result;
};

export const isUser = async () => {
    var config = {
              method: "POST",
              url:ACCESS_URL,
              headers: { 
                'Authorization': `Bearer ${getAccessToken()}`, 
                'Content-Type': 'application/json'
              },
            };

    await authRequest(config).then(async({data,error}) => { 

        if(!error){
            if(data.status === 200){
                result = { status: true, error: null };
            }else{
                result = { status: false, error: "Undefined Status Code" };
            }

        }else{
            if(error.status === 401){
                // console.log("Access Token Expired")
                const { status, error } = await refreshAccessToken(REFRESH_URL,postRequest);
                if(status){
                    result = await isUser()
                }else{
                    result = { status:status, error:getErrorMessage(error) };
                }
            }else{
                result = { status:false, error:getErrorMessage(error) };
            }
        }
    }
    ).catch((error) =>{
        console.log("error " +error)
        result = { status: false, error: getErrorMessage(error) };
    })
    return result;
}//must await for the result

export const testing = async() =>{
    result = await logOut();
    console.log(result)
}