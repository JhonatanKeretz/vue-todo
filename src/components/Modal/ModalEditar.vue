<template>
  <div>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
  
      <v-card>
        <v-card-title class="text-h5">
          Editar
        </v-card-title>
      <v-card-text
      class="mt-2"
      >Informe o novo Titulo</v-card-text>
        <v-text-field
        class="px-3"
            label="Novo Titulo"
            placeholder="Informe titulo"
            outlined
            v-model="tarefa.titulo"
          ></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="$emit('fechaModal')"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = true"
          >
            Editar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
props:['tarefa'],
       data () {
      return {
        dialog: true,
      }
    },
  }
</script>

<style>

</style>