import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button.component.jsx/button.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>I already have an account</h1>
      <FormInput
        label="Email"
        type="email"
        required
        onChange={handleChange}
        name="email"
        value={email}
      />

      <FormInput
        label="Password"
        type="password"
        required
        onChange={handleChange}
        name="password"
        value={password}
      />
      <Button buttonType="google">Sign in with Google</Button>
      <Button>Sign in </Button>
      <SignUpForm />
    </div>
  );
};

export default Authentication;
