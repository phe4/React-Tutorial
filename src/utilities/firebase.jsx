import { initializeApp } from 'firebase/app';
import { useCallback, useEffect, useState } from 'react';
import { getDatabase, ref, update, onValue } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCvrwGW6PF4pMuFxQdERmys9jKbjAzVFvE",
    authDomain: "react-tutorial-b8696.firebaseapp.com",
    databaseURL: "https://react-tutorial-b8696-default-rtdb.firebaseio.com",
    projectId: "react-tutorial-b8696",
    storageBucket: "react-tutorial-b8696.appspot.com",
    messagingSenderId: "985432175420",
    appId: "1:985432175420:web:55dc67b0cd11c0af296439",
};

const firebase = initializeApp(firebaseConfig);
const database  = getDatabase(firebase);

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