<template>
  <footer :style="isIndex ? 'position: absolute; bottom: 0;' : ''">
    <p>&copy;{{ new Date().getFullYear() }}　Abe Akinori</p>
  </footer>
</template>

<script defer>
export default {
  computed: {
    isIndex() {
      return this.$route.name === 'index';
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);
  p {
    color: azure;
    font-family: 'Pinyon Script', cursive;
    font-size: 0.9rem;
  }
}
</style>
