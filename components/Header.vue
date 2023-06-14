<template>
  <header class="header">
    <div class="header-container">
      <!-- マイロゴ -->
      <div class="logo-container">
        <nuxt-link to="/" @click="closeMenu" class="logo-link">
          <img class="mylogo" src="~/assets/images/favicon.png" alt="favicon" />
          <div class="header-hero">Akinori'sPortfolio</div>
        </nuxt-link>
      </div>
      <!-- スライドメニュー -->
      <nav>
        <button class="btn-menu" @click="toggleMenu">
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="m4.25 8c0-.41421.33579-.75.75-.75h14c.4142 0 .75.33579.75.75s-.3358.75-.75.75h-14c-.41421 0-.75-.33579-.75-.75zm0 4c0-.4142.33579-.75.75-.75h14c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-14c-.41421 0-.75-.3358-.75-.75zm.75 3.25c-.41421 0-.75.3358-.75.75s.33579.75.75.75h14c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75z"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <div class="menu-panel" :class="{ 'menu-panel-open': isMenuOpen }">
          <button class="btn-menu" @click="toggleMenu">
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="m7.53033 6.46967c-.29289-.29289-.76777-.29289-1.06066 0s-.29289.76777 0 1.06066l4.46963 4.46967-4.46963 4.4697c-.29289.2929-.29289.7677 0 1.0606s.76777.2929 1.06066 0l4.46967-4.4696 4.4697 4.4696c.2929.2929.7677.2929 1.0606 0s.2929-.7677 0-1.0606l-4.4697-4.4697 4.4696-4.46967c.2929-.29289.2929-.76777 0-1.06066s-.7677-.29289-1.0606 0l-4.4697 4.46963z"
                fill-rule="evenodd"
              />
            </svg>
          </button>
          <ul class="menu-list">
            <li>
              <nuxt-link to="/" @click="closeMenu" active-class="active-link"
                >TOP</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/works"
                @click="closeMenu"
                active-class="active-link"
                >WORKS</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/about"
                @click="closeMenu"
                active-class="active-link"
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

<style lang="scss">
.header {
  z-index: 6;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}
.header-container {
  display: flex;
  align-items: center;
  height: 70px;
}

.logo-link {
  display: flex;
  align-items: center;
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
    font-family: "Pinyon Script", cursive;
    font-weight: normal;
    font-size: 1.8rem;
    @include sp {
      display: none;
    }
  }
}

/*
スライドメニュー
================================================ */
/* 開閉ボタン */
.btn-menu {
  position: fixed;
  right: 0.5rem;
  top: 0.1rem;
  z-index: 4;
  padding: 0.5rem 1rem;
  border: 1px solid var(--brown);
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  transition: 0.4s;
  svg {
    fill: var(--brown);
    margin-top: 0.25rem;
    height: 2rem;
    width: 2rem;
  }
}

/* スライドメニューパネル */
.menu-panel {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 6;
  padding: 8rem 2rem 2rem;
  width: max(26vw, 12rem);
  height: 100vh;
  background-color: var(--brown);
  box-shadow: 0 0 2rem var(--brown);
  font-family: var(--oswald-font);
  transform: translateX(100%);
  transition: transform 0.3s;
}

.menu-panel-open {
  transform: translateX(0);
  .menu-list li {
    opacity: 1;
  }
}

.menu-list {
  list-style: none;
  font-family: "Pinyon Script", cursive;
  li {
    margin: 1.5rem 0;
    opacity: 0;
    transition: opacity 0.4s;
  }
  a {
    color: var(--light-green);
    text-decoration: none;
    font-size: 1.8rem;
  }
  a.active-link {
    border-bottom: 2px solid var(--light-green);
  }
}

/* メニューオーバーレイ */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
