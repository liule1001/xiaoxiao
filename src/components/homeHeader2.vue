<template>
    <div>
        <div class="loginBox">
            我的性别是
            <span>女</span>
        </div>
        <el-button type="primary" size="mini" @click="brotherSendValue">兄弟传值</el-button>
    </div>
</template>

<script>
import bus from "./eventBus"
export default {
    data() {
        return {
            params: [1, 2, 3],
            childName: this.name
        };
    },
    props: {
        name: {
            type: String,
            required: false,
            default: "李四"
        }
    },
    methods: {
        changeName() {
            console.log("this.childName", this.childName);
            // this.childName = this.childName == "赵六"?"王五":"赵六";
            this.childName = this.childName == "ellen" ? "marry" : "ellen";
            this.$emit("change", this.childName);
        },
        brotherSendValue(){
            bus.$emit("sendMsg","男")
            console.log('123123132')
        }
        // testRest(...valueArr){
        //     // console.log(valueArr)
        // },
        // testParams(num1,num2,num3){
        //     console.log(num1,num2,num3)
        // }
    },
    mounted() {
        //    this.testRest(1,2,3)
        //    this.testParams(...this.params)
    }
};
</script>

<style lang='scss' rel='stylesheet/scss'>
@import "../assets/scss/common.scss";
@import "../assets/scss/config.scss";
.el-header {
    height: 50px !important;
    border-bottom: 1px solid $bg-color;
    padding: 30px 25px 0 25px !important;
}
.loginBox {
    float: right;
    margin-right: 200px;
    .logout {
        margin-left: 20px;
        cursor: pointer;
        color: $bg-color;
    }
}
</style>