<template>
    <div class="test">
        <input id="file" ref="file" type="file" value="文件上传">
        <button @click="fileUpload">上传</button>
    </div>
</template>

<script>
import axios from 'axios';
import {getBillInfo} from '@/network/home.js';
export default {
    methods:{
        fileUpload(){
            console.log(axios);
            let files = this.$refs.file.files;
            let file = files[0];

            let form = new FormData();
            form.append("file",file);
            axios({
                method: 'post',
                url: "/api/file",
                headers: {
                    contenyType: 'multipart/form-data'
                },
                data: form
            })
            // axios({
            //     method: 'post',
            //     url: "/api",
            //     headers: {
            //         contenyType: 'multipart/form-data'
            //     },
            //     data: form
            // })
            // axios({
            //     method: 'post',
            //     url: '/user/12345',
            //     data: {
            //         firstName: 'Fred',
            //         lastName: 'Flintstone'
            //     }
            // });
        }
    },
    created(){
        getBillInfo()
    }
    
}
</script>

<style scoped>
.feature img{
    width: 100%;
}
</style>

