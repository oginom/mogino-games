<template>
  <div class="hardle">
    <app-detail-template :app="app" />
  </div>
</template>

<script>
import AppDetailTemplate from "@/components/AppDetailTemplate.vue";

export default {
  name: "hardle",
  components: {
    AppDetailTemplate
  },
  data() {
    return {
      app: {
        title: "ハードなハードル走",
        description: "色々なハードルを乗り越え、どこまで進めるか！ついついハマっちゃうリズム系ミニゲーム",
        iconSrc: require("@/assets/hardle/icon_512.png"),
        itunesUrl: "https://itunes.apple.com/jp/app/id1023211616",
        gplayUrl: "https://play.google.com/store/apps/details?id=com.fc2.web.foxberry.ogino.Hardle&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
      }
    };
  }
};
</script>
