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
          <input v-model='name' type='input'>
        </div>
      </div>

      <div class='field-group'>
        <div class='field-label'>
          <label>Description</label>
        </div>
        <div class='field-controls'>
          <textarea v-model='description'></textarea>
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
      
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: '',
      description: '',
    }
  },

  methods: {
    saveEntity: function () {
      const entity = {
        name: this.name,
        description: this.description,
      }

      this.$store.state.entity.push(entity)
    },
  },
}
</script>