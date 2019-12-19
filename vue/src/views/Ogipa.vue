<template>
  <div class="ogipa">
    <app-detail-template :app="app" />
  </div>
</template>

<script>
import AppDetailTemplate from "@/components/AppDetailTemplate.vue";

export default {
  name: "ogipa",
  components: {
    AppDetailTemplate
  },
  data() {
    return {
      app: {
        title: "OGIパズル",
        description: "アイテムを駆使してOGIを消せ！ほのぼのパズルゲーム",
        iconSrc: require("@/assets/ogipa/icon_512.png"),
        itunesUrl: "https://apps.apple.com/jp/app/ogiパズル/id1470582813"
      }
    };
  }
};
</script>
