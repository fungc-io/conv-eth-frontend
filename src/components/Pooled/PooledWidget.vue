<template>
    <div class="card">
        <div class="card-body p-3 d-flex align-items-center">
            <div class="bg-primary p-0 mfe-3 icon-wrapper">
                <img :src="icon" v-if="icon"/>
            </div>
            <div>
            <div class="text-value text-primary"><slot>$0</slot></div>
            <div class="text-muted text-uppercase font-weight-bold small">{{title}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "RateWidget",
    props:{
        title:{
            type: String,
            default: "Title"
        },
        icon:{
            type: String,
            default: ""
        }
    }
}
</script>
<style lang="scss" scoped>
.icon-wrapper{
    width: 36px;
    img{
        max-width: 100%;
    }
}
</style>