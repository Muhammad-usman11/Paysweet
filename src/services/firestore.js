import { auth, db } from "../services/firebase";
import { collection,getDoc, doc } from "firebase/firestore";


const useFireStore = ({coll= false, collectionName="", docId=false}) => {

const checkData = () => {
    if(coll) {
        return collection(db, coll)
    } else if(docId) {
      return  doc(db, collectionName, docId)
    }
}

    return checkData()
}