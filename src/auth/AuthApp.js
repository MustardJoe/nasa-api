import Component from '../shared/Component.js';
import { auth, usersRef } from '../services/firebase.js';

const ui = new firebaseui.auth.AuthUI(auth);

class AuthApp extends Component {

    render() {
        const dom = this.renderDOM();

        ui.start('#firebaseui-auth-container', {
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
            ],
            signInSuccessUrl: './',
            credentialHelper: firebaseui.auth.CredentialHelper.NONE,
            callbacks: {
                signInSuccessWithAuthResult(authResult) {
                    const user = authResult.user;
                    usersRef.child(user.uid)
                        .set({
                            id: user.uid,
                            displayName: user.displayName,
                            photoURL: user.photoURL
                        });
                    return true;
                }
            }
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <div>
            <main>
                <p>Get signed in to use the Nasa API app!</p>
                <div id="firebaseui-auth-container">
                    <!--firebase auth here -->
                </div>
            </main>
        </div>
    `;
    }
}

export default AuthApp;