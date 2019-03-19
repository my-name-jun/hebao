document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';
require('./index.css');
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min';
var vm = avalon.define({
    $id: "vm",
    year:'2018-12-24',
    number:10988,
    // img
    dv_page2psd_layer_56:require('./../index/img/dv_page2psd_layer_56.png'),
    dv_page2psd_layer_51:require('./../index/img/dv_page2psd_layer_51.png'),
    dv_page2psd_layer_57:require('./../index/img/dv_page2psd_layer_57.png'),
    dv_page2psd_layer_88:require('./../index/img/dv_page2psd_layer_88.png'),
    dv_page2psd_layer_90:require('./../index/img/dv_page2psd_layer_90.png'),
    dv_page2psd_layer_91:require('./../index/img/dv_page2psd_layer_91.png'),

    submit2:function(){

    },



});
// 模态框
$('#modal').click(function () {
    $('#myModal').fadeIn();
});
$('#modal_hidden').click(function () {
    $('#myModal').fadeOut();
});


// 调用获取金额接口
$.ajax({
    url:'/insurance/hbj/info',
    method:'get',
    contentType:"application/json;charest=utf-8",
    dataType:"json",
}).success(function (data) {
    vm.year = data.data.date;
    vm.number = data.data.number;
    console.log(data);
}).error(function (data) {
    console.log(data);
});

