<template>
  <footer>
    <div class="footer-container">
      <p>&copy;{{ new Date().getFullYear() }}　Abe Akinori</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);
  p {
    color: azure;
    font-family: "Pinyon Script", cursive;
    font-size: 1rem;
  }
}
.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4vh;
}
</style>
