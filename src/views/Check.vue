
<template>
    <v-app>
        <v-content>
            <v-container>
    
                <h1 class="mb-4">{{person}}</h1>
    
                <v-data-table :headers="headers" :items="items" hide-actions hide-headers class="elevation-1">
                    <template v-slot:items="props">
                                  <th>{{ props.item.key }}</th>
                                  <td class="py-2">{{ props.item.value }}</td>
</template>
  </v-data-table>

<v-card class="mt-5 px-4 py-4">

<h2 class="mb-4">Choose appropriate names (Multiple answers allowed)</h2>

<template v-for="(item) in list">
    <hr class="my-4" />
    <v-checkbox :key="item.title" v-model="selected" :label="item.title" :value="item.title">
    </v-checkbox>
    <template v-for="(ref, index) in item.references">
                    <span>[{{index + 1}}] <a :href="ref">{{ref}}</a></span>
                    <br/>
</template>

</template>

    </v-card>

    <v-btn class="my-5" color="primary" @click="save">Save</v-btn>
                
            </v-container>
        </v-content>
    </v-app>
</template>


<script>
import axios from 'axios';

let url = "https://api.myjson.com/bins/uo2mf"

export default {
    data: function() {
        return {
            items: [],
            headers: [],
            list: [],
            person: "",
            selected: [],
            result: {},
            selected: []
        }
    },
    created: function() {
        let param = Object.assign({}, this.$route.query)
        this.person = param.q
        this.list2()
    },
    methods: {
        save() {

            let selected = this.selected
            let result = this.result
            let viaf = result[this.person].viaf
            for (let key in viaf) {
                let obj = viaf[key]
                let flg = false
                if (selected.indexOf(key) != -1) {
                    flg = true
                }
                obj.selected = flg
            }

            axios.put(url, result)
                .then(response => {
                    console.log("saved.")

                }).catch(error => { console.log(error); });
        },
        list2() {

            axios.get(url)
                .then(response => {

                    let items = this.items
                    let headers = this.headers
                    let list = this.list

                    let selected = []
                    this.selected = selected

                    let result = response.data

                    this.result = result
                    result = result[this.person]

                    for (let key in result.enccre) {
                        let item = {
                            key: key,
                            value: result.enccre[key]
                        }
                        headers.push(key)
                        items.push(item)
                    }

                    for (let key in result.viaf) {
                        let obj = result.viaf[key]
                        let item = {
                            title: key,
                            references: obj.references
                        }
                        list.push(item)

                        if (obj.selected) {
                            selected.push(key)
                        }
                    }

                }).catch(error => { console.log(error); });
        }
    }
}
</script>