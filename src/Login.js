// src/components/Login.js
import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';


const Background = styled.div`
  background-image: url('https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg');
  background-size: 100% 100%;
  background-position: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`;
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const LoginForm = styled(animated.form)`
  background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  width: 350px;
  height:250px;


  @media (max-width: 768px) {
    width: 80%;
`;

const LoginInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  box-sizing:border-box;
  background:skyblue;
  border:2px solid white;
  border-radius:10px;

`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #382e58;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top:20px;
  font-size:20px;
  border-radius:10px;
`;

  

const Login = () => {
    const loginAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 500 },
      });
   
  return (
    <Background>
    <LoginContainer>
      <LoginForm style={loginAnimation}>
        <h2>Login</h2>
        <LoginInput type="text" placeholder="Username" />
        <LoginInput type="password" placeholder="Password" />
        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
    </LoginContainer>
    </Background>
  );
};

export default Login;
