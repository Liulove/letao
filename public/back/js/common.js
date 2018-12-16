// 进度条效果  在发送第一个Ajax之前开启
// 在全部ajax结束之后结束进度条
$(document).ajaxStart(function () {
    NProgress.start();
});
$(document).ajaxStop(function () {
    NProgress.done();
})



$(function () {
    // 1.左侧二级菜单切换
    $('.lt-aside .category').click(function () {
        $('.lt-aside .child').stop().slideToggle();
    })

    // 2.菜单切换效果
    $('.icon-menu').click(function () {
        $('.lt-aside').toggleClass("hidemenu")
        $('.lt-topbar').toggleClass("hidemenu")
        $('.lt-subject').toggleClass("hidemenu")
    })

    // 3.点击退出效果
    $('.icon-logout').click(function () {
        $('#logoutModal').modal('show')
    })

    $('#logoutBtn').click(function () {
        $.ajax({
            type: "get",
            url: "/employee/employeeLogout",
            dataType: "json",
            success: function (info) {
                console.log(info);
                if (info.success) {
                    location.href = 'login.html'
                }

            }
        })
    })

})