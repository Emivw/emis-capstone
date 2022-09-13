<template>
    <!-- Modal -->
    <div class="modal fade" id="createUser" tabindex="-1" aria-labelledby="createUserLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="createUserLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form method="PUT" @submit.prevent="createUser">
                        <label class="form-label">ID</label>
                        <label class="form-label">User Full Name</label>
                        <input type="text" class="form-control" v-model="fullname" placeholder="Full Name">
                        <label class="form-label">User Email</label>
                        <input type="text" class="form-control" v-model="email" placeholder="Email">
                        <label class="form-label">Password</label>
                        <input type="text" class="form-control" v-model="password" placeholder="Password">
                        <label class="form-label">Role ID</label>
                        <input type="number" class="form-control" v-model="role_id"
                            placeholder="Role id {admin = 1, user = 3}">
                        <label class="form-label">Phone No.</label>
                        <input type="text" class="form-control" v-model="phone" placeholder=" phone No. (010) 222 3333">
                        <button type="button" class="btn btn-grad" @click="createUser">Save</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            fullname: "",
            password: "",
            phone: "",
            role_id: "",
            email: "",
        };
    },
    computed: {
        Users() {
            return this.$store.state.Users;
        }
    },
    mounted() {
        this.$store.dispatch("getUsers");
    },
    methods: {
        createUser() {
            const payload = {
                role_id: this.role_id,
                fullname: this.fullname,
                email: this.email,
                password: this.password,
                phone: this.phone,
            };
            this.$store.dispatch("createUser", payload);
        },
    }
}
</script>
    
<style scoped>

</style>