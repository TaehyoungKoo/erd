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
        <li>Words (00)</li>
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

<style>
body{
  font-family: Verdana, sans-serif;
  font-size: 14px;
}

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
  /*
  border-style: solid;
  border-width: 1px;
  border-color: aqua;
  */
}

.page-title{
  font-size: 20px;

  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: lightgrey;

  margin-bottom: 10px;
}
.page-body-list-detail {
  display: flex;
}
.list{
  width: 300px;  
}
.detail{
  width: 100%;
}

.field-group{
  display: flex;
  margin-bottom: 10px;
}
.field-label{
  width: 150px;
  font-weight: bold;
}
.field-controls{
  width: 100%;
}
.field-controls label{
  /* color: black; */
}
.button-group{
  width: 100%;
  text-align: right;
}
.button-group *{
  margin: 5px;
}

input{
  width: 200px;
  font-family: Verdana, sans-serif;
  font-size: 14px;
}
.checkbox-containter {
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /*
  border-style: solid;
  border-width: 1px;
  border-color: lightgrey;
  */
}
.checkbox-containter input{
  width: 20px;

  -ms-transform: scale(1.4); /* IE */
  -moz-transform: scale(1.4); /* FF */
  -webkit-transform: scale(1.4); /* Safari and Chrome */
  -o-transform: scale(1.4); /* Opera */
  transform: scale(1.4);
}
.checkbox-containter label{
  margin-left: 0px;
}
textarea{
  width: 100%;
  height: 70px;
  font-family: Verdana, sans-serif;
  font-size: 14px;
}
button {
  font-size: 14px;
  color: white;

  background-color:lightskyblue;
  border: none;
  
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  
  text-align: center;
}
ul {
    margin-top: 0px;
    padding-top: 0px;
    padding-left: 15px;
    list-style-type: disc;
}

.underline{
  text-decoration: underline;
}
.cursor-hand{
  cursor: pointer;
}
</style>
