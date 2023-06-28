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
      <!-- ↓↓ <myname><introduction><skills><contact>の要素を別ファイルにオブジェクト化・配列化し forEachメソッドを用いて展開-->
      <div class="myname">
        <h1>阿部亮則</h1>
        <p>-Abe Akinori-</p>
      </div>
      <div
        v-for="item in aboutItems"
        :key="item.introduction"
        class="introduction item"
      >
        <h2>{{ item.introduction.title }}</h2>
        <p>{{ item.introduction.content.maindescription }}</p>
        <p>
          <span>{{ item.introduction.content.subtitle }}</span
          ><br />
          {{ item.introduction.content.description }}
        </p>
      </div>
      <div class="skills item">
        <h2>Skill（スキル）</h2>
        <div class="skill">
          <img src="/images/htmlcss.png" alt="HTML5/CSS3" />
          <div class="skill-name">
            <p>HTML5/CSS3<br /><span>★★★★☆</span></p>
          </div>
          <div class="skill-desc">
            <p>
              基本的なコーディングに加え、GridLayoutやFlexboxによるレスポンシブ対応、Sassを用いたコーディングが可能です。エディタはVisualStudioCodeを使用しております。
            </p>
          </div>
        </div>
        <div class="skill">
          <img src="/images/js.png" alt="JavaScript" />
          <div class="skill-name">
            <p>JavaScript<br /><span>★★★☆☆</span></p>
          </div>
          <div class="skill-desc">
            <p>
              まだまだ学習途中ですが、データのやり取りやDOM操作などの基本的な操作が可能です。フレームワークは、このポートフォリオでも使用しているVue.jsやNuxt.jsを勉強しております。Node.jsやReact.jsは基礎学習の際に軽く触れました。今後は、TypeScriptにも手を伸ばしていきたいと考えております。
            </p>
          </div>
        </div>
        <div class="skill">
          <img src="/images/others.png" alt="" />
          <div class="skill-name">
            <p>今後学習予定<br /><span>☆☆☆☆☆</span></p>
          </div>
          <div class="skill-desc">
            <p>
              将来的にはフロントエンドだけでなく、バックエンドもこなせるフルスタックエンジニアを目指しているため、サーバーサイド言語のRubyやJAVA、PHP、また、データベースも学習予定です。
            </p>
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
        <p>
          ※ご連絡はTwitterのDM・<br class="br-sp" />Gmailにてお願いいたします。
        </p>
        <p>※GitHubにて作品のコードを<br class="br-sp" />公開中！</p>
      </div>
      <!-- ↑↑ -->
      <div class="twitter item">
        <h2>Twitter</h2>
        <a
          class="twitter-timeline"
          data-height="400"
          data-theme="dark"
          href="https://twitter.com/Akinori_99?ref_src=twsrc%5Etfw"
          >Tweets by Akinori_99
        </a>
      </div>
    </div>
    <nuxt-link to="/works" class="btn"> 作品を見る </nuxt-link>
  </div>
</template>

<script defer>
export default {
  data() {
    return {
      aboutItems: [],
    };
  },
  async mounted() {
    try {
      const response = await fetch("/about.json");
      this.aboutItems = await response.json();
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  },
};
</script>

<style lang="scss">
.about-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 0.5fr repeat(3, auto);
  gap: 20px 20px;
  grid-template-areas:
    "myimg        myimg        myname       myname       myname"
    "introduction introduction introduction introduction introduction"
    "skills       skills       skills       skills       skills"
    "contact      contact      contact      twitter      twitter";
  @include tb {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, auto);
    grid-template-areas:
      "myimg"
      "myname"
      "introduction"
      "skills"
      "contact"
      "twitter";
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
        color: rgb(136, 116, 1);
      }
    }
    .skill-desc {
      margin-left: 70px;
    }
  }
}
.contact {
  grid-area: contact;
  height: fit-content;
  @include contactLogo;
  p {
    margin: 15px 0;
  }
}
.twitter {
  grid-area: twitter;
  padding-top: 3.5%;
  @include sp {
    padding-top: 0;
  }
}
</style>
