<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success">Employees</p>
                <p class="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae ducimus voluptas
                    laudantium illo dolorum, quisquam vel aut odio fuga mollitia corrupti! Perferendis molestiae distinctio
                    sit quod, tempore provident perspiciatis dolore.</p>
            </div>
        </div>
    </div>

    <pre>{{ employees }}</pre>

    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <ul class="list-group">
                    <li v-for="employee of employees" :key="employee.id" class="list-group-item list-group-item-success">
                        <input @change="updateSelected(employee.id)" type="checkbox" class="form-check-input">
                        {{ employee.name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "EmployeeVue",
    data: function () {
        return {
            employees: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    isSelected: false
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                    isSelected: false
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "username": "Samantha",
                    "email": "Nathan@yesenia.net",
                    isSelected: false
                },
                {
                    "id": 4,
                    "name": "Patricia Lebsack",
                    "username": "Karianne",
                    "email": "Julianne.OConner@kory.org",
                    isSelected: false
                },
                {
                    "id": 5,
                    "name": "Chelsey Dietrich",
                    "username": "Kamren",
                    "email": "Lucio_Hettinger@annie.ca",
                    isSelected: false
                }

            ]
        }
    },
    methods: {
        updateSelected: function(empId) {
            this.employees = this.employees.map(employee => {
                if(employee.id === empId) {
                    return {
                        ...employee, isSelected : !employee.isSelected
                     }
                } else return employee;
            })
        }
    }
}
</script>
<style></style>