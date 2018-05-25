$(document).ready(function () {
    setTimeout(function() {
        $('.my-loding').hide()
        // $('#Box').css('opacity', '1')
    }, 2000)

    function preloader() {
        if (document.images) {
            var img1 = new Image();
            var img2 = new Image();
            var img3 = new Image();
            var img4 = new Image();
            var img5 = new Image();
            var img6 = new Image();
            var img7 = new Image();
            var img8 = new Image();
            var img9 = new Image();
            var img10 = new Image();
            var img11 = new Image();
            var img12 = new Image();
            var img13 = new Image();
            var img14 = new Image();
            var img15 = new Image();
            var img16 = new Image();

            img1.src = "../img/common/background.jpg";
            img2.src = "../img/common/logo.png";
            img3.src = "../img/banner2/forest0.png";
            img5.src = "../img/banner2/forest1.png";
            img6.src = "../img/banner2/forest2.png";
            img7.src = "../img/banner2/forest3.png";
            img8.src = "../img/banner2/forest4.png";
            img9.src = "../img/banner2/forest5.png";
            img10.src = "../img/banner2/forest6.png";
            img11.src = "../img/banner2/forest7.png";
            img12.src = "../img/banner2/forest8.png";
            // img13.src = "../img/banner2/forest9.png";
            img14.src = "../img/banner2/forest10.jpg";
            img15.src = "../img/banner2/bird.png";
            img16.src = "../img/banner2/birds.png";
        }
    }

    function addLoadEvent(func) {
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func;
        } else {
            window.onload = function () {
                if (oldonload) {
                    oldonload();
                }
                func();
            }
        }
    }
    addLoadEvent(preloader);

    var loadImg = function (url) {
        var defer = $.Deferred();

        var img = new Image();
        img.src = url;
        img.onload = function () {
            defer.resolve()  ;
        };
        img.onerror = function () {
            defer.reject()  ;
        };

        return defer.promise();
    };

    // $.when(loadImg('../img/common/background.jpg')).then(function () {
    //     // alert('all images are loaded!')
    //     $('body').loading({
	// 		loadingWidth:240,
	// 		title:'请稍等!',
	// 		name:'test',
	// 		discription:'描述描述描述描述',
	// 		direction:'column',
	// 		type:'origin',
	// 		// originBg:'#71EA71',
	// 		originDivWidth:40,
	// 		originDivHeight:40,
	// 		originWidth:6,
	// 		originHeight:6,
	// 		smallLoading:false,
	// 		loadingMaskBg:'rgba(0,0,0,)'
	// 	});

	// 	setTimeout(function(){
	// 		removeLoading('test');
	// 	},3000);
    // });

    /*-------------------点击播放音乐-------------------*/
    var isStart = false
    $('.musicBox').click(function () {
        if (!this.isStart) {
            document.getElementById('music').play()
            this.isStart = true
        } else {
            document.getElementById('music').pause()
            this.isStart = false
        }
    })

    /*-------------------显示地图----------------------*/




    const forest0Y = $('#forest0').css('transform').replace(/[^0-9\-,]/g, '').split(',')[5] //获取第0张森林图片原本的Y值
    const forest1Y = $('#forest1').css('transform').replace(/[^0-9\-,]/g, '').split(',')[5] //获取第1张森林图片原本的Y值
    const forest2Y = $('#forest2').css('transform').replace(/[^0-9\-,]/g, '').split(',')[5] //获取第2张森林图片原本的Y值
    const forest3Y = $('#forest3').css('transform').replace(/[^0-9\-,]/g, '').split(',')[5] //获取第3张森林图片原本的Y值
    const forest4Y = $('#forest4').css('transform').replace(/[^0-9\-,]/g, '').split(',')[5] //获取第4张森林图片原本的Y值
    const forest5Y = $('#forest5').css('transform').replace(/[^0-9\-,]/g, '').split(',')[5] //获取第5张森林图片原本的Y值
    const forest6Y = $('#forest6').css('transform').replace(/[^0-9\-,]/g, '').split(',')[5] //获取第6张森林图片原本的Y值
    const forest7Y = $('#forest7').css('transform').replace(/[^0-9\-,]/g, '').split(',')[5] //获取第7张森林图片原本的Y值
    const forest8Y = $('#forest8').css('transform').replace(/[^0-9\-,]/g, '').split(',')[5] //获取第8张森林图片原本的Y值
    const birdsX = $('#birds').css('transform').replace(/[^0-9\-,]/g, '').split(',')[4] //获取群鸟图片原本的X值
    const birdsY = $('#birds').css('transform').replace(/[^0-9\-,]/g, '').split(',')[5] //获取群鸟图片原本的Y值
    const birdX = $('#bird').css('transform').replace(/[^0-9\-,]/g, '').split(',')[4] //获取单鸟图片原本的X值
    const birdY = $('#bird').css('transform').replace(/[^0-9\-,]/g, '').split(',')[5] //获取单鸟图片原本的Y值
    const methodY = $('#method').css('transform').replace(/[^0-9\-,]/g, '').split(',')[5] //获取h1原本的Y值
    const coil4 = $('.coil4').css('transform').replace(/[^0-9\-,]/g, '').split(',')[5] //获取第四板块的卷材原本的Y值
    const board5 = $('.board5').css('transform').replace(/[^0-9\-,]/g, '').split(',')[5] //获取第五板块的右边板块原本的Y值
    const plate1 = $('.plate1').css('transform').replace(/[^0-9\-,]/g, '').split(',')[5] //获取第五板块的左边第一板块原本的Y值
    const H2 = $('#banner2').height() //计算第2板块的高度

    $(window).scroll(function () {

        var distant = $(window).scrollTop() //算滚动条距顶部距离
        console.log('滚动条距顶部高度', distant)
        var H = $('#banner1').height() //计算第一板块的高度
        // var H2 = $('#banner2').height() //计算第2板块的高度
        var H3 = $('#banner3').height() //计算第3板块的高度
        var H4 = $('#banner4').height() //计算第4板块的高度
        var H5 = $('#banner5').height() //计算第5板块的高度
        var H6 = $('#banner6').height() //计算第5板块的高度

        //**************通过滚动条移动距离的变量判断来移动第一个板块
        var y = 4 * distant
        if (y < H) {
            $('#banner1').css('transform', 'translate3d(0,-' + y + 'px,0)')
        }

        //**************第二板块的动画
        //通过滚动条移动距离的变量判断来移动群鸟
        var birds0 = parseInt(birdsX) + Math.abs(parseInt(distant))
        var birds1 = parseInt(birdsY) - Math.abs(parseInt(distant))
        // var flagBird = Math.abs(parseInt(distant))
        if (distant > (H / 15)) {
            $('#birds').css('transform', 'translate3d(' + birds0 + 'px,' + birds1 + 'px,0)')
        }

        //通过滚动条移动距离的变量判断来移动单鸟
        var bird0 = parseInt(birdX) - Math.abs(parseInt(distant))
        var bird1 = parseInt(birdY) - Math.abs(parseInt(distant))
        var flagBird = Math.abs(parseInt(distant))
        if (distant > (H / 15)) {
            $('#bird').css('transform', 'translate3d(' + bird0 + 'px,' + bird1 + 'px,0)')
        }

        //森林
        //通过滚动条移动距离的变量判断来移动forest0
        // var Y0 =  parseInt(forest0Y) - Math.abs(parseInt(distant-(H/10)))
        var Y0 = parseInt(forest0Y) + 300
        var flg0 = Math.abs(parseInt(distant - (H / 10)))
        var banner2Height = H2 - Math.abs(parseInt(distant))
        // if(distant<(H/50)){
        //     $('#forest0').css('transform','translate3d(0,'+Y0+'px,0)')
        // }else{
        //     $('#forest0').css('transform','translate3d(0,'+forest0Y+'px,0)')
        // }
        if (distant > (H / 5) && (distant < (H))) {
            // console.log(banner2Height)
            $('#banner2').css('height', '' + banner2Height + 'px')
        }
        var Y1 = Math.abs(parseInt(forest1Y) + parseInt(distant))
        $('#forest1').css('transform', 'translate3d(0,' + Y1 + 'px,0)') //通过滚动条移动距离的变量判断来移动forest1

        var Y2 = Math.abs(parseInt(forest2Y) - parseInt(distant))
        $('#forest2').css('transform', 'translate3d(0,' + Y2 + 'px,0)') //通过滚动条移动距离的变量判断来移动forest2

        var Y3 = Math.abs(parseInt(forest3Y) - parseInt(distant))
        $('#forest3').css('transform', 'translate3d(0,' + Y3 + 'px,0)') //通过滚动条移动距离的变量判断来移动forest3

        var Y4 = Math.abs(parseInt(forest4Y) - parseInt(distant))
        $('#forest4').css('transform', 'translate3d(0,' + Y4 + 'px,0)') //通过滚动条移动距离的变量判断来移动forest4

        var Y5 = Math.abs(parseInt(forest5Y) - parseInt(distant))
        $('#forest5').css('transform', 'translate3d(0,' + Y5 + 'px,0)') //通过滚动条移动距离的变量判断来移动forest5

        var Y6 = Math.abs(parseInt(forest6Y) - parseInt(distant))
        $('#forest6').css('transform', 'translate3d(0,' + Y6 + 'px,0)') //通过滚动条移动距离的变量判断来移动forest6

        var Y70 = Math.abs(parseInt(forest7Y) - parseInt(distant))
        $('#forest7').css('transform', 'translate3d(0,' + Y70 + 'px,0)') //通过滚动条移动距离的变量判断来移动forest7

        var Y8 = Math.abs(parseInt(forest8Y) - parseInt(distant))
        $('#forest8').css('transform', 'translate3d(0,' + Y8 + 'px,0)') //通过滚动条移动距离的变量判断来移动forest8

        var Y9 = Math.abs(parseInt(methodY) + parseInt(distant * 0.7))
        $('#method').css('transform', 'translate3d(0,' + Y9 + 'px,0)') //通过滚动条移动距离的变量判断来移动forest8

        //**************第四板块的卷材动画
        var H4s = H2 + H3 / 5
        var coil4H = coil4 - ((distant - H4s) / 2)
        $('.coil4').css('transform', 'translate3d(0,' + coil4H + 'px,0)')

        //**************第五板块的边板块动画
        var H5s = H2 + H3
        var board5H = board5 - ((distant - H5s) / 2)
        // console.log(H2 + H3 +H4/3)
        var flag5 = (H2 + H3 + H4 / 3)
        if (distant < flag5) {
            $('.board5').css('transform', 'translate3d(0,' + board5H + 'px,0)')
        }

        //右边
        var flag5_1 = (H2 + H3 * 1.5)
        console.log(flag5_1)
        $('.plate1').css('opacity', '0')
        if (distant > flag5_1 && distant < (H + H2 + H3 + H4 + H5 + H6)) {
            var plate1H = parseInt(plate1) + parseInt(distant - flag5_1 * 1)
            console.log(plate1H)
            $('.plate1').css('transform', 'translate3d(0,' + plate1H + 'px,0)')
            var opacity = Math.abs(plate1H / 500 > 1) ? 1 : (plate1H / 500);
            // //     // console.log(opacity)
            $('.plate1').css('opacity', '' + opacity + '')
            $('.plate2').css('opacity', '0')
            $('.plate3').css('opacity', '0')
            $('.plate4').css('opacity', '0')
            var flag5_2 = H2 + H3 + H4
            //     console.log(flag5_2)
            if (distant > flag5_2) {
                //         // console.log(flag5_2)
                for (var i = 2; i < 5; i++) {
                    $('.plate' + i).css('opacity', '0.7')
                    $('.plate' + i).css('transform', 'translate3d(0,' + plate1H + 'px,0)')
                }
                var plates1 = plate1H - parseInt(distant - flag5_2) * 0.6
                var opacity = ((1 - plate1H / 1800) < 0) ? 0 : (1 - plate1H / 1800)
                //         // console.log((1-plate1H/1000))
                $('.plate1').css('opacity', '' + opacity + '')
                $('.plate1').css('transform', 'translate3d(0,' + plates1 + 'px,0)')

                var plates2 = plate1H - parseInt(distant - flag5_2) * 0.2
                $('.plate2').css('opacity', '' + opacity + '')
                $('.plate2').css('transform', 'translate3d(0,' + plates2 + 'px,0)')
                var plates3 = plate1H + parseInt(distant - flag5_2) * 0.2
                $('.plate3').css('opacity', '' + opacity + '')
                $('.plate3').css('transform', 'translate3d(0,' + plates3 + 'px,0)')
                var plates4 = plate1H + parseInt(distant - flag5_2) * 0.6
                $('.plate4').css('opacity', '' + opacity + '')
                $('.plate4').css('transform', 'translate3d(0,' + plates4 + 'px,0)')
            }
            //     // console.log(H2 + H3 +H4+H5/4.5)
        }

        // console.log(H5s)


    })

    /*------------------拖动小按钮实现页面显示---------------------*/
    var el = document.querySelector('.pop')
    var startX, moveEndX, vv
    var A

    function popStart(e) {
        e.preventDefault();
        startX = e.touches[0].pageX;
        vv = $('#left').outerWidth()
        A = $('.pop').css('transform').replace(/[^0-9\-,.]/g, '').split(',')[4]

    }

    function popMove(e) {
        e.preventDefault();
        moveEndX = e.changedTouches[0].pageX;
        var X = moveEndX - startX;
        var width = vv + X //图片的移动
        if (width > $('.pop').width() / 2 && width < ($('#leftBox').width() - $('.pop').width() / 2)) {
            $('#left').outerWidth(width)
        }
        var B = parseInt(A) + X //pop按钮的移动
        // console.log(B)
        if (B > 0 && B < ($('#leftBox').width() - $('.pop').width())) {
            $('.pop').css('transform', 'translate3d(' + B + 'px,0,0)')
        }
    }

    function popEnd(e) {
        e.preventDefault();
    }
    el.addEventListener('touchstart', popStart, false)
    el.addEventListener('touchmove', popMove, false)
    el.addEventListener('touchend', popEnd, false)

})