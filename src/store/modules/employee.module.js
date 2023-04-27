import { EmployeeServices } from "@/services/EmployeeServices";

export default {
    namespaced: true,
    state: {
        employeesList: {
            employees: EmployeeServices.getAllEmployees()
        }
    },
    mutations: {
        UPDATE_SELECTED: function (state, payload) {
            state.employeesList.employees = state.employeesList.employees.map(employee => {
                if (employee.id === payload.empId) {
                    return {
                        ...employee, isSelected: !employee.isSelected
                    }
                } else return employee;
            });
        }
    },
    actions: {
        changeSelected: function ({ commit }, payload) {
            return commit("UPDATE_SELECTED", payload);
        }
    }
}
