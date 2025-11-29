<template>
  <div class="app">
    <div class="shape shape--one"></div>
    <div class="shape shape--two"></div>
    <router-view class="container"></router-view>
  </div>
</template>
<style>
@font-face {
  font-family: 'Poppins';
  src: url('@/assets/fonts/PoppinsLatin-Medium.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
html {
  box-sizing: border-box;
}
*,
*::after,
*::before {
  box-sizing: inherit;
  margin: 0;
}
body {
  font-family: 'Poppins', 'Calibri', sans-serif;
  letter-spacing: 0.5px;
  background-color: #080710;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.app {
  width: 400px;
  position: relative;
}
.container {
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.13);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.13);
  border-radius: 10px;
  padding: 50px 35px 35px 35px;
  backdrop-filter: blur(10px);
}
.shape {
  position: absolute;
  z-index: -1;
  width: 200px;
  height: 200px;
  border-radius: 100%;
}
.shape--one {
  background: linear-gradient(#0d47a1, #42a5f5);
  top: -80px;
  left: -80px;
}
.shape--two {
  background: linear-gradient(45deg, #e65100, #ffa726);
  bottom: -90px;
  right: -60px;
}
input,
button {
  font-family: inherit;
  border: none;
  outline: none;
}
</style>
