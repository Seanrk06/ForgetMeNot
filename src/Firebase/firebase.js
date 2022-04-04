// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection, addDoc, where} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-R09VkjUXihyEYP6fY6gHAMIvzJ2wWSI",
  authDomain: "forgetmenot-22106.firebaseapp.com",
  projectId: "forgetmenot-22106",
  storageBucket: "forgetmenot-22106.appspot.com",
  messagingSenderId: "616340791825",
  appId: "1:616340791825:web:8366960c8a403e105e07b0",
  measurementId: "G-WFQG8N9385"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
// const analytics = getAnalytics(app);

// const db = getFirestore(app);
// const students = FirebaseFirestore.instance.collection("students");
// const teachers = FirebaseFirestore.instance.collection("teachers");
// const storage = getStorage();

// export async function signup(email, password, name, role) {

//   try {
//     const userCred = await createUserWithEmailAndPassword(auth, email, password);
//     userCred.user.displayName = name;
//     if(role=="teacher") 
//     {
//       teachers.doc(userCred.user.uid).set({
//       userid: userCred.user.uid,
//       name: name,
//       email: email,
//     });} else {
//       students.doc(userCred.user.uid).set({
//         name: name,
//         email: email,
//         userid: userCred.user.uid,
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// export function login(email, password) {

//   return signInWithEmailAndPassword(auth, email, password);
// }

// export function logout() {
//   return signOut(auth);
// }

// // Custom Hook
// export function useAuth() {
//   const [ currentUser, setCurrentUser ] = useState();

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
//     return unsub;
//   }, [])

//   return currentUser;
// }