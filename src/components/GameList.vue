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
          <td>
            <select v-model="game.color" @change="change($event,game.codigo)"> <!--v-model no sera una data ya que el valor ya viene con el v-for-->
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
        colors:[ //es el listado qeu se muestra en la options
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
    ...mapActions(['removeStock','changeColor','addStock']),
    
    change(event, codigo){
      let options = {codigo:codigo, value:event.target.value}    // se crea ya que las action solo pueden recibir 1 valor
      this.changeColor(options)                                  // y para realizar el cambio se requier de identificador y el valor que selecciona el usuario
    },
    
    remove(id){ 
      this.removeStock(id)      
    },

    add(id){
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