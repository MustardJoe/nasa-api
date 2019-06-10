const config = {
    apiKey: 'AIzaSyDa9tzo6brX_PKH6kZQE9-j38YSYGidFe8',
    authDomain: 'nasa-api-test-proj.firebaseapp.com',
    databaseURL: 'https://nasa-api-test-proj.firebaseio.com',
    projectId: 'nasa-api-test-proj',
    storageBucket: 'nasa-api-test-proj.appspot.com',
    messagingSenderId: '633227495927',
    appId: '1:633227495927:web:28b0aba3862b7073'
};

    // Initialize Firebase
export const app = firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();