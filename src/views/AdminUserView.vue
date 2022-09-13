<template>
  <div class="useradmin-container pt-5 table-responsive bg-dark">
    <table class="table table-hover table-dark" vif="users">
      <thead>
        <tr class="text-warning">
          <th scope="col"><button name="" id="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createUser"><i class="fa fa-plus"
                aria-hidden="true"></i></button></th>
          <th scope="col">FULLNAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">PASSWORD</th>
          <th scope="col">ROLE ID</th>
          <th scope="col">CREATED AT</th>
          <th scope="col">UPDATED AT</th>
          <th scope="col">Operations</th>
        </tr>
      </thead>
      <tbody v-for="user in users" :key="user.id" :user="user">
        <UpdateUser :user="user" />
        <AddUser />
        <tr class="text-danger">
          <th scope="row">{{user.id}}</th>
          <td><input type="text" name="" :value="user.fullname" disabled></td>
          <td><input type="text" name="" :value="user.email" disabled></td>
          <td><input type="text" name="" :value="user.password" disabled></td>
          <td><input type="text" name="" :value="user.role_id" disabled></td>
          <td><input type="text" name="" :value="user.createdAt" disabled></td>
          <td><input type="text" name="" :value="user.updatedAt" disabled></td>
          <td>
            <button name="" id="" class="btn btn-primary" @click="this.$store.dispatch('deleteUser', user.id)"><i
                class="fa fa-trash" aria-hidden="true"></i></button>
            <button name="" id="" class="btn btn-primary"><i class="fa fa-cut" aria-hidden="true" data-bs-toggle="modal"
                :data-bs-target="`#editUser` + user.id"></i></button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import UpdateUser from '@/components/UpdateUser.vue';
import AddUser from '@/components/AddUser.vue';
export default {
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
  components: { UpdateUser, AddUser }
}
</script>

<style scoped>

</style>