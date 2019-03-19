document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';
require('./index.css');
var vm = avalon.define({
    $id: "vm",
    people:10988,
    amount:'800,086.00',
    month:12,
    day:22,
    // img
    dv_page1psd_layer_68:require('./img/dv_page1psd_layer_68.png'),
    dv_page2psd_layer_46:require('./img/dv_page2psd_layer_46.png'),
});

// 调用获取金额接口
    $.ajax({
        url:'/insurance/hbj/info',
        method:'get',
        contentType:"application/json;charest=utf-8",
        dataType:"json",
    }).success(function (data) {
        vm.people = data.data.number;
        // vm.amount = data.data.money;
        var s = data.data.money.toString();
        if (s.length > 6)
        {
            vm.amount = s.substring(0,s.length-6) + ',' + s.substring(s.length-6,s.length-3) + ',' + s.substring(s.length-3,s.length) + '.00';
        }
        else
        {
            vm.amount = s.substring(0,s.length-3) + ',' + s.substring(s.length-3,s.length) + '.00';
        }
        console.log(data);
    }).error(function (data) {
        console.log(data);
    });

var date = new Date();
vm.month = date.getMonth() + 1;
vm.day = date.getDay();

// 激活账户
$('#submit1').click(function () {
    $.ajax({
        url:'/insurance/hbj/open',
        method:'post',
        contentType:"application/json;charest=utf-8",
        dataType:"json",
    }).success(function (data) {
        console.log(data);
    });
   window.location.href = 'success.html';
});