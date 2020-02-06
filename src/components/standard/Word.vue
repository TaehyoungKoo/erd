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
                <th>Type</th>
                <th>Word</th>
              </tr>
            </thead>
            <tr v-for="word in this.$store.state.word" v-bind:key="word.word">
              <td>{{word.type}}</td>
              <td class="underline cursor-hand" @click="selectWord(word)">{{word.word}}</td>
            </tr>
          </table>
        </div>
        
        <div class='page-body-right'>
          
          <div class='field-group'>
            <div class='field-label'>
              <label>Type</label>
            </div>
            <div class='field-controls'>
              <div class='field-controls-horizental'>
                <div id='radio-button-container-noun' class='field-controls radio-button-container'>
                  <input v-model='this.selectedWord.type' type='radio' name='type' value='noun' checked>
                  <label>Noun</label>
                </div>
                <div id='radio-button-container-verb' class='field-controls radio-button-container'>
                  <input v-model='this.selectedWord.type' type='radio' name='type' value='verb'>
                  <label>Verb</label>
                </div>
              </div>
            </div>
          </div>

          <div class='field-group'>
            <div class='field-label'>
              <label>Word</label>
            </div>
            <div class='field-controls'>
              <input v-model="this.selectedWord.word" type='input' id='word'>
            </div>
          </div>

          <div class='field-group'>
            <div class='field-label'>
              <label>English</label>
            </div>
            <div class='field-controls'>
              <input v-model='this.selectedWord.english' type='input' id='english'>
            </div>
          </div>

          <div class='field-group'>
            <div class='field-label'>
              <label>English Abbreviation</label>
            </div>
            <div class='field-controls'>
              <input v-model='this.selectedWord.englishAbbreviation' type='input' id='englishAbbreviation'>
            </div>
          </div>

          <div class='field-group'>
            <div class='field-label'>
              <label>Definition</label>
            </div>
            <div class='field-controls'>
              <textarea v-model='this.selectedWord.definition' id='definition'></textarea>
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
      selectedWord:{},
    }
  },

  methods: {
    selectWord: function (word) {
      this.selectedWord = word
    },
  },
}
</script>