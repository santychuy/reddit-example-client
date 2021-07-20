import { gql } from '@apollo/client';

export const SIGN_IN_MUTATION = gql`
  mutation SignIn($username: String!, $password: String!) {
    signIn(inputSignUp: { username: $username, password: $password }) {
      errors {
        message
      }
      user {
        id
        name
        username
      }
    }
  }
`;
