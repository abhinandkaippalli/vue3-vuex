<template lang="">
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <div class="h3 text-success">User List</div>
                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repellendus maxime eaque! 
                    Voluptatem autem quas deleniti eos, dicta molestiae, velit voluptas quidem unde officiis doloribus aut earum quam necessitatibus 
                    dolorem?
                </p>
            </div>
        </div>   
    </div>

    <div class="container" v-if="loading">
        <div class="row">
            <div class="col">
                <SpinnerVue />
            </div>
        </div>
    </div>

    <div class="container" v-if="!loading && errorMessage">
        <div class="row">
            <div class="col">
                <p class="fw-bold text-danger">{{ errorMessage }}</p>
            </div>
        </div>
    </div>

    <div v-if="!loading && users.length > 0" class="container">
        <div class="row">
            <div class="col">
                <table class="table table-hover text-center text-striped">
                    <thead class="bg-secondary text-white">
                        <tr>
                            <th>SNO</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Company</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td>{{ user.id }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.website }}</td>
                            <td>{{ user.company.name }}</td>
                            <td>{{ user.address.city }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import SpinnerVue from './SpinnerVue.vue';

export default {
    name: "userList",
    comments: { SpinnerVue },
    data: function () {
        return {
            loading: false,
            users: [],
            errorMessage: null
        }
    },
    created: async function () {
        try {
            this.loading = true;
            let dataURL = `https://jsonplaceholder.typicode.com/users`;
            let res = await axios.get(dataURL);
            this.users = res.data;
            this.loading = false;
        } catch (error) {
            this.loading = false;
            this.errorMessage = error;
        }
    }
}
</script>
<style lang="">
    
</style>