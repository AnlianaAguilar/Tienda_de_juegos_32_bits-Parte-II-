<template>
  <div class="container">
    <h1 class="subtitle">Lista de Juegos</h1>
    <div class="container_table">
      <table>
        <tr>
          <th>Codigo</th>
          <th>Color</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
        <tr
          v-for="game in juegos"
          :style="{ color: game.color }"
          :key="game.codigo"
        >
          <td>{{ game.codigo }}</td>
          <td>{{game.color}}
            <select v-model="game.color" @change="change($event,game.codigo)">
              <option 
              v-for="color in colors"
              :key="color.value"
              :value="color.value"
              >
              {{color.text}}
              </option>
            </select>
          </td>
          <td>{{ game.nombre }}</td>
          <td>{{ game.stock }}</td>
          <td>{{ Number(game.precio).toLocaleString("es-CL") }}</td>
          <td>
            <button @click="add(game.codigo)">+</button> 
            <button @click="remove(game.codigo)">-</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
//maphelper
import { mapState, mapActions } from "vuex";
export default {
  name: "GameList",
  // props: {},
  data: function () {
    return {
        colors:[
        {
        text:"Azul",
        value:"blue"
        },
        {
        text:"Rojo",
        value:"red"
        },
        {
        text:"Verde",
        value:"green"
        },
        {
        text:"Negro",
        value:"black"
        }
      ]
    };
  },
  computed: {
    ...mapState(["juegos"]),
    
  },
  methods: {
    
    change(event, codigo){
      let options = {codigo:codigo, value:event.target.value}      
      this.changeColor(options)
    },

    ...mapActions(['removeStock','changeColor','addStock']),
    remove(id){ 
      this.removeStock(id)      
    },

    add(id){
      alert(id)
      this.addStock(id)
    }

  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
.subtitle {
  font-size: 20px;
}

table,
th,
td {
  border: 1px solid black;
}

table {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
}
</style>