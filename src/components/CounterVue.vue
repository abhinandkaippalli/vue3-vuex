<template>
<div class="container">
    <div class="row">
        <div class="col">
            <p class="h3 text-success">Counter</p>
            <p class="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima minus magnam mollitia accusamus, quis, atque consectetur cumque magni ipsa vero quibusdam assumenda officia error autem distinctio ad! Quod, quaerat dolore.</p>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-md-4">
            <div class="card shadow-lg">
                <div class="card-body">
                    <p class="h3 dispaly-3">{{ count }}</p>
                    <button class="btn btn-success m-1">Increment</button>
                    <button class="btn btn-warning m-1">Decrement</button>
                    <button class="btn btn-danger m-1">Increment By</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: "CounterVue",
    data: function () {
        return {
            count: 0
        }
    },
    methods: {
        clickIncrement: () => {
            this.count += 1;
        },
        clickDecrement: () => {
            this.count -= 1;
        },
        clickIncrementBy: (value) => {
            this.count += value;
        }
    }
}
</script>
<style></style>