
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

  <h2 class="mt-5 mb-4">Sélectionnez les noms appropriés (réponses multiples autorisées)</h2>

<template v-for="(item, index2) in list">
    <v-card class="px-4 mb-4" :key="index2">
    
        <v-card-actions>
            <v-checkbox :key="item.title" v-model="selected" :label="item.title+' ['+item.viafId+']'" :value="item.viafId">
            </v-checkbox>
            <template v-if="item.references.length > 0">
                            <v-spacer></v-spacer>
                            <v-btn icon @click="item.show = !item.show">
                                <v-icon>{{ item.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                            </v-btn>
</template>
        </v-card-actions>
    
        <v-slide-y-transition>
            <v-card-text class="pb-5" v-show="item.show">
                <div v-for="(ref, index) in item.references" :key="index">
                                        <span>[{{index + 1}}] <a target="_blank" :href="ref">{{ref}}</a></span>
                                        <br/>
</div>
          </v-card-text>
        </v-slide-y-transition>
      </v-card>

</template>

    <v-btn color="primary" class="mb-5" @click="save"><v-icon>save</v-icon></v-btn>
     <v-btn class="mb-5" @click="back">
                        <v-icon>home</v-icon>
                    </v-btn>
                
            </v-container>
        </v-content>
    </v-app>
</template>


<script>
import axios from 'axios';

let separator = "|"
let spreadsheetId = '12LdWL7-4WVfSGoPuM7Ji-yyJaXcjI3WywXzM7F48PYY'
let sheetName = "contributeurs_viaf"
let url = "https://nakamura196.github.io/sanno/contributeurs_viaf.json"

export default {
    data: function() {
        return {
            items: [],
            headers: [],
            list: [],
            person: "",
            result: {},
            selected: [],
            index: -1,
            apiKey: "",
            clientId: ""
        }
    },
    created: function() {
        let param = Object.assign({}, this.$route.query)

        this.apiKey = param["apiKey"]
        this.clientId = param["clientId"]
        this.person = param.q
        this.getSelected()
    },
    methods: {
        back() {
            this.$router.push({ path: "/", query: { apiKey: this.apiKey, clientId: this.clientId } })
        },
        save() {

            let selected = this.selected

            let row = 2 + this.index

            this.$getGapiClient()
                .then(gapi => {
                    gapi.client.sheets.spreadsheets.values.update({
                        spreadsheetId: spreadsheetId,
                        range: sheetName + '!A' + row + ':C' + row,
                        valueInputOption: "USER_ENTERED",
                        resource: {
                            values: [
                                [this.person, selected.join(separator)]
                            ]
                        }
                    }).then(
                        alert("saved.")
                    ).catch(error => {
                        alert(error.result.error.message)
                    });
                })


        },
        getSelected() {

            this.$getGapiClient()
                .then(gapi => {
                    gapi.client.sheets.spreadsheets.values.get({
                        spreadsheetId: spreadsheetId,
                        range: sheetName + '!A2:Z'
                    }).then(
                        response => {
                            let result = response.result.values;
                            for (let i = 0; i < result.length; i++) {
                                let obj = result[i]
                                let key = obj[0]
                                if (this.person == key) {
                                    this.index = i

                                    if (obj.length >= 2 && obj[1].length > 0) {
                                        this.selected = obj[1].split(separator)
                                    }

                                    break
                                }
                            }
                            if (this.index == -1) {
                                this.index = result.length
                            }
                            this.list2()
                        }
                    );
                })
        },
        list2() {

            axios.get(url)
                .then(response => {

                    let items = this.items
                    let headers = this.headers
                    let list = this.list

                    let result = response.data

                    this.result = result
                    result = result[this.person]

                    for (let key in result.enccre) {
                        let item = {
                            key: key.replace("description", "description par ENCCRE"),
                            value: result.enccre[key]
                        }
                        headers.push(key)
                        items.push(item)
                    }

                    let viafs = []

                    for (let key in result.viaf) {
                        let obj = result.viaf[key]
                        let viafId = obj.viafId
                        if (viafs.indexOf(viafId) == -1) {
                            let item = {
                                title: key,
                                references: obj.references,
                                viafId: viafId,
                                show: false
                            }
                            list.push(item)
                            viafs.push(viafId)
                        }
                    }

                }).catch(error => { console.log(error); });
        }
    }
}
</script>