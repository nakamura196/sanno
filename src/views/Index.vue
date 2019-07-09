<template>
    <v-app>
        <v-content>
            <v-container>
    
                <v-btn class="mb-4" color="primary" @click="login" v-show="!$isAuthenticated()">Login</v-btn>
                <v-btn class="mb-4" color="warning" @click="logout" v-show="$isAuthenticated() && items.length > 0">Logout</v-btn>
                <v-btn class="mb-4" @click="reload">
                    <v-icon>refresh</v-icon>
                </v-btn>
    
                <v-list two-line class="elevation-1 mb-5" v-show="items.length > 0">
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
                                            <v-icon>check</v-icon>
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
import Vue from "vue";
import axios from 'axios';
// import the plugin
import VueGAPI from "vue-gapi";


let spreadsheetId = '12LdWL7-4WVfSGoPuM7Ji-yyJaXcjI3WywXzM7F48PYY'
let sheetName = "contributeurs_viaf"

// Use the plugin and pass along the configuration


export default {
    data: function() {
        return {
            items: [],
            selected: [],
            apiKey: "",
            clientId: ""
        }
    },
    created: function() {
        let param = Object.assign({}, this.$route.query)

        this.apiKey = param["apiKey"]
        this.clientId = param["clientId"]

        // create the 'options' object
        const apiConfig = {

            apiKey: this.apiKey,
            clientId: this.clientId,
            discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
            scope: "https://www.googleapis.com/auth/spreadsheets"
        };
        Vue.use(VueGAPI, apiConfig);
        this.init()
    },
    computed: {
        isSignedIn() {
            return this.$isSignedIn()
        }
    },
    methods: {
        init() {
            if (this.$isAuthenticated() == true) {
                this.getSelected()
            }
        },
        login() {
            this.$login()
        },
        logout() {
            this.$logout()
        },
        getSelected() {

            let selected = []
            this.selected = selected

            this.$getGapiClient()
                .then(gapi => {
                    gapi.client.sheets.spreadsheets.values.get({
                        spreadsheetId: spreadsheetId,
                        range: sheetName + '!A2:B'
                    }).then(
                        response => {
                            let result = response.result.values;
                            for (let i = 0; i < result.length; i++) {
                                let obj = result[i]
                                if (obj.length >= 2 && obj[1].length > 0) {
                                    selected.push(obj[0])
                                }
                            }
                            this.list()
                        }
                    );
                })
        },
        move(data) {
            this.$router.push({ path: "check", query: { q: data, apiKey: this.apiKey, clientId: this.clientId } })
        },
        reload() {
            location.reload()
        },
        list() {

            axios.get("https://nakamura196.github.io/sanno/contributeurs_viaf.json")
                .then(response => {

                    let items = this.items

                    let result = response.data

                    const ordered = {};
                    Object.keys(result).sort().forEach(function(key) {
                        ordered[key] = result[key];
                    });

                    for (let key in ordered) {

                        let selected = this.selected.indexOf(key) != -1 ? true : false

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