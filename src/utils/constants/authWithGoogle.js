// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
   apiKey: 'AIzaSyC_vXn7P6Pn6Pv6ZF2k5RNfnNgt_s7FCws',
   authDomain: 'check-project-63d93.firebaseapp.com',
   projectId: 'check-project-63d93',
   storageBucket: 'check-project-63d93.appspot.com',
   messagingSenderId: '389331467099',
   appId: '1:389331467099:web:93a823d83495d9b715787e',
}

const app = initializeApp(firebaseConfig, 'check project')
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { auth, provider }
