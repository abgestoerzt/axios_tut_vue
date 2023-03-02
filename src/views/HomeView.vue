<template>
    <h1>Home View</h1>

    <h1 v-if="this.$store.state.isAuthenticated">Du bist angemeldet</h1>
</template>