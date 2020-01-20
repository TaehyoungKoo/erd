<template>
  <div>

    <div class='page'>
      <div class='page-title'>
        Entities({{this.$store.state.entity.length}})
      </div>
      <div class='page-body-list-detail'>
        
        <div class='list'>
          <ul>
            <li v-for='(entity, index) in this.$store.state.entity' 
                v-bind:key='entity.name'
                class='underline cursor-hand'
                @click='getEntity(index)'>
              [{{index + 1}}] {{entity.name}}
            </li>
          </ul>
        </div>

        <div class='detail'>
          <div class='field-group'>
            <div class='field-label'>
              <label>Name</label>
            </div>
            <div class='field-controls'>
              <div v-if='detailStatus === "R"'>
                <label>{{name}}</label>
              </div>
              <div v-else>
                <input v-model='name' type='input' id='name'>
              </div>
            </div>
          </div>
          <div class='field-group'>
            <div class='field-label'>
              <label>Description</label>
            </div>
            <div class='field-controls'>
              <div v-if='detailStatus === "R"'>
                <label>{{description}}</label>
              </div>
              <div v-else>
                <textarea v-model='description'></textarea>
              </div>
            </div>
          </div>
          <div class='button-group'>
            <button v-if='detailStatus === "R"' @click='addEntity'>Add</button>
            <button v-if='detailStatus === "R"' @click='editEntity'>Edit</button>
            <button v-if='detailStatus !== "R"' @click='saveEntity'>Save</button>
          </div>
        </div>
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
      selectedIndex: 0,
      detailStatus: 'R', //Readonly, Edit, New
    }
  },

  methods: {
    getEntity: function (index) {
      this.name = this.$store.state.entity[index].name
      this.description = this.$store.state.entity[index].description
      this.detailStatus = 'R'
      this.selectedIndex = index
    },

    editEntity: function () {
      this.detailStatus = 'E'
    },

    addEntity: function () {
      this.detailStatus = 'N'
      
      this.name = ''
      this.description = ''
      document.getElementById('name').focus()
    },

    saveEntity: function () {
      if(this.detailStatus === 'N'){
        const entity = {
          name: this.name,
          description: this.description,
        }

        this.$store.state.entity.push(entity)
      }else if(this.detailStatus === 'E'){
        this.$store.state.entity[this.selectedIndex].name = this.name
        this.$store.state.entity[this.selectedIndex].description = this.description
      }

      this.detailStatus = 'R'
    },
  },
}
</script>