import { useState } from 'react';
import axios from 'axios';
const https = require('https');
import { useRouter } from 'next/router';
import { Text, Center, Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://harmony-home.it/api/login', {
        username,
        password,
      },
        { withCredentials: true });

      if (response.status === 200) {
        localStorage.setItem('isAdmin', true);
        router.push('/');
      } else {
        console.log('Login failed');
      }

    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <>
      <Box paddingTop="70px">
        <Center>
          <form onSubmit={handleLogin}>
            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input name="username" onChange={(e) => setUsername(e.target.value)} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button type="submit">Login</Button>
          </form>
        </Center>
      </Box>
    </>
  );
}
