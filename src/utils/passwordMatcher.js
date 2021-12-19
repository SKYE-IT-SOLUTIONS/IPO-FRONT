export const passwordMatcher = (password1,password2) => {
    let error = null
    let isMatching = false
    if(password1 === ""){
        error = "Password is empty"
    }else if(password1 === password2){
        isMatching = true
    }else{
        error = "Password is not matching"
    }
    return {error,isMatching}
}