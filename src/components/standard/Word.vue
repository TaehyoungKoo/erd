<template>
  <div>
    <div class='page-title'>
      Word
    </div>

    <div class='page-body'>
      <div class='page-body-frame'>
        <div class='page-body-left'>
          <table>
            <thead>
              <tr>
                <th>Word</th>
              </tr>
            </thead>
            <tr v-for="word in this.$store.state.word" v-bind:key="word.name">
              <td>{{word.name}}</td>
            </tr>
          </table>
        </div>
        <div class='page-body-right'>
          
          <div class='field-group'>
            <div class='field-label'>
              <label>Name</label>
            </div>
            <div class='field-controls'>
              <input type='input' id='name'>
            </div>
          </div>

          <div class='field-group'>
            <div class='field-label'>
              <label>Name</label>
            </div>
            <div class='field-controls'>
              <input type='input' id='name'>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- <Dialog :message='message'/> -->

  </div>
</template>

<script>
//import Dialog from '@/components/popup/Dialog'

export default {
  components: {
    //Dialog,
  },

  data: function () {
    return {
      message: '',
    }
  },

  methods: {
  },
}
</script>