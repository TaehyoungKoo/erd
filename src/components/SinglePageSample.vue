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