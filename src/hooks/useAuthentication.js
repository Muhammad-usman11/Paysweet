import { auth } from '../services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useStoreActions } from 'easy-peasy';
import { useNavigate } from 'react-router-dom';
import { useFireStore } from './useFireStore';

export const useAuthentication = () => {
  const setUser = useStoreActions((action) => action.setUser);
  const { useSetDoc } = useFireStore();
  const [ isDisabled, setIsDisabled ] = useState(false)
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleUserInfo = (e) => {
    e.preventDefault();

    setUserInfo((prev) => {
      // if(e.target.name == "displayName" && e.target.value.length < 1){
      //    console.log(e.target.value);
      //   return setIsDisabled(true)
        
      // }
      
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleConfirmPass = ()=>{
    
    // perform all neccassary validations
    if (userInfo.password !== userInfo.confirmPassword) {
        return false
    } else {
        return true
    }
  }

  const useUserSignUp = async () => {
    try {
      const userSignUp = await createUserWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );

      await useSetDoc({
        collectionName: 'users',
        id: userSignUp.user.uid,
        data: userInfo,
      });

      setUser({
        displayName: userInfo.displayName,
        email: userInfo.email,
        id: userSignUp.user.uid,
      });
      console.log(userSignUp);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return { useUserSignUp, handleUserInfo, userInfo, setUser, handleConfirmPass, isDisabled };
};
