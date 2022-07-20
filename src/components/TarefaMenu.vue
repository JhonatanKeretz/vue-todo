<template>
  <div>
    <v-menu
      top
      :close-on-click="closeOnClick"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          icon
        >
       <v-icon>
          mdi-dots-vertical
        </v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="item.click()"
        >
        <v-icon left>
         {{ item.icone }}
        </v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <ModalEditar
    v-if="items[0].modal"
    @fechaModal="items[0].modal = false"
    :tarefa="tarefa"
    />
  </div>
</template>

<script>
import ModalEditar from './Modal/ModalEditar.vue';
export default {
components:{ ModalEditar },
    data: () => ({
      items: [
    { 
        icone:"mdi-grease-pencil", 
        title: 'Editar',
        modal: false,
        click(){
            console.log("editar");
            this.modal = true;
        }
    },

    { 
        icone: "mdi-delete", 
        title: 'Deletar',
        click(){
            console.log("excluir");
        }
    },
        
       
      ],
      closeOnClick: true,
    }),
   
  }
</script>

}

<style>

</style>