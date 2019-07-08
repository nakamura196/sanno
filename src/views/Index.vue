<template>
    <v-app>
        <v-content>
            <v-container>
    
                <v-list two-line class="elevation-1">
                    <template v-for="item in items">
                
                    <v-list-tile
                :key="item.title"
                avatar
                @click="move(item.title)"
              >
                <v-list-tile-avatar>
                  <v-icon>person</v-icon>
                </v-list-tile-avatar>
    
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
    
                <v-list-tile-action v-if="item.selected">
                  <v-btn icon ripple>
                    <v-icon>check_box</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
</template>
                </v-list>
    
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import axios from 'axios';

export default {
    data: function() {
        return {
            items: []
        }
    },
    watch: {
        '$route' (to, from) {
            this.search()
        }
    },
    created: function() {
        this.list()
    },
    methods: {
        move(data) {
            this.$router.push({ path: "check", query: { q: data } })
        },
        list() {

            axios.get("https://api.myjson.com/bins/uo2mf")
                .then(response => {

                    let items = this.items

                    let result = response.data
                    for (let key in result) {

                        let obj = result[key]
                        let viaf = obj.viaf

                        let selected = false
                        for (let key2 in viaf) {
                            if (viaf[key2].selected) {
                                selected = true
                                break
                            }
                        }

                        let item = {
                            title: key,
                            selected: selected
                        }
                        items.push(item)
                    }

                }).catch(error => { console.log(error); });
        }
    }
}
</script>