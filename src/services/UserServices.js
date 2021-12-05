import { loginIn } from "../api/auth/authAPI"

export default class UserServices{
    handleLogin =async (credentials,setIsAuthenticated)=>{
        const { status, error } = await loginIn(credentials);
        console.log(error)
        if(status){
            setIsAuthenticated(true);
        }else{
            alert(error);
        }
    }
}