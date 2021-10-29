import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut   } from "firebase/auth";
import initializeAuthencation from "../Firebase/firebase.initialize";
import { useEffect } from "react";

initializeAuthencation();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    const signInUsignGoogle = () =>{
       return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     console.log(result.user);
        //     setUser(result.user);
        // })
        .catch(error =>{
            setError(error.massage);
        })
    };

    const logout =()=>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    };

    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
                console.log(user);
                setUser(user);
            }
        })
    },[])

    return {
        user,
        error,
        logout,
        signInUsignGoogle,
    }

}
export default useFirebase;