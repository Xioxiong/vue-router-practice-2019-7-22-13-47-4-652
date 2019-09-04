<template>
    <div class="counter-group">
        <h2>
            Counter Number:
            <span>{{counterNumber}}</span>
        </h2>
        <div class="counters">
            <Counter
                    v-for="(counter,index) in this.$store.state.counters"
                    :index="index"
                    :value="counter.value"
                    :key="index"
                    @update="handleValueChange"
            />
        </div>
        <CounterSum :counterSum="counterSum"></CounterSum>
    </div>
</template>

<script>
    import Counter from './Counter.vue'
    import CounterSum from './CounterSum.vue'

    export default {
        name: 'counter-group',
        components: {
            Counter,
            CounterSum
        },
        props: {
            counterNumber: Number
        },
        computed: {
            counterSum: function () {
                let sum = 0;
                this.$store.state.counters.forEach(element => {
                    sum = sum + element.value;
                });
                return sum;
            }
        },
        methods: {
            handleValueChange: function (index, value,) {
                this.$store.state.counters[index].value = value;
            }
        }
    }
</script>
