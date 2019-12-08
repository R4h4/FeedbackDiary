<template>
  <v-card
    max-width="600"
    class="mx-auto"
  >
    <v-list two-line subheader>
      <v-subheader inset>
        Folders
      </v-subheader>

      <v-list-item
        v-for="member in members"
        :key="member.title"
      >
        <v-list-item-avatar>
          <v-icon
            :class="[member.icon]"
            v-text="member.icon"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="member.name" />
          <v-list-item-subtitle v-text="member.position" />
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">
              mdi-information
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

interface Member {
  name: string
  position: string
  icon: string
}

@Component
export default class MemberList extends Vue {
  @Prop({ type: Array, required: true }) readonly members!: Member[]
}
</script>

<style scoped>

</style>
