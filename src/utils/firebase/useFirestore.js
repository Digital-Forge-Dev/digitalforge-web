import { firestore, storage} from './firebase_config';
import {collection, doc, addDoc, getDocs, getDoc, query, where} from 'firebase/firestore'
import { toFirestore, fromFirestore } from '../models/portfolioClass';
import { ref, uploadBytes , getDownloadURL} from 'firebase/storage';


export default function useFirestore() {
  const collRef = collection(firestore, "portfolio")

  const docRef = (id) => (doc(firestore, "portfolio", id))

  const setPortfolio = async (data) => {
    const docRef = await addDoc(collRef, { ...data})
    return docRef.id
  }

  const getAllPortfolios = async () => {
    var listData = [];
    var list = [];
    const querySnapshot = await getDocs(collRef)
    querySnapshot.forEach((doc) => {
        listData.push(fromFirestore(doc).id)
        listData.push(fromFirestore(doc).toString())
        list.push(listData)
        listData = []
    });
    console.log(list)
    return list;
  }

  const getMobilePortfolios = async () => {
    var listData = [];
    var list = [];
    const querySnapshot = await getDocs(query(collRef, where('category', '==', 'mobile')))
    querySnapshot.forEach((doc) => {
        listData.push(fromFirestore(doc).id)
        listData.push(fromFirestore(doc).toString())
        list.push(listData)
        listData = []
    });
    return list;
  }

  const getPortfolio = async (id) => {
    console.log(id)
    const docSnap = await getDoc(docRef(id))
    var data = ""
    if (docSnap.exists()) {
      data = docSnap.data()
      console.log("Document data:", data);
    } else {
      data = "No such document!"
      console.log("No such document!");
    }
    return data;
  }

  const uploadPhotos = (listPhotos) => {
    const listId = []
    console.log("MASUK SINI")
    console.log(listPhotos)
    listPhotos.map((photo) => {
      listId.push(photo[1])
      const storageRef = ref(storage, "images/" + photo[1]);
      uploadBytes(storageRef, photo[0]).then((snapshot) => {
        console.log("uploaded")
      })
    })
    return listId;
  }

  const getPhoto = async (id) =>  {
    try {
      console.log("LOG PHOTO" + id)
      var url = await getDownloadURL(ref(storage, "images/" + id))
    } catch {
      var url = ""
    }
    return url
  }

  return {
    setPortfolio,
    getAllPortfolios,
    getMobilePortfolios,
    uploadPhotos,
    getPhoto,
    getPortfolio
  };
}