<template>
    <v-app>
        <v-toolbar>
            <v-toolbar-title class="headline">
                Un Outil de connexion des ID VIAF aux données ENCRE
            </v-toolbar-title>
        </v-toolbar>
    
        <v-content>
            <router-view/>
        </v-content>
    
        <v-footer dark height="auto">
            <v-card class="flex" flat tile>
    
                <v-card-actions class="grey darken-3 justify-center my-5 text-xs-center">
                    Tokyo Digital History. / Société d’étude sur l’Encyclopédie et les Lumières.
                </v-card-actions>
            </v-card>
        </v-footer>
    </v-app>
</template>
