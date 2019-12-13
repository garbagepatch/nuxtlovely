<template>
  <div>
    <form class="uk-search uk-search-large uk-align-center uk-margin">
      <span uk-search-icon></span>
      <input class="uk-search-input" v-model="query" type="search" placeholder="Search...">
    </form>
    <div>
      <b-table sort-by.sync="sortBy" sort-desc.sync="sortDesc" responsive="sm" sticky-header striped hover :items="requests" :fields="fields" head-variant="dark"></b-table>
    </div>
  </div>
</template>

<script>
  import requestsQuery from '~/apollo/requests/requests'

  export default {
    data() {
      return {
        // Initialize an empty requests variabkle
        requests: [],
        sortBy: 'id',
        sortDesc: false,
        query: '',
        fields: [{key: 'id', sortable: true},{key: 'filtersize.Size', label: 'Filter Size', sortable: false}, {key: 'filtertype.Type', label: 'Filter Type', sortable: false}, {key: 'controllertype.controllerType', label:'Controller Type', sortable: false}, {key:'earlydue', label:'Earliest Due', sortable: true}, {key:'finaldue', label:'Final Due', sortable: true}, {key:'Email', sortable:true}, {key:'Status', sortable:true}]
      }
    },
    apollo: {
      requests: {
        prefetch: true,
        query: requestsQuery
      }
    },
    computed: {
      // Search system
      filteredList() {
        return this.requests.filter(request => {
          return request.id.toLowerCase().includes(this.query.toLowerCase())
        })
      },
    }
  }
</script>

<style scoped>

</style>
