<template>
    <div class="useradmin-container pt-5">
        <table class="table table-hover" vif="users">
  <thead>
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">FULLNAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">PASSWORD</th>
      <th scope="col">ROLE ID</th>
      <th scope="col">CREATED AT</th>
      <th scope="col">UPDATED AT</th>
      <th scope="col">Operations</th>
    </tr>
  </thead>
  <tbody  v-for="user in users" 
    :key="user.id" 
    :user="user">
    <tr>
      <th scope="row">{{user.id}}</th>
      <td><input type="text" name="" :value="user.fullname" disabled></td>
      <td><input type="text" name="" :value="user.email" disabled></td>
      <td><input type="text" name="" :value="user.password" disabled></td>
      <td><input type="text" name="" :value="user.role_id" disabled></td>
      <td><input type="text" name="" :value="user.createdAt" disabled></td>
      <td><input type="text" name="" :value="user.updatedAt" disabled></td>
    </tr>
  </tbody>
</table>

    </div>
</template>

<script>
    export default {
      computed: {
        users() {
            return this.$store.state.users;
        },
    },
    mounted() {
        this.$store.dispatch("getUsers");
    },
    }
</script>

<style scoped>

</style>