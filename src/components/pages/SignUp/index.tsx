import { useRouter } from 'next/router';
import { Formik, Form, Field } from 'formik';
import { styled } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import { useSignInMutation } from '../../../graphql/generated/graphql';

interface FormSignUpValues {
  username: string;
  password: string;
}

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const SignUpContent = () => {
  const { push } = useRouter();
  const initialValues: FormSignUpValues = {
    username: '',
    password: '',
  };

  const [signIn] = useSignInMutation();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, action) => {
        try {
          await signIn({ variables: { ...values } });
          action.resetForm();
          push('/');
        } catch (e) {
          console.log(e.message);
        }
      }}
    >
      {() => (
        <Form>
          <label htmlFor='username'>Username</label>
          <Field id='username' name='username' placeholder='santychuy' />
          <label htmlFor='password'>Password</label>
          <Field id='password' name='password' type='password' />
          <SubmitButton type='submit'>Submit</SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpContent;
