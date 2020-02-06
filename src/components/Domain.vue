<template>
  <div>
    <div class='page-title'>
      Domain
    </div>
    <div class='page-body'>
      
      <div class='field-group'>
        <div class='field-label'>
          <label>Type</label>
        </div>
        <div class='field-controls'>
          <select name='domainType'>
            <option value='' selected>SELECT</option>
            <option value='text'>Text</option>
            <option value='id'>ID</option>
            <option value='code'>Code</option>
            <option value='number'>Number</option>
            <option value='date'>Date</option>
            <option value='currency'>Currency</option>
          </select>
        </div>
      </div>

      <div class='field-group'>
        <div class='field-label'>
          <label>Name</label>
        </div>
        <div class='field-controls'>
          <input v-model="domainName" type='input' id='name'>
        </div>
      </div>

      <div class='field-group'>
        <div class='field-label'>
          <label>Description</label>
        </div>
        <div class='field-controls'>
          <input v-model="domainDescription" type='input' id='description'>
        </div>
      </div>

      <div class='button-group'>
        <button @click='saveDomain'>Save</button>
      </div>

    </div>

    <Dialog :message='message'/>

  </div>
</template>

<script>
import Dialog from '@/components/popup/Dialog'

export default {
  components: {
    Dialog
  },

  data: function () {
    return {
      message: '',
      domainName: '',
      domainDescription: '',
    }
  },

  methods: {
    saveDomain: function () {
      if(this.domainName === ''){
        this.message = 'Domain Name을 입력하세요'
        this.showAlert()
      }else if(this.domainDescription === ''){
        this.message = 'Domain Description을 입력하세요'
        this.showAlert()
      }
    },

    showAlert: function() {
      const modal = document.querySelector('dialog')

      if(modal !== null)
        modal.showModal()
    },
  },
}
</script>