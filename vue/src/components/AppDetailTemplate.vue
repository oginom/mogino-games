<template>
  <div class="app-detail">
    <h1 class="gamenamecolor">{{ app.title }}</h1>
    <div align="center">
      <img :src="app.iconSrc" width="50%" />
    </div>
    <p>{{ app.description }}</p>
    <div align="center">
      <template v-if="app.itunesUrl">
        <a
          :href="app.itunesUrl"
          style="display:inline-block;overflow:hidden;background:url(//linkmaker.itunes.apple.com/assets/shared/badges/ja-jp/appstore-lrg.svg) no-repeat;width:54vw;height:16vw;background-size:contain;"
        ></a>
        <br />
      </template>
      <template v-if="app.gplayUrl">
        <a :href="app.gplayUrl">
          <img
            alt="Google Play で手に入れよう"
            src="https://play.google.com/intl/en_us/badges/images/generic/ja_badge_web_generic.png"
            style="width:62vw"
          />
        </a>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Dictionary } from "vue-router/types/router";

@Component
export default class HelloWorld extends Vue {
  @Prop() private app!: object;
}
</script>

<style scoped lang="scss">
.gamenamecolor {
  background: #f92;
  color: #000;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
