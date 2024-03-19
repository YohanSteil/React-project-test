import React from 'react';
import { FormField, Button, Form } from 'semantic-ui-react'

const Login = () => {
    return (
        <Form className='form'>
        <FormField className='group'>
          <label className='label'>Identifiant</label>
          <input placeholder='First Name' type='text' />
        </FormField>
        <FormField>
          <label>Mot de passe</label>
          <input placeholder='Last Name' />
        </FormField>
        <Button type='submit'>Connexion</Button>
      </Form>
    );
};

export default Login;