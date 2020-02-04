<template>
  <div class='page'>
    <div class='page-title'>
      Single Detail
    </div>
    <div class='page-body'>
      
      <div class='field-group'>
        <div class='field-label'>
          <label>Name</label>
        </div>
        <div class='field-controls'>
          <input type='input'>
        </div>
      </div>

      <div class='field-group'>
        <div class='field-label'>
          <label>Description</label>
        </div>
        <div class='field-controls'>
          <textarea></textarea>
        </div>
      </div>
      
      <div class='field-group'>
        <div class='field-label'>
          <label>Checkbox</label>
        </div>
        <div id='checkbox-container-primaryIdentifier' class='field-controls'>
          <input type='checkbox' id='primaryIdentifier' checked disabled>
          <label>Primary Identifier</label>
        </div>
      </div>

      <div class='field-group'>
        <div class='field-label'>
          <label>RadioButton</label>
        </div>
        <div id='radio-button-container-testRadio' class='field-controls'>
          <input type='radio' checked>
          <label>Radio1</label>
        </div>
      </div>

      <div class='button-group'>
        <button @click='saveEntity'>Save</button>
      </div>

      <input v-model='valueA' type='input' id='inputA'><br>
      <input v-model='valueB' type='input' id='inputB'><br>
      <button @click='multiply'>곱하기</button><br>
      <label>{{resultMultiply}}</label>
      
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      valueA: 0,
      valueB: 0,
      resultMultiply: 0,
    }
  },

  methods: {
    
    saveEntity: function () {
    },

    multiply: function () {
      this.resultMultiply = this.valueA * this.valueB
    },

  },
}
</script>