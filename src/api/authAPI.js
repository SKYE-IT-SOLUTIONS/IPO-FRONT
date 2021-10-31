import { authRequest } from "./utils";
import { getAccessToken,getRefreshToken,setAccessToken,getUserId, setRefreshToken } from './tokensAPI'


const LOGIN_URL = "/auth/signin";
const LOGOUT_URL = "/auth/logout";
const ACCESS_URL = "/auth/access";
const REFRESH_URL = "/auth/refresh";

export const loginIn= (data) => {
    authRequest(LOGIN_URL, data)
};

export const logOut = (id) =>{
    console.log("onLogout Triggered");
    const userId = getUserId("userid")
    console.log(userId)
    var config = {
        method: 'POST',
        url: LOGOUT_URL+`/${userId}`,
      };
    authRequest(config)
      .then(({data,error}) => {
        if (!error && data.status === 200) {
            console.log("logged out");
            setAccessToken(null);
            setRefreshToken(null);
            return {status:true, error:null};
        }else{
            console.log("error "+error)
            return {status:false, error:error};
        }
      })
      .catch((error) => {
        console.log(error);
        return {status:false, error:error};
      });
};

export const isUser = () => {
    var result = { user: false, error: null};
    var config = {
              method: "POST",
              url:ACCESS_URL,
              headers: { 
                'Authorization': `Bearer ${getAccessToken()}`, 
                'Content-Type': 'application/json'
              },
            };

    authRequest(config).then( ({data,error}) => {
        
        console.log("response " +data)

        if(!error){
            if(data.status === 200){
                result = { status: true, error: null };
            }else{
                result = { status: false, error: "Undefined Status Code" };
            }

        }else{
            console.log()
            if(parseInt(error.message.slice(-3,)) === 401){
                console.log("Access Token Expired")
                var d = JSON.stringify({
                    "refreshToken": getRefreshToken()
                  });
                  
                var config = {
                method: 'POST',
                url: REFRESH_URL,
                headers: { 
                    'Content-Type': 'application/json'
                },
                data : d
                };
                authRequest(config)
                    .then(({data}) =>{
                        const { accessToken } = data.data;
                        setAccessToken(accessToken);
                        isUser();
                    }).catch((error)=>{
                        result = { status: false, error: error };
                    })
            }
        }
    }
    ).catch((error) =>{
        console.log("error " +error)
        result = { status: false, error: error };
    }).finally(() =>{
        console.log(result)
        return result;
    })
}



