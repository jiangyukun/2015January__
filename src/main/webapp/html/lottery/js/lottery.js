var lottery = function () {
    function initPosition() {
        var docWidth = $(document).width();
        var k = docWidth / 640; //放大缩小系数
        $('#lottery-bg').css('height', k * 955 + "px");
        $('#invite_friend').css('width', k * 216 + "px");
        $('#invite_friend').css('height', k * 90 + "px");
        $('#invite_friend').css('top', k * 240 + "px");
        $('#invite_friend').css('left', k * 330 + "px");
        $('#lottery_div').css('top', k * 348 + "px");

        var turntableWidth = k * 572;
        var turntableMargin = -(turntableWidth / 2);
        $('#turntable').css('width', turntableWidth + "px");
        $('#turntable').css('height', turntableWidth + "px");
        $('#turntable').css('margin-top', turntableMargin + "px");
        $('#turntable').css('margin-left', turntableMargin + "px");
        $('#lottery_div').css('height', turntableWidth + "px");
        $('#lottery_num').css('top', (turntableWidth - 20) + "px");

        var runWidth = k * 150;
        var runHeight = k * 200;
        var runMarginH = -(k * 125);
        var runMarginW = -(runWidth / 2);
        $('#pointer').css('width', runWidth + "px");
        $('#pointer').css('height', runHeight + "px");
        $('#pointer').css('margin-top', runMarginH + "px");
        $('#pointer').css('margin-left', runMarginW + "px");

        var btnRunWidth = k * 114;
        var btnRunMargin = -(btnRunWidth / 2);
        $('#btn_start').css('width', btnRunWidth + "px");
        $('#btn_start').css('height', btnRunWidth + "px");
        $('#btn_start').css('margin-top', btnRunMargin + "px");
        $('#btn_start').css('margin-left', btnRunMargin + "px");
    }

    function lottery() {
        $("#btn_start").attr('disabled', true).css("cursor", "default");
        $("#turntable").rotate({
            duration: 3000000, //转动时间
            angle: 0, //默认角度
            animateTo: 360 * 600, //转动角度 , 3000s转300圈
            //easing: $.easing.swing, // linear  easeOutSine
            callback: function () {
                alert("请求失败！");
            }
        });

        $.ajax({
            type: 'get',
            url: 'js/json.js',
            dataType: 'json',
            cache: false,
            error: function () {
                return false;
            },
            success: function (obj) {
                var data = trans("8元"); //0、1、3、5、7、9以此为未中奖、88元、2元、8元、9.6元、58元

                if (data == "0") {
                    var s = [0, 2, 4, 6, 8];
                    data = s[Math.floor(Math.random() * s.length)];
                }

                var rotate = GetRandomNum(obj[data].rotate - 15, obj[data].rotate + 15);
                $("#turntable").stopRotate();
                $("#turntable").rotate({
                    duration: 10000, //转动时间
                    angle: 0, //默认角度
                    animateTo: 360 * 2 + rotate, //转动角度
                    callback: function () {
                        if (data == "0") {
                            alert(obj[data].results);
                        } else {
                            alert("恭喜你！获得" + obj[data].results);
                        }
                        $("#btn_start").attr('disabled', false).css("cursor", "pointer");
                    }
                });
            }
        });
    }

    function GetRandomNum(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    }

    function trans(str) {
        if (str == "未中奖") {
            return "0";
        } else if (str == "88元") {
            return "1";
        } else if (str == "2元") {
            return "3";
        } else if (str == "8元") {
            return "5";
        } else if (str == "9.6元") {
            return "7";
        } else if (str == "58元") {
            return "9";
        }
    }

    function invite() {
        alert('邀请好友');
    };

    return {
        initPage: function () {
            initPosition();
        },

        lottery: function () {
            lottery();
        },

        invite: function () {
            invite();
        }
    }
}();

$(function () {
    lottery.initPage();
}); 
