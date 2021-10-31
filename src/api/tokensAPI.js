import { Cookies } from "../shared/cookies";

export const getAccessToken = () =>{
    const token = Cookies.get("access")
    return token;
}
export const getRefreshToken = () =>{
    const token = Cookies.get("refresh")
    return token;
}

export const getUserId = () =>{
    const userid = Cookies.get("userid")
    return userid;
}

export const setAccessToken = (access) =>{
    Cookies.set("access",access)
}
export const setRefreshToken = (refresh) =>{
    Cookies.set("refresh",refresh)
}

