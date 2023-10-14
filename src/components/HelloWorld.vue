<template>
  <div class="hello">
    <ul>
      <div v-for="fruit in fruits" :key="fruit">
        
        <p>{{ fruit }}</p>
        <input type="text" />
      </div>
    </ul>
    <button @click="removeFruit()">削除</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: ["apple", "banana", "grape"],
    };
  },
  methods:{
    removeFruit(){
      this.fruits.shift();
    }
  }
};
</script>
