export default {
    namespaced: true,
    state: {
        counter: {
            count: 0
        }
    },
    mutations: {
        INCR_COUNTER: function (state) {
            state.counter.count = state.counter.count + 1;
        },
        DECR_COUNTER: function (state) {
            state.counter.count--;
        },
        INCR_COUNTER_BY: function (state, payload) {
            state.counter.count += payload.value;
        }
    },
    actions: {}
}