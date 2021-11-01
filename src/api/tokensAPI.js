import { Cookies } from "../shared/cookies";

export const getAccessToken = () =>{
    const token = Cookies.get("access")
    return token !== "null" && token !== undefined ? token : "";
}
export const getRefreshToken = () =>{
    const refresh = Cookies.get("refresh")
    return refresh !== "null" && refresh !== undefined ? refresh : "";
}

export const getUserId = () =>{
    const userid = Cookies.get("userid")
    return userid !== "null" && userid !== undefined ? userid : "0";
}

export const setUserId = (userId) =>{
    Cookies.set("userid",userId)
}

export const setAccessToken = (access) =>{
    Cookies.set("access",access)
}
export const setRefreshToken = (refresh) =>{
    Cookies.set("refresh",refresh)
}

export const refreshAccessToken =async (REFRESH_URL, postRequest) => {
    var result;
    await postRequest(REFRESH_URL, {"refreshToken":getRefreshToken() }).then(({data,error}) =>{
        if(!error){
            const { accessToken } = data.data;
            setAccessToken(accessToken)
            result = { status: true, error: {message:null} };
            // console.log("success")
        }else{
            result = { status: false, error: {message:"invalid refreshToken or expired... please login again..."} };
        }
    }).catch(error=>{
        // console.log("error "+error)
        result = { status: false, error: error };
    })
  return result;
}
