<template>
  <dialog>
    <div class='dialog-outer'>
      <div class='dialog-inner'>
        <div>ERD</div>
        <hr>
        <h3>{{this.message}}</h3>
        <br>
        <br>
        <div class='dialog-footer'>
          <button @click="closeDialog">확인</button>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script>
export default {
  props: {
    message: String
  },

  methods: {
    closeDialog: function() {
      const modal = document.querySelector('dialog')
      modal.close()
    },
  }
}
</script>

<style scoped>
dialog {
  width: 300px;
  height: auto;
  padding: 0;
  border: none;
  border-radius: 6px;
  -webkit-animation: appear 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
          animation: appear 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  box-shadow: 0 25px 40px -20px #3c4a56;
}

.dialog-outer {
  display: flex;
  flex-direction: column;
  color: #838282;
}

.dialog-inner {
  /* padding: 0 30px 30px 30px; */
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}

.dialog-footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

@-webkit-keyframes appear {
  from {
    opacity: 0;
    -webkit-transform: translateY(20px);
            transform: translateY(20px);
  }
  to {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}

@keyframes appear {
  from {
    opacity: 0;
    -webkit-transform: translateY(20px);
            transform: translateY(20px);
  }
  to {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}
@-webkit-keyframes dissappear {
  from {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  to {
    opacity: 0;
    -webkit-transform: translateY(20px);
            transform: translateY(20px);
  }
}
@keyframes dissappear {
  from {
    opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  to {
    opacity: 0;
    -webkit-transform: translateY(20px);
            transform: translateY(20px);
  }
}
</style>