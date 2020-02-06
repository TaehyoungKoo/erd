<template>
  <div class='main-frame'>
    <div class='main-left'>
      <ul>
        <li><router-link to="/">Dashboard</router-link></li>
      </ul>
      <ul>
        <li><router-link to="/entity">Entities({{this.$store.state.entity.length}})</router-link></li>
        <li><router-link to="/attribute">Attribute</router-link></li>
        <li><router-link to="/domain">Domain</router-link></li>
      </ul>
      <ul>
        <li><router-link to="/word">Word</router-link></li>
        <li>Terms (00)</li>
        <li>Codes (00)</li>
      </ul>
      <ul>
        <li><router-link to="/singlePageSample">Single Page Sample</router-link></li>
      </ul>
    </div>
    <div class='main-right'>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      fileData: ''
    }
  },

  methods: {
    getFileContents: function () {
    }
  },
}
</script>

<style src="@/css/pc.css"></style>

<!--
<style media="screen and (max-width: 500px)" src="@/css/mobile.css"></style>
<style media="screen and (min-width: 501px) and (max-width: 1000px)" src="@/css/pad.css"></style>
-->
<style src="@/css/mobile.css"></style>
<style src="@/css/pad.css"></style>

<style>
</style>
