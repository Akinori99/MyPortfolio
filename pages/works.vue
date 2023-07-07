<template>
  <div class="wrapper works">
    <div class="title">
      <h1>Works</h1>
      <p>-作品-</p>
      <div class="scroll"><span>Scroll</span></div>
    </div>
    <div class="content">
      <div class="works-grid">
        <div v-for="item in workItems" :key="item.title" class="item">
          <a :href="item.siteURL"
            ><img :src="item.imgSrc" class="item-img" alt=""
          /></a>
          <h2>{{ item.title }}</h2>
          <div class="work-desc">
            <p>
              {{ item.description }} <br /><a
                v-if="item.ReferenceURL"
                :href="item.ReferenceURL"
                >※ {{ item.ReferenceURL }}</a
              >
            </p>
            <h3>開発言語</h3>
            <p>{{ item.developmentLanguage }}</p>
            <h3>サイトURL</h3>
            <p>
              <a :href="item.siteURL">{{ item.siteURL || item.siteURLnot }}</a>
            </p>
            <h3>コード</h3>
            <p>
              <a :href="item.codeURL">{{ item.codeURL || item.codeURLnot }}</a>
            </p>
            <h3>作成日</h3>
            <p v-html="item.createdDate"></p>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/about" class="btn"> 自己紹介へ </router-link>
  </div>
</template>
<script defer>
export default {
  data() {
    return {
      workItems: [],
    };
  },
  async mounted() {
    try {
      const response = await fetch("/works.json");
      this.workItems = await response.json();
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  },
};
</script>

<style lang="scss">
.works-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 35px 25px;
  margin: 20px 0;
  @include tb {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
  }
  a:hover {
    color: currentColor;
  }
}
.item-img {
  display: flex;
  width: 450px;
  height: 250px;
  margin-bottom: 10px;
  @include sp {
    width: 330px;
    height: 180px;
  }
}
.work-desc {
  text-align: left;
  h3 {
    font-size: 1.5rem;
    border-left: 8px solid rgb(3, 34, 138);
    border-radius: 20px;
    padding-left: 15px;
  }
  p {
    padding: 15px 25px 30px;
  }
}
</style>
