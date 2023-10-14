<template>
  <div>
    <table>
      <thead>
        <tr>
          <th class="id">ID</th>
          <th class="comment">コメント</th>
          <th class="state">状態</th>
          <th class="button">-</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="item.id">
        {{ item.id }}
        
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    todos:[]
  },

};
</script>
