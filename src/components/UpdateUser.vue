<template>
    <div class="modal fade" style="color:black !important;" :id="`editUser`+user.id" tabindex="-1"
        :aria-labelledby="user.id+`EditLabel`" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content text-white">
                <div class="modal-header">
                    <h5 class="modal-title" :id="`editUserLabel`+user.id">Modal Title</h5>
                    <button type="button" :id="`editUserClose`+user.id" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <form method="PUT" @submit.prevent="editUser">
                        <label class="form-label">ID</label>
                        <input type="number" class="form-control" :value="user.id" readonly>
                        <label class="form-label">User Full Name</label>
                        <input type="text" class="form-control" v-model="user.fullname">
                        <label class="form-label">User Email</label>
                        <input type="text" class="form-control" v-model="user.email">
                        <label class="form-label">Password</label>
                        <input type="text" class="form-control" v-model="user.password">
                        <label class="form-label">Role ID</label>
                        <input type="number" class="form-control" v-model="user.role_id">
                        <label class="form-label">Phone No.</label>
                        <input type="text" class="form-control" v-model="user.phone">
                        <button type="button" class="btn btn-grad" @click="editUser(user.id)">Save Changes</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-grad" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    props: ['user'],
    methods: {
        editUser(id) {
            const payload = {
                id: id,
            };
            this.$store.dispatch('editUser', payload);
            document.getElementById(`editUserClose` + this.user.id).click();
        }
    }
}
</script>
    
<style scoped>

</style>