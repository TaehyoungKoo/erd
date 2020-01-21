<template>
  <div>
    <div class='page-title'>
      Attribute
    </div>
    <div class='page-body'>
      
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
        </div>
        <div id='checkbox-container-primaryIdentifier' class='field-controls checkbox-containter'>
          <input v-model='primaryIdentifier' type='checkbox' id='primaryIdentifier' @change='checkPrimaryIdentifierChanged'>
          <label>Primary Identifier</label>
        </div>
      </div>

      <div class='field-group'>
        <div class='field-label'>
        </div>
        <div id='checkbox-container-notNull' class='field-controls checkbox-containter'>
          <input v-model='notNull' type='checkbox' id='notNull' :disabled='primaryIdentifier'>
          <label>NOT NULL</label>
        </div>
      </div>
      
      <div class='field-group'>
        <div class='field-label'>
          <label>Description</label>
        </div>
        <div class='field-controls'>
          <textarea id='description'></textarea>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      primaryIdentifier: false,
      notNull: false,
    }
  },

  methods: {
    checkPrimaryIdentifierChanged: function (event) {
      this.notNull = event.target.checked
    },
  },
}
</script>