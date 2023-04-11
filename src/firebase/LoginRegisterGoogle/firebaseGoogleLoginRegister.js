import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebaseApp";

export const getInfosUser = (setInfosUser, setRedirect) => {
  const provider = new GoogleAuthProvider();

  const auth = getAuth(app);
  signInWithPopup(auth, provider).then((result) => {
    /* const credential = GoogleAuthProvider.credentialFromResult(result); */
    const user = result.user;
    if (user) {
      setInfosUser({
        state: { email: user.email, uid: user.uid, name: user.displayName },
      });

      setRedirect(1);
    } else {
      setRedirect(2);
    }
  });
};
