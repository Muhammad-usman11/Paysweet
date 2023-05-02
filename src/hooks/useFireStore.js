import { auth, db } from '../services/firebase';
import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs,
  getDoc,
  deleteDoc,
} from 'firebase/firestore';

export const useFireStore = () => {
  //  addDoc Hook
  //  @param collectionName and Data
  const useAddDoc = async ({ collectionName, data }) => {
    try {
      const dbRef = collection(db, collectionName);

      const res = await addDoc(dbRef, data);

      return res;
    } catch (error) {
      console.error(error);
    }
  };

  //  getDocs Hook
  //  @param collectionName
  const useGetDocs = async ({ collectionName }) => {
    try {
      const dbRef = collection(db, collectionName);

      const res = await getDocs(dbRef);

      return res;
    } catch (error) {
      console.error(error);
    }
  };

  //  getDoc Hook
  //  @param collectionName and id
  const useGetDoc = async ({ collectionName, id }) => {
    try {
      const dbRef = doc(db, collectionName, id);

      const res = await getDoc(dbRef);

      return res.data();
    } catch (error) {
      console.error(error);
    }
  };

  //  setDoc Hook
  //  @param collectionName and id and data
  const useSetDoc = async ({ collectionName, id, data, merge = true }) => {
    try {
      const dbRef = doc(db, collectionName, id);

      const res = await setDoc(dbRef, data, { merge });

      return res;
    } catch (error) {
      console.error(error);
    }
  };

  //  setDoc Hook
  //  @param collectionName and id and data
  const useDelDoc = async ({ collectionName, id }) => {
    try {
      const dbRef = doc(db, collectionName, id);

      const res = await deleteDoc(dbRef);

      return res;
    } catch (error) {
      console.error(error);
    }
  };

  return { useAddDoc, useGetDocs, useGetDoc, useSetDoc, useDelDoc };
};
