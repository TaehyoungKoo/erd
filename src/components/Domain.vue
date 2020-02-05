<template>
  <div>
    <div class='page-title'>
      Domain
    </div>
    <div class='page-body'>
      
      <div class='field-group'>
        <div class='field-label'>
          <label>유형</label>
        </div>
        <div class='field-controls'>
          <select name='domainType'>
            <option value='' selected>-- 선택 --</option>
            <option value='text'>텍스트</option>
            <option value='id'>아이디</option>
            <option value='code'>코드</option>
            <option value='number'>번호</option>
            <option value='date'>날짜</option>
            <option value='currency'>금액</option>
          </select>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },

  methods: {
  },
}
</script>