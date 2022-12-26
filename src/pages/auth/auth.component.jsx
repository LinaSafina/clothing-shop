import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import { StyledAuth } from './auth.styles';

const Auth = () => {
  return (
    <div className='auth'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Auth;
