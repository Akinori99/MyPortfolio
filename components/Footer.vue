<template>
  <footer>
    <!-- ↓↓ Dateオブジェクトの.getYearメソッドを用いて表示させる -->
    <p>&copy; 2021 AbeAkinori</p>
    <!-- ↑↑ -->
  </footer>
</template>

<style lang="scss">
footer {
  display: flex;
  align-items: center;
  position: absolute;
  background: rgba(61, 47, 33, 0.6);
  height: 30px;
  margin: 0 auto;
  p {
    color: azure;
    font-size: 0.9rem;
  }
}
</style>
