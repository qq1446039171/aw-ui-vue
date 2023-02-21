<template>
    <div>
        <span class="icon-box" v-for="item in icons">
            <i :class="[item,'icon-size']"></i><br/>
            <span>{{item}}</span>
        </span>
    </div>
</template>

<script>
export default {
    name: 'icon',
    data () {
        return {
            icons: [
                'icon-shijian',
                'icon-naozhong',
                'icon-shezhi',
                'icon-sousuochaxun',
                'icon-zhuye',
                'icon-bianjixiugai',
                'icon-shanchu',
                'icon-shuaxin',
                'icon-fenxiang',
                'icon-guanlianfujian',
                'icon-fanhui',
                'icon-jinru',
                'icon-jian',
                'icon-jia',
                'icon-guanbi',
                'icon-zhengque',
                'icon-dayin',
                'icon-wendang',
                'icon-neirongwendang',
                'icon-quanping',
                'icon-chuangkoufangda',
                'icon-zanting',
                'icon-tupian',
                'icon-bofang',
                'icon-wenjianjiai',
                'icon-tongzhi',
                'icon-paizhaoxiangji',
                'icon-gongsilogo',
                'icon-gongsilogowenzi',
                'icon-shipin',
                'icon-zan',
                'icon-celiang',
                'icon-luxian',
                'icon-mianji',
                'icon-daohang',
                'icon-fangda',
                'icon-suoxiao',
                'icon-wifi',
                'icon-meiwifi',
                'icon-huhuan',
                'icon-yuyin',
                'icon-erji',
                'icon-wenjian',
                'icon-shexiangji',
                'icon-shengyin',
                'icon-jingyin',
                'icon-dengji',
                'icon-zhinanzhen',
                'icon-tongxunlu',
                'icon-pinglun',
                'icon-pinglun2',
                'icon-pinglun3',
                'icon-mima',
                'icon-yiduxinxi',
                'icon-youjianxinxiicon',
                'icon-yonghuicon',
                'icon-shangchuan',
                'icon-xiazai',
                'icon-pingmufangda',
                'icon-pingmusuoxiao',
                'icon-fuzhi',
                'icon-ditu1',
                'icon-ditu2',
                'icon-zuobiaoicon',
                'icon-biaojidian1',
                'icon-denglu',
                'icon-tuichu',
                'icon-fanhui2',
                'icon-jinru2',
                'icon-tuceng',
                'icon-shouji',
                'icon-diannao',
                'icon-pad',
                'icon-suodingweizhi',
                'icon-dingzi',
                'icon-daohangliebiao',
                'icon-shouqi',
                'icon-zhankai',
                'icon-feiji',
                'icon-dianhua',
                'icon-shouqikuaijin',
                'icon-zhankaikuaitui',
                'icon-bofang1',
                'icon-zanting1',
                'icon-tingzhi',
                'icon-shangyishou',
                'icon-kuaijin',
                'icon-jianqie',
                'icon-shoucang',
                'icon-weixihuan',
                'icon-yixihuan',
                'icon-shangdian',
                'icon-zhiwu',
                'icon-dangan',
                'icon-jianpan',
                'icon-zhexiantongji',
                'icon-zhuzhuangtongji',
                'icon-bingzhuantongji',
                'icon-tongjifenxi',
                'icon-lubiao',
                'icon-tianjia',
                'icon-shanchu1',
                'icon-guanbi1',
                'icon-guanbi3',
                'icon-xuanze'
            ]
        }
    }
}
</script>
<style>
.icon-size {
    padding: 10px;
    display: inline-block;
    font-size: 40px;
}

.icon-box {
    display: inline-block;
    text-align: center;
    line-height: initial;
    width: 130px;
}
.icon-box span{
    font-size: 12px;
}
.icon-size:hover {
    transform: translateZ(0) scale(1.3);
    transition: .2s linear;
    cursor: pointer;
}
</style>
