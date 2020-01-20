<template>
  <div class='main-frame'>
    <div class='main-left'>
      <ul>
        <li><router-link to="/">Dashboard</router-link></li>
      </ul>
      <ul>
        <li><router-link to="/entity">Entities (00)</router-link></li>
        <li>Attributes (00)</li>
        <li>Domains (00)</li>
      </ul>
      <ul>
        <li>Words (00)</li>
        <li>Terms (00)</li>
        <li>Codes (00)</li>
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

<style>
.main-frame{
  display: flex;
}

.main-left{
  width: 200px;
  border-right-style: solid;
  border-right-width: 1px;
  border-right-color: antiquewhite;
}

.main-right{
  width: 100%;
  padding-left: 10px;
  /* border-style: solid;
  border-width: 1px;
  border-color: aqua; */
}
</style>
