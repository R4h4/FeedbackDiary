<template>
  <div id="teams">
    <v-layout>
      <MemberList members="members" />
    </v-layout>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import MemberList from '~/components/MemberList.vue'

  interface Member {
    name: string
    position: string
    icon: string
  }

  @Component({
    components: {
      MemberList
    }
  })
  export default class TeamsPage extends Vue {
    members: Member[] = [
      {
        name: 'Karsten',
        position: 'Data Scientist',
        icon: 'mdi-minus'
      }
    ]
  }
</script>

<style scoped>

</style>
