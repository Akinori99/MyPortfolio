<!-- <template>
  <header>
    <div>
      <div>
        <nuxt-link to="/">
          <img class="mylogo" src="~/assets/images/favicon.ico" alt="favicon" />
        </nuxt-link>
      </div>
      スライドメニュー
      <nav>
        <button id="menu-open" class="btn-menu">
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>メニューを開く</title>
            <path
              clip-rule="evenodd"
              d="m4.25 8c0-.41421.33579-.75.75-.75h14c.4142 0 .75.33579.75.75s-.3358.75-.75.75h-14c-.41421 0-.75-.33579-.75-.75zm0 4c0-.4142.33579-.75.75-.75h14c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-14c-.41421 0-.75-.3358-.75-.75zm.75 3.25c-.41421 0-.75.3358-.75.75s.33579.75.75.75h14c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75z"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <div id="menu-panel">
          <button id="menu-close" class="btn-menu">
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>メニューを閉じる</title>
              <path
                clip-rule="evenodd"
                d="m7.53033 6.46967c-.29289-.29289-.76777-.29289-1.06066 0s-.29289.76777 0 1.06066l4.46963 4.46967-4.46963 4.4697c-.29289.2929-.29289.7677 0 1.0606s.76777.2929 1.06066 0l4.46967-4.4696 4.4697 4.4696c.2929.2929.7677.2929 1.0606 0s.2929-.7677 0-1.0606l-4.4696-4.4697 4.4696-4.46967c.2929-.29289.2929-.76777 0-1.06066s-.7677-.29289-1.0606 0l-4.4697 4.46963z"
                fill-rule="evenodd"
              />
            </svg>
          </button>
          <ul class="menu-list">
            <li><nuxt-link to="/">TOP</nuxt-link></li>
            <li><nuxt-link to="/works">WORKS</nuxt-link></li>
            <li><nuxt-link to="/about">ABOUT</nuxt-link></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<script> -->
<!-- // ==========スライドメニュー===========
const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const menuPanel = document.querySelector("#menu-panel");
const menuItems = document.querySelectorAll("#menu-panel li");
const menuOptions = {
  duration: 1400,
  easing: "ease",
  fill: "forwards",
};

// メニューを開く
menuOpen.addEventListener("click", () => {
  menuPanel.animate({ translate: ["100vw", 0] }, menuOptions); -->
<!-- // リンクをひとつずつ順に表示 -->
<!-- menuItems.forEach((menuItem, index) => {
    menuItem.animate(
      {
        opacity: [0, 1],
        translate: ["2rem", 0],
      },
      {
        duration: 2400,
        delay: 100 * index,
        easing: "ease",
        fill: "forwards",
      }
    );
  });
});

// メニューを閉じる
menuClose.addEventListener("click", () => {
  menuPanel.animate({ translate: [0, "100vw"] }, menuOptions);
  menuItems.forEach((menuItem) => {
    menuItem.animate({ opacity: [1, 0] }, menuOptions);
  });
});
</script> -->
<template>
  <header>
    <div>
      <div>
        <nuxt-link to="/">
          <img class="mylogo" src="~/assets/images/favicon.ico" alt="favicon" />
        </nuxt-link>
      </div>
      <!-- スライドメニュー -->
      <nav ref="menuPanelRef">
        <button class="btn-menu" @click="openMenu">
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>メニューを開く</title>
            <path
              clip-rule="evenodd"
              d="m4.25 8c0-.41421.33579-.75.75-.75h14c.4142 0 .75.33579.75.75s-.3358.75-.75.75h-14c-.41421 0-.75-.33579-.75-.75zm0 4c0-.4142.33579-.75.75-.75h14c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-14c-.41421 0-.75-.3358-.75-.75zm.75 3.25c-.41421 0-.75.3358-.75.75s.33579.75.75.75h14c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75z"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <div ref="menuPanelContentRef">
          <button class="btn-menu" @click="closeMenu">
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>メニューを閉じる</title>
              <path
                clip-rule="evenodd"
                d="m7.53033 6.46967c-.29289-.29289-.76777-.29289-1.06066 0s-.29289.76777 0 1.06066l4.46963 4.46967-4.46963 4.4697c-.29289.2929-.29289.7677 0 1.0606s.76777.2929 1.06066 0l4.46967-4.4696 4.4697 4.4696c.2929.2929.7677.2929 1.0606 0s.2929-.7677 0-1.0606l-4.4696-4.4697 4.4696-4.46967c.2929-.29289.2929-.76777 0-1.06066s-.7677-.29289-1.0606 0l-4.4697 4.46963z"
                fill-rule="evenodd"
              />
            </svg>
          </button>
          <ul class="menu-list">
            <li><nuxt-link to="/">TOP</nuxt-link></li>
            <li><nuxt-link to="/works">WORKS</nuxt-link></li>
            <li><nuxt-link to="/about">ABOUT</nuxt-link></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";

export default {
  mounted() {
    const menuPanel = this.$refs.menuPanelRef;
    const menuPanelContent = this.$refs.menuPanelContentRef;
    const menuItems = menuPanelContent.querySelectorAll("li");

    const menuOptions = {
      duration: 1400,
      easing: "ease",
      fill: "forwards",
    };

    // メニューを開く
    this.openMenu = () => {
      menuPanel.animate({ translate: ["100vw", 0] }, menuOptions);
      // リンクをひとつずつ順に表示
      menuItems.forEach((menuItem, index) => {
        menuItem.animate(
          {
            opacity: [0, 1],
            translate: ["2rem", 0],
          },
          {
            duration: 2400,
            delay: 100 * index,
            easing: "ease",
            fill: "forwards",
          }
        );
      });
    };

    // メニューを閉じる
    this.closeMenu = () => {
      menuPanel.animate({ translate: [0, "100vw"] }, menuOptions);
      menuItems.forEach((menuItem) => {
        menuItem.animate({ opacity: [1, 0] }, menuOptions);
      });
    };
  },
};
</script>

<style lang="scss">
.mylogo {
  height: 55px;
  position: relative;
  top: 0;
  margin: 0 10px;
}

/*
SLIDE MENU
================================================ */
/* 開閉ボタン */
.btn-menu {
  position: fixed;
  right: 1rem;
  top: 1rem;
  z-index: 4;
  padding: 0.5rem 1rem;
  border: 1px solid var(--brown);
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  transition: 0.4s;
}
.btn-menu svg {
  fill: var(--brown);
  margin-top: 0.25rem;
  height: 2rem;
  width: 2rem;
}

/* 閉じるボタン */
#menu-close {
  border: 1px solid var(--light-green);
}
#menu-close svg {
  fill: var(--light-green);
}

/* スライドメニューパネル */
#menu-panel {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 4;
  padding: 8rem 2rem 2rem;
  width: max(32vw, 20rem);
  height: 100vh;
  background-color: var(--brown);
  box-shadow: 0 0 2rem var(--brown);
  font-family: var(--oswald-font);
  translate: 100vw;
}
.menu-list {
  list-style: none;
}
.menu-list li {
  margin: 1.5rem 0;
  opacity: 0;
}
.menu-list a {
  color: var(--light-green);
  text-decoration: none;
  font-size: 2rem;
}
</style>
