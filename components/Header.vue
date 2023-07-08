<template>
  <header>
    <div class="header-container">
      <!-- マイロゴ -->
      <div class="logo-container">
        <nuxt-link to="/" class="logo-link" @click="closeMenu">
          <img class="mylogo" src="/images/favicon.png" alt="favicon" />
          <div class="header-hero">Akinori'sPortfolio</div>
        </nuxt-link>
      </div>
      <!-- スライドメニュー -->
      <nav>
        <button class="btn-menu" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M4.25 8c0-.41421.33579-.75.75-.75h14c.4142 0 .75.33579.75.75s-.3358.75-.75.75h-14c-.41421 0-.75-.33579-.75-.75zm0 4c0-.4142.33579-.75.75-.75h14c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-14c-.41421 0-.75-.3358-.75-.75zm.75 3.25c-.41421 0-.75.3358-.75.75s.33579.75.75.75h14c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75z"
            />
          </svg>
        </button>
        <div :class="{ 'menu-panel-open': isMenuOpen }" class="menu-panel">
          <button class="btn-menu" @click="toggleMenu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M7.53033 6.46967c-.29289-.29289-.76777-.29289-1.06066 0s-.29289.76777 0 1.06066l4.46963 4.46967-4.46963 4.4697c-.29289.2929-.29289.7677 0 1.0606s.76777.2929 1.06066 0l4.46967-4.4696 4.4697 4.4696c.2929.2929.7677.2929 1.0606 0s.2929-.7677 0-1.0606l-4.4697-4.4697 4.4696-4.46967c.2929-.29289.2929-.76777 0-1.06066s-.7677-.29289-1.0606 0l-4.4697 4.46963z"
              />
            </svg>
          </button>
          <ul class="menu-list">
            <li>
              <nuxt-link to="/" active-class="active-link" @click="closeMenu"
                >TOP</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/works"
                active-class="active-link"
                @click="closeMenu"
                >WORKS</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/about"
                active-class="active-link"
                @click="closeMenu"
                >ABOUT</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="menu-overlay" @click="closeMenu" v-if="isMenuOpen"></div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  z-index: 6;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  font-family: "Pinyon Script", cursive;
  .header-container {
    display: flex;
    align-items: center;
    height: 4rem;
    .logo-container {
      .logo-link {
        display: flex;
        align-items: center;
        opacity: 1;
        .mylogo {
          height: 55px;
          position: relative;
          top: 0.1rem;
          left: 0.5rem;
          margin-right: 0.8rem;
        }
        .header-hero {
          display: inline-block;
          color: azure;
          text-shadow: 0 0 10px #ff0;
          font-weight: normal;
          font-size: 1.8rem;
          @include sp {
            display: none;
          }
        }
      }
    }
  }
  .btn-menu {
    position: fixed;
    right: 0.5rem;
    top: 0.1rem;
    z-index: 4;
    padding: 0.5rem 1rem;
    height: 4rem;
    width: 4rem;
    transition: 0.3s;
    svg {
      fill: var(--white);
      height: 2rem;
      width: 2rem;
    }
  }
  .menu-panel {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 6;
    padding: 8rem 2rem 2rem;
    width: 15rem;
    height: 100vh;
    background-color: var(--brown);
    box-shadow: 0 0 2rem var(--brown);
    transform: translateX(100%);
    transition: transform 0.4s;
    &.menu-panel-open {
      transform: translateX(0);
      .menu-list li {
        opacity: 1;
        // 以下動くように修正
        animation: 1400ms ease forwards;
      }
    }
    .menu-list {
      list-style: none;
      li {
        margin: 2rem 0;
        transition: 0.4s;
      }
      a {
        color: var(--light-green);
        text-decoration: none;
        font-size: 1.8rem;
        opacity: 0.5;
      }
      a.active-link {
        color: var(--green);
        opacity: 1;
      }
    }
  }
  .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
