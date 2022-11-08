import { initializeApp } from 'firebase/app';
import { useCallback, useEffect, useState } from 'react';
import { getDatabase, ref, update, onValue, connectDatabaseEmulator  } from 'firebase/database';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, connectAuthEmulator, signInWithCredential } from 'firebase/auth';
import {toast} from 'react-toastify';

let firebaseConfig = {
    apiKey: "AIzaSyCvrwGW6PF4pMuFxQdERmys9jKbjAzVFvE",
    authDomain: "react-tutorial-b8696.firebaseapp.com",
    databaseURL: "https://react-tutorial-b8696-default-rtdb.firebaseio.com",
    projectId: "react-tutorial-b8696",
    storageBucket: "react-tutorial-b8696.appspot.com",
    messagingSenderId: "985432175420",
    appId: "1:985432175420:web:55dc67b0cd11c0af296439",
};

if (import.meta.env.VITE_EMULATE){
  firebaseConfig.databaseURL = "http://localhost:9000?ns=react-tutorial-b8696";
}

const firebase = initializeApp(firebaseConfig);
const database  = getDatabase(firebase);

if (!window.EMULATION && import.meta.env.VITE_EMULATE) {
  const authLocal = getAuth(firebase);
  connectAuthEmulator(authLocal, "http://127.0.0.1:9099");
  connectDatabaseEmulator(database, "127.0.0.1", 9000);

  signInWithCredential(authLocal, GoogleAuthProvider.credential(
    '{"sub": "OEOPuejWxnFfHX19P85QkQg7PeRe", "email": "hxxp0204@gmail.com", "displayName":"PingHe", "email_verified": true}'
  ));
  
  window.EMULATION = true;
}

export const useDbData = (path) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
  
    useEffect(() => (
      onValue(ref(database, path), (snapshot) => {
       setData( snapshot.val() );
      }, (error) => {
        setError(error);
      })
    ), [ path ]);
  
    return [ data, error ];
  };
  
const makeResult = (error) => {
const timestamp = Date.now();
const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
const [result, setResult] = useState();
const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
}, [database, path]);

return [updateData, result];
};

export const signInWithGoogle = () => {
    signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
  };
  
const firebaseSignOut = () => {
  signOut(getAuth(firebase));
  toast.warn("You've been logged out!", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  setTimeout(function(){
      window.location.reload();
   }, 3000);
};

export { firebaseSignOut as signOut };

export const useAuthState = () => {
    const [user, setUser] = useState();

    useEffect(() => (
        onAuthStateChanged(getAuth(firebase), setUser)
    ));
    return [user];
};
