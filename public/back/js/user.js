$(function () {
    var currentPage = 1;
    var pageSize = 5;
    render();

    function render() {
        $.ajax({
            type: "get",
            url: "/user/queryUser",
            dataType: "json",
            data: {
                page: currentPage,
                pageSize: pageSize,
            },
            success: function (info) {
                console.log(info);
                var htmlstr = template('userTpl', info);
                $('.lt-container tbody').html(htmlstr);


                // 分页功能
                $("#pagintor").bootstrapPaginator({
                    bootstrapMajorVersion: 3,//默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage: info.page,//当前页
                    totalPages: Math.ceil(info.total / info.size),//总页数
                    size: "normal",//设置控件的大小，mini, small, normal,large
                    onPageClicked: function (event, originalEvent, type, page) {
                        //为按钮绑定点击事件 page:当前点击的按钮值
                        currentPage = page;
                        render();
                    }
                })
            }
        })
    }


    // 点击按钮禁用/启用
    // 注册点击事件

    $('.lt-container tbody').on('click', '.btn', function () {
        // console.log("哈哈");
        $('#userModal').modal('show');

        var id = $(this).parent().data("id");
        // console.log(id);
        var isDelete = $(this).hasClass("btn-danger") ? 0 : 1;
        // console.log(isDelete);
        $('#userBtn').off('click').on('click', function () {
            $.ajax({
                type: "post",
                url: "/user/updateUser",
                data: {
                    id: id,
                    isDelete: isDelete
                },
                dataType: "json",
                success: function (info) {
                    console.log(info);
                    if (info.success) {
                        $('#userModal').modal('hide')
                        render();
                    }


                }
            })
        })




    })
})