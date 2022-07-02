$(document).ready(function(){
    $('#t1_menu_left>ul>li').mousemove(function(){
        $(this).children('.t1_click').show()
    })
    $('#t1_menu_left>ul>li').mouseleave(function(){
        $(this).children('.t1_click').hide()
    })
    $('#t1_menu_right>ul>li').mousemove(function(){
        $(this).children('.t1_click').show()
    })
    $('#t1_menu_right>ul>li').mouseleave(function(){
        $(this).children('.t1_click').hide()
    })
    $('#t1_title').animate({'width':'1600px','height':'600px','marginTop':'140px'},1600,function(){
        $('#t1_title_textbox>h2').animate({'marginTop':'0','opacity':'1'},500,function(){
            $('#t1_title_textbox>p').animate({'marginTop':'30px','opacity':'1'},1000)
        })
        $('#t1_menubar').animate({'opacity':'1'})
    })


})