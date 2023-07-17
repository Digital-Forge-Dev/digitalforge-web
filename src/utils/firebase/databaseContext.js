import { createContext, useContext, Context } from 'react'
import useFirestore from './useFirestore';

const firestoreContext = createContext({
    loading: true,
    setPortfolio: async () => {},
    getAllPortfolios: async () => {},
    getMobilePortfolios: async () => {},
    uploadPhotos: () => {},
    getPhoto: async () => {},
    getPortfolio: async () => {}
});

export function FirestoreProvider({ children }) {
  const firestore = useFirestore();
  return <firestoreContext.Provider value={firestore}>{children}</firestoreContext.Provider>;
}

export const useDB = () => useContext(firestoreContext);