import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  Auth,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  Firestore,
  getDocs,
  where,
  query,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.VITE_API_KEY,
  authDomain: process.env.VITE_AUTH_DOMAIN,
  projectId: process.env.VITE_PROJECT_ID,
  storageBucket: process.env.VITE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_APP_ID,
  measurementId: process.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);

const logInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<string | null> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return 'Done';
  } catch (err) {
    alert('Invalid email or password. Please try again.');
    console.error(err);
    return 'Invalid email or password. Please try again.';
  }
};

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
): Promise<void> => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    console.error(err);
  }
};

const checkIfEmailExists = async (email: string): Promise<boolean> => {
  try {
    const usersRef = collection(db, 'users');
    const quere = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(quere);

    return querySnapshot.size > 0;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const logout = (): void => {
  signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
  checkIfEmailExists,
};
