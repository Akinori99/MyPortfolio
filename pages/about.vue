<template>
  <div class="wrapper about">
    <div class="title">
      <h1>About</h1>
      <p>-自己紹介-</p>
      <div class="scroll"><span>Scroll</span></div>
    </div>
    <div class="content about-grid">
      <div class="myimg">
        <img src="/images/myface.jpg" alt="myface" />
      </div>
      <div class="myname">
        <h1>阿部亮則</h1>
        <p>-Abe Akinori-</p>
      </div>

      <div class="introduction item">
        <h2>Introduction<br class="br-sp" />（自己紹介）</h2>
        <p v-for="item in introductionItems" :key="item.title">
          <span>{{ item.title }}</span
          ><br />
          {{ item.description }}
        </p>
      </div>

      <div class="skills item">
        <h2>Skill（スキル）</h2>

        <div v-for="skill in skillItems" :key="skill.name" class="skill">
          <img :src="skill.imgSrc" :alt="skill.name" />
          <div class="skill-name">
            <p>
              {{ skill.name }}<br /><span>{{ skill.rating }}</span>
            </p>
          </div>
          <div class="skill-desc">
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </div>

      <div class="contact item">
        <h2>Contact（連絡先）</h2>
        <div class="contact-logo">
          <a href="https://github.com/Akinori99"
            ><img src="/images/github.png" alt="GitHub"
          /></a>
          <a href="mailto:akinori.work99@gmail.com"
            ><img src="/images/gmail.png" alt="Gmail"
          /></a>
          <a href="https://twitter.com/Akinori_99?ref_src=twsrc%5Etfw"
            ><img src="/images/twitter.png" alt="Twitter"
          /></a>
        </div>
        <p>※ご連絡はTwitterのDMまたは、Gmailにてお願いいたします。</p>
        <p>※GitHubにて作品のコードを公開中！</p>
      </div>
    </div>
    <nuxt-link to="/works" class="btn"> 作品を見る </nuxt-link>
  </div>
</template>

<script defer>
export default {
  data() {
    return {
      introductionItems: [],
      skillItems: [],
    };
  },
  async mounted() {
    try {
      const introductionResponse = await fetch("/introduction.json");
      const skillsResponse = await fetch("/skills.json");
      this.introductionItems = await introductionResponse.json();
      this.skillItems = await skillsResponse.json();
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  },
};
</script>

<style lang="scss">
.about-grid {
  display: grid;
  grid-template-columns: repeat(2);
  grid-template-rows: 0.5fr repeat(3);
  gap: 20px;
  grid-template-areas:
    "myimg        myname"
    "introduction introduction"
    "skills       skills"
    "contact      contact";
  @include tb {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6);
    grid-template-areas:
      "myimg"
      "myname"
      "introduction"
      "skills"
      "contact";
  }
  .myimg {
    grid-area: myimg;
    img {
      width: 250px;
      border-radius: 50%;
      border: 10px solid black;
    }
  }
  .myname {
    grid-area: myname;
    padding-top: 45px;
    margin-bottom: 20px;
    h1 {
      display: inline-block;
      font-family: "Shippori Mincho B1", serif;
      font-size: 5.5rem;
    }
    p {
      font-size: 2rem;
    }
    @include tb {
      padding-top: 0;
      margin-bottom: 90px;
      height: 93px;
      h1 {
        font-size: 4rem;
      }
      p {
        font-size: 1.5rem;
      }
    }
  }
}
.introduction {
  grid-area: introduction;
  height: fit-content;
  p {
    text-align: left;
    padding: 15px 20px;
    span {
      display: inline-block;
      border-bottom: 1px solid black;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}
.skills {
  grid-area: skills;
  .skill {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    padding: 15px 0;
    img {
      width: 60px;
      height: 60px;
    }
    .skill-name {
      font-weight: bold;
      margin-left: 15px;
      span {
        color: rgb(165, 143, 18);
      }
    }
    .skill-desc {
      margin-left: 70px;
    }
  }
}

.contact {
  grid-area: contact;
  text-align: center;
  height: fit-content;
  @include contactLogo;
  p {
    text-align: left;
    padding: 0 20px;
    margin: 15px 0;
  }
}
</style>
