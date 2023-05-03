import { auth } from '../services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
    
export const useAuthentication = () => {
    
    const useUserSignUp = async () => {
        try {
            const userSignUp = await createUserWithEmailAndPassword(
              auth,
              email,
              password
            );
            navigate('/login');
            console.log(userSignUp);
      
            
          } catch (error) {
            console.log(error);
        }
    }

  return ( { useUserSignUp } )
}

 
