<template>
    <v-container>
        <v-layot row>
            <v-flex xs12 sm6 offset-sm3>
                <v-list two-line subheader>
                    <h1 class="text--secondary" mb-3>Orders</h1>
                    <v-list-tile avatar v-for="order in orders" :key="order.id" :input-value="order.done">
                        <v-list-tile-action>
                            <v-checkbox @change="markDone(order)"></v-checkbox>
                        </v-list-tile-action>
                        <v-list-tile-content @click="notifications = !notifications">
                            <v-list-tile-title>{{ order.name }}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ order.phone }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn class="primary" :to="'/ad/'+order.adId">Open</v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-flex>
        </v-layot>
    </v-container>
</template>

<script>
export default {
    
    data() {
        return {
            orders: [
                {
                    id: 1,
                    userName: 'Vasiliy',
                    phone: '8-928-515-99-40',
                    adId: 123,
                    done: false 
                }
            ]
        }
    },
    methods: {
        markDone(order) {
            order.done = true
        }
    }
}
</script>
