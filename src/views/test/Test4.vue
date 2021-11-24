<template>
  <div @scroll="handleScroll">
    <div class="header">
      <nav id="navbar" ref="navbar">
        <img class="logo" src="../../assets/images/logo.png" alt="" />
        <ul id="menu" ref="menu">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>PRODUCT</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </div>
    <p class="text">
      英语是一种多中心语言。由于英语的使用范围极为广泛，不可避免地出现了各种地区性变体。语言学家已经不再把伦敦或英国上层人士的英语作为唯一的标准英语。除英国英语外，最重大发展的是美国英语和纽澳英语。自从17、18世纪，美国英语、加拿大英语、澳大利亚英语、新西兰英语开始成为独特的方言。它们也各有自己的地区性的语词、语法和语音。其他像印度英语、东南亚英语、加勒比地区英语和非洲某些新兴国家的英语，都各自受到了当地语言影响、具有语音和词汇上的特点。
    </p>
    <p class="text">
      英语是一种多中心语言。由于英语的使用范围极为广泛，不可避免地出现了各种地区性变体。语言学家已经不再把伦敦或英国上层人士的英语作为唯一的标准英语。除英国英语外，最重大发展的是美国英语和纽澳英语。自从17、18世纪，美国英语、加拿大英语、澳大利亚英语、新西兰英语开始成为独特的方言。它们也各有自己的地区性的语词、语法和语音。其他像印度英语、东南亚英语、加勒比地区英语和非洲某些新兴国家的英语，都各自受到了当地语言影响、具有语音和词汇上的特点。
    </p>
    <p class="text">
      英语是一种多中心语言。由于英语的使用范围极为广泛，不可避免地出现了各种地区性变体。语言学家已经不再把伦敦或英国上层人士的英语作为唯一的标准英语。除英国英语外，最重大发展的是美国英语和纽澳英语。自从17、18世纪，美国英语、加拿大英语、澳大利亚英语、新西兰英语开始成为独特的方言。它们也各有自己的地区性的语词、语法和语音。其他像印度英语、东南亚英语、加勒比地区英语和非洲某些新兴国家的英语，都各自受到了当地语言影响、具有语音和词汇上的特点。
    </p>
    <p class="text">
      英语是一种多中心语言。由于英语的使用范围极为广泛，不可避免地出现了各种地区性变体。语言学家已经不再把伦敦或英国上层人士的英语作为唯一的标准英语。除英国英语外，最重大发展的是美国英语和纽澳英语。自从17、18世纪，美国英语、加拿大英语、澳大利亚英语、新西兰英语开始成为独特的方言。它们也各有自己的地区性的语词、语法和语音。其他像印度英语、东南亚英语、加勒比地区英语和非洲某些新兴国家的英语，都各自受到了当地语言影响、具有语音和词汇上的特点。
    </p>
  </div>
</template>

<script>
// const navbar = document.getElementById('navbar');
// const menu = document.getElementById('menu');
// console.log('window.scrollY', window.pageYOffset);
// console.log('menu.offsetTop', menu.offsetTop);
// if (window.scrollY >= menu.offsetTop) {
//   navbar.classList.add('sticky');
// } else {
//   navbar.classList.remove('sticky');
// }
export default {
  mounted() {
    // window.addEventListener('scroll', this.handleScroll, true);
  },
  methods: {
    listenWindow() {
      // window.onscroll = function () {
      //   console.log('this', this);
      //   console.log('window.scrollY', window.scrollY);
      //   if (window.scrollY >= this.refs.menu.offsetTop) {
      //     this.refs.navbar.classList.add('sticky');
      //   } else {
      //     this.refs.navbar.classList.remove('sticky');
      //   }
      // };
    },
    handleScroll() {
      const navbar = document.getElementById('navbar');
      const menu = document.getElementById('menu');
      console.log('window.scrollY', window.pageYOffset);
      console.log('menu.offsetTop', menu.offsetTop);
      if (window.pageYOffset >= menu.offsetTop) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
      // };
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'poppins';
}
.header {
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/images/image.png);
  background-position: center;
  background-size: cover;
}
nav {
  width: 100%;
  padding: 20px 0;
  text-align: center;
  ul {
    background: #000;
    width: 100%;
    margin-top: 10px;
    li {
      display: inline-block;
      margin: 20px 30px;
      color: #fff;
    }
  }
  .sticky {
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px 8%;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.logo {
  cursor: pointer;
}
.text {
  padding: 20px 8%;
}
</style>
