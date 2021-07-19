import { Formik, Form, Field } from 'formik';
import { styled } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

interface FormSignUpValues {
  username: string;
  password: string;
}

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const SignUpContent = () => {
  const initialValues: FormSignUpValues = {
    username: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {() => (
        <Form>
          <label htmlFor='username'>Username</label>
          <Field id='username' name='username' placeholder='santychuy' />
          <label htmlFor='password'>Password</label>
          <Field id='password' name='password' />
          <SubmitButton type='submit'>Submit</SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpContent;
