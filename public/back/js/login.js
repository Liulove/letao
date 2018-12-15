$(function () {

    //     校验规则：
    // 1. 用户名不能为空 用户名长度为2-6位
    // 2. 用户密码不能为空 用户密码长度为6-12位 
    $('#form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },


        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: "用户名不能为空"
                    },
                    stringLength: {
                        min: 2,
                        max: 6,
                        message: "用户名长度为2-6位"
                    },
                    callback: {
                        message: "用户名不正确"
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: "密码不能为空"
                    },
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: "密码长度为6-12位"
                    },
                    callback: {
                        message: "密码错误"
                    }
                }
            }
        }
    });

    /*
    2.禁止form表单自动提交，使用ajax进行表单提交
    */
    $("#form").on("success.form.bv", function (e) {
        e.preventDefault();

        //发送ajax请求
        $.ajax({
            type: 'post',
            url: '/employee/employeeLogin',
            data: $('#form').serialize(),
            dataType: 'json',
            success: function (info) {
                if (info.success) {
                    // 用户名密码正确跳转到首页
                    location.href = "index.html"
                }
                if (info.error === 1000) {
                    $('#form').data('bootstrapValidator').updateStatus("username", "INVALID", "callback")
                }

                if (info.error === 1001) {
                    $("#form").data('bootstrapValidator').updateStatus("password", "INVALID", "callback")
                }
            }
        })

    })

    // 3.表单重置功能
    $('[type="reset"]').click(function () {
        $("#form").data('bootstrapValidator').resetForm();
    })

})