
content_block = $(".content .block");
sidebar_block = $(".sidebar .block");
browser = $('.browser');

var block = $('#website-construction .content .block');
for ( i = 0; i < 13;i++){
	block.clone().appendTo('.content');
}
for ( i = 0; i < 10;i++){
	block.clone().appendTo('.sidebar');
}

var browserh = browser.height() + 10;
$('#website-construction').css('top', browserh+'px');

$(window).on('resize', function(){
	var browserh = browser.height() + 10;
	$('#website-construction').css('top', browserh+'px');
});

$(document).ready(function(){

	$("html").niceScroll({
		horizrailenabled: false,
		scrollspeed: 10,
		mousescrollstep: 10,
		autohidemode: "hidden"
	});

var controller = new ScrollMagic.Controller({/*addIndicators: true*/});

tlIntro = new TimelineMax()
.to('.intro_text p', 1, {opacity: 1}, '+=1')
.from('.browser', 5, {top: '-150vh'}, '-=5')
.to('.logo', 0, {opacity: 0}, 1, '-=1')
.fromTo('.bottom', 5, {height: '100%'}, {height: '15vh'}, '-=5')
.from('.top', 1, {height: '0%'}, '-=1' )
.to('.intro_text p', .5, {opacity: 0});

var scene = new ScrollMagic.Scene({
	triggerElement: '.intro',
	triggerHook: 'onLeave',
	offset: 0,
	duration: 700
}).addTo(controller)
.setTween(tlIntro);

titleEntry = new TimelineMax()
.to('h1.wc', 1, {bottom: '55%'})
.to('h1.wc', .5, {opacity: '0'}, '+=.5');

var title1 = new ScrollMagic.Scene({
	triggerElement: scene,
	triggerHook: 'onLeave',
	offset: 500,
	duration: 400
}).addTo(controller)
.setTween(titleEntry);

var start_blocks = new TimelineMax();
start_blocks
.from('#website-construction .navbar', 0.5, {scale: 0.5, opacity: 0})
.to('.website p:nth-child(1)', 1, {opacity: 1})
.from('#website-construction .content .block:first-child', 0.5, {scale: 0.5,  opacity: 0}, '-=1')
.from('#website-construction .sidebar .block:first-child', 0.5, {scale: 0.5, opacity: 0})
.from('#website-construction .content .block:nth-child(2)', 0.5, {scale: 0.5,  opacity: 0})
.from('#website-construction .content .block:nth-child(3)', 1, {scale: 0.5, opacity: 0})
.from('#website-construction .sidebar .block:nth-child(2)', 1, {scale: 0.5, opacity: 0})
.to('#website-construction', 80, {y: '-600%'}, +3)

.to('.website p:nth-child(1)', 1, {opacity: 0}, '-=78')
.to('.website p:nth-child(2)', 1, {opacity: 1}, '-=77')
.to('.website p:nth-child(2)', 1, {opacity: 0}, '-=68')
.to('.content p:nth-child(1)', 1, {opacity: 1}, '-=68')
.to('.content p:nth-child(1)', 1, {opacity: 0}, '-=50');

var scene2 = new ScrollMagic.Scene({
	triggerElement: scene,
	triggerHook: 'onLeave',
	offset: '1000',
	duration: 6500
}).addTo(controller)
.setTween(start_blocks);

$( '#website-construction .content .block:nth-child(n+4)' ).each(function( index ) {
	var web_content_block = new TimelineMax();
	web_content_block.staggerFrom( $(this) , 0.5, {scale: .5, opacity: 0, backgroundColor: '#f2f2f2'}, 0.5, "stagger");

	var scene = new ScrollMagic.Scene({
		triggerElement: this, 
		triggerHook: 'onEnter', 
		offset: 200
	})
	.addTo(controller)
	.setTween(web_content_block);
});


$( '#website-construction .sidebar .block:nth-child(n+3)' ).each(function( index ) {
	var web_sidebar_block = new TimelineMax();
	web_sidebar_block.staggerFrom( $(this) , 0.5, {scale:0.5, opacity: 0, backgroundColor: '#f2f2f2'}, 0.5, "stagger");


	var scene = new ScrollMagic.Scene({
		triggerElement: this, 
		triggerHook: 'onEnter', 
		offset:250
	})
	.addTo(controller)
	.setTween(web_sidebar_block);
});

content = new TimelineMax();
content
.staggerFromTo('.lines svg', 2, {width: 0}, {width: '60%'} , 0.5)
.from('.pictures img:nth-child(1)', 0.5, { opacity: 0, scale: 0.2, ease: Back.easeOut.config(1.7) }, '=-3.5')
.from('.pictures img:nth-child(2)', 0.5, { opacity: 0, scale: 0.2, ease: Back.easeOut.config(1.7) }, '=-2.5')
.staggerFromTo('.lines2 svg', 2, {width: 0}, {width: '60%'} , 0.5, '=-2')
.from('.pictures img:nth-child(4)', 0.5, { opacity: 0, scale: 0.2, ease: Back.easeOut.config(1.7) }, '=-2.5')
.from('.pictures img:nth-child(5)', 0.5, { opacity: 0, scale: 0.2, ease: Back.easeOut.config(1.7) }, '=-1.5')
.from('.pictures img:nth-child(3)', 0.5, { opacity: 0, scale: 0.2, ease: Back.easeOut.config(1.7) }, '=-1')
.staggerFromTo('.lines3 svg', 2, {width: 0}, {width: '60%'} , 0.5)
.staggerFromTo('.lines4 svg', 2, {width: 0}, {width: '100%'} , 0.2, '=-3')
.from('.pictures img:nth-child(6)', 0.5, { opacity: 0, scale: 0.2, ease: Back.easeOut.config(1.7) }, '=-2.5');

new ScrollMagic.Scene({
	triggerElement: 'div.content > div:nth-child(9)',
	triggerHook: 'onCenter',
	duration: 1000,
	offset: 0
})
.setTween(content)
.addTo(controller);

btn_width = $('.search-btn').width() / 2 + 10;
btn_height = $('.search-btn').height() / 2 + 10;

posLeft = $('.search-btn').position().left + btn_width;
posTop = $('.search-btn').position().top + btn_height;

seo = new TimelineMax()
.to('h1.seo', 3.5, {bottom: '55%'})
.to('.seo p:nth-child(1)', 1, {opacity: 1}, '-=1.5')
.to('h1.seo', .5, {opacity: '0'})
.to('.google', 1.5, { bottom: '50vh'})
.to('#seo .cursor', 1, { top: posTop, left: posLeft})
.to('.search-btn', 0, { boxShadow: 'inset 2px 2px 0 gray' })
.to('.search-btn', 0, { boxShadow: 'inset 0px 0px 0 gray' }, '=+.2')
.to('.google', 1.5, { scale: .75, opacity: 0 }, '=+.5' )


.to('.seo p:nth-child(1)', 1, {opacity: 0})
.to('.seo p:nth-child(2)', 1, {opacity: 1})

.from('.google-search .navbar', 1, { scale: .75, opacity: 0 })
.staggerFrom('.google-search .search-results > div', 1, { scale: .75, opacity: 0 }, '.5')
.to('.yoursite', 1, { backgroundColor: 'yellow'}, '=+.5')
.to('.yoursite', 2, { top: '0vh', marginTop: 0}, '=+.5')
.to('.search-results > div:nth-child(-n+3)', 2, { top: '+=10vh', marginTop: '40px' }, '=-1.5')
.staggerTo('.google-search .navbar, .search-results > div.othersite', 1, { scale: .75, opacity: 0  }, '.5', '=+2')
.to('.search-results > div.yoursite', 1, { scale: .75, opacity: 0  })
.to('.seo p:nth-child(2)', 1, {opacity: 0}, '-=1');


var title2 = new ScrollMagic.Scene({
	triggerElement:  '.hook',
	triggerHook: 'onLeave',
	offset: -600,
	duration: 3500
})
.setTween(seo)
.addTo(controller);

$w = $('.ad:nth-child(5)').width() / 2;
$h = $('.ad:nth-child(5)').height() / 2 + 60;
item1 = $('.ad:nth-child(5)').position();
item2 = $('.ad:nth-child(1)').position();
item3 = $('.ad:nth-child(3)').position();
item4 = $('.ad:nth-child(7)').position();
item5 = $('.ad:nth-child(9)').position();
item6 = $('.ad:nth-child(4)').position();
item7 = $('.ad:nth-child(6)').position();
item8 = $('.ad:nth-child(2)').position();
item9 = $('.ad:nth-child(8)').position();


var ppc = new TimelineMax()
.to('h1.ppc', 4, { bottom: '55%'})
.to('.ppc p:nth-child(1)', 1.5, {opacity: 1}, '-=1.5')
.to('h1.ppc', 1.5, { opacity: 0})
.staggerFrom('.ad', 1, { scale: .5, opacity: 0, ease: Back.easeOut}, .5, '=+2')
.to('.ppc p:nth-child(1)', 1, {opacity: 0})
.to('.ppc p:nth-child(2)', 1, {opacity: 1})
.to('#ppc .cursor', 1, {left: item1.left +$w, top: item1.top +$h}, '-=2')
.to('.ad:nth-child(5)', .5, {scale: .5, opacity: 0})
.from('.dollar:nth-child(5)', .5, {opacity: 0}, '-=.5', '-=.5')
.to('.dollar:nth-child(5)', 1.5, {opacity:0 , marginTop: '-100px'})
.to('#ppc .cursor', 1, {left: item2.left +$w, top: item2.top +$h})
.to('.ad:nth-child(1)', .5, {scale: .5, opacity: 0})
.from('.dollar:nth-child(1)', .5, {opacity: 0}, '-=.5')
.to('.dollar:nth-child(1)', 1.5, {opacity:0 , marginTop: '-100px'})
.to('#ppc .cursor', 1, {left: item3.left +$w, top: item3.top +$h})
.to('.ad:nth-child(3)', .5, {scale: .5, opacity: 0})
.from('.dollar:nth-child(3)', .5, {opacity: 0}, '-=.5')
.to('.dollar:nth-child(3)', 1.5, {opacity:0 , marginTop: '-100px'})
.to('#ppc .cursor', 1, {left: item4.left +$w, top: item4.top +$h})
.to('.ad:nth-child(7)', .5, {scale: .5, opacity: 0})
.from('.dollar:nth-child(7)', .5, {opacity: 0}, '-=.5')
.to('.dollar:nth-child(7)', 1.5, {opacity:0 , marginTop: '-100px'})
.to('#ppc .cursor', 1, {left: item5.left +$w, top: item5.top +$h})
.to('.ad:nth-child(9)', .5, {scale: .5, opacity: 0})
.from('.dollar:nth-child(9)', .5, {opacity: 0}, '-=.5')
.to('.dollar:nth-child(9)', 1.5, {opacity:0 , marginTop: '-100px'})
.to('#ppc .cursor', 1, {left: item6.left +$w, top: item6.top +$h})
.to('.ad:nth-child(4)', .5, {scale: .5, opacity: 0})
.from('.dollar:nth-child(4)', .5, {opacity: 0}, '-=.5')
.to('.dollar:nth-child(4)', 1.5, {opacity:0 , marginTop: '-100px'})
.to('#ppc .cursor', 1, {left: item7.left +$w, top: item7.top +$h})
.to('.ad:nth-child(6)', .5, {scale: .5, opacity: 0})
.from('.dollar:nth-child(6)', .5, {opacity: 0}, '-=.5')
.to('.dollar:nth-child(6)', 1.5, {opacity:0 , marginTop: '-100px'})
.to('#ppc .cursor', 1, {left: item8.left +$w, top: item8.top +$h})
.to('.ad:nth-child(2)', .5, {scale: .5, opacity: 0})
.from('.dollar:nth-child(2)', .5, {opacity: 0}, '-=.5')
.to('.dollar:nth-child(2)', 1.5, {opacity:0 , marginTop: '-100px'})
.to('#ppc .cursor', 1, {left: item9.left +$w, top: item9.top +$h})
.to('.ad:nth-child(8)', .5, {scale: .5, opacity: 0})
.from('.dollar:nth-child(8)', .5, {opacity: 0}, '-=.5')
.to('.dollar:nth-child(8)', 1.5, {opacity:0 , marginTop: '-100px'})
.to('#ppc .cursor', 1, {opacity:0})
.to('.ppc p:nth-child(2)', 1, {opacity: 0}, '-=1');


new ScrollMagic.Scene({
	triggerElement: '.hook',
	triggerHook: 'onLeave',
	offset: 3000,
	duration: '2500'
})
.setTween(ppc)
.addTo(controller);


var istart = {score:0};
var ytstart = {score:0};
var fbstart = {score:0};
var twstart = {score:0};
var instart = {score:0};
var gstart = {score:0};
var iscore = document.getElementsByClassName('score')[0];
var ytscore = document.getElementsByClassName('score')[1];
var fbscore = document.getElementsByClassName('score')[2];
var twscore = document.getElementsByClassName('score')[3];
var inscore = document.getElementsByClassName('score')[4];
var gscore = document.getElementsByClassName('score')[5];
function showScore(counter_index) {
	counter_index.innerHTML = demo.score.toFixed(0);
}

var social_media = new TimelineMax()
.to('h1.pm', 5, { bottom: '55%'})
.to('.social p:nth-child(1)', 1, {opacity: 1}, '-=1.5')
.to('h1.pm', 3, { opacity: 0})
.staggerFrom('.social-sharing > div', 1.5, { opacity: 0, scale: .5}, '1' , '+= 1.5')
.to(istart, 10, {score: 1240, onUpdate:function(){iscore.innerHTML = istart.score.toFixed(0)}}, '+= 2')
.to(ytstart, 8, {score: 806, onUpdate:function(){ytscore.innerHTML = ytstart.score.toFixed(0)}}, '-= 10')
.to(fbstart, 10, {score: 981, onUpdate:function(){fbscore.innerHTML = fbstart.score.toFixed(0)}}, '-= 10')
.to(twstart, 7, {score: 600, onUpdate:function(){twscore.innerHTML = twstart.score.toFixed(0)}}, '-= 10')
.to(instart, 5, {score: 356, onUpdate:function(){inscore.innerHTML = instart.score.toFixed(0)}}, '-= 10')
.to(gstart, 5, {score: 325, onUpdate:function(){gscore.innerHTML = gstart.score.toFixed(0)}}, '-= 10')
.fromTo('.likes', 20,{display: 'none'}, {display: 'block', autoAlpha: .5, backgroundPosition: '0 -100vh' }, '-=10')
.to('.social p:nth-child(1)', 1, {opacity: 0}, '-=16')
.to('.social p:nth-child(2)', 1, {opacity: 1}, '-=16')
.to('.likes', 5, { autoAlpha: 0 }, '-=3')
.staggerTo('.social-sharing > div', 5, {opacity: 0, scale: .5})
.to('.social p:nth-child(2)', 1, {opacity: 0});


new ScrollMagic.Scene({
	triggerElement: '.hook',
	triggerHook: 'onLeave',
	offset: 5600,
	duration: '1800'
})
.setTween(social_media)
.addTo(controller);

var final_cta = new TimelineMax()
.to('#final-cta h1', 1, {top: 0})
.to('.color-bg-form', 4, {padding: "2500px"}, '-=.2')
.to('.controller a', .2, {opacity: 1}, '-=3.5');


new ScrollMagic.Scene({
	triggerElement: '.hook',
	triggerHook: 'onLeave',
	offset: 7300,
	duration: '3000'
})
.setTween(final_cta)
.addTo(controller);
// .addIndicators();


var options = {
	"animate": true,
	"patternWidth": 300.43,
	"patternHeight": 241.15,
	"grainOpacity": 0.36,
	"grainDensity": 1.44,
	"grainWidth": 1,
	"grainHeight": 1
}
grained("#mobile-screen", options);

var URL = 'https://powerdigitalmarketing.com';

$.getJSON( "http://graph.facebook.com/?id="+URL, function(data){
	fb_count = data['share']['share_count'];
	fb_count = addCommas(fb_count);

	$('.fb-tag span').text(fb_count);
})

$.getJSON( 'http://opensharecount.com/count.json?url='+URL, function(data){
	tw_count = data['count'];
	tw_count = addCommas(tw_count);
	$('.twitter-tag span').text(tw_count);
})


function addCommas(x) {
	var parts = x.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
}

var fbShare = 'https://www.facebook.com/sharer/sharer.php?u='
var url = window.location;
$('.fb-tag a').attr('href', fbShare + URL);


var twShare = 'https://twitter.com/intent/tweet?text=';
var twMsg = 'Check Out This Scrolling Animation ';

$('.twitter-tag a').attr('href', twShare + twMsg + URL);




var step = 5;
var scrolling = false;

$('#scrollUp, #scrollDown').on('mouseover', function(){
	$('.lazy').fadeOut('slow');
})

$('body').on('mousewheel', function(){
	if($('html').scrollTop() > 1000){
		$('.lazy').fadeOut('slow');
	}
})
$('#scrollUp').hover(function(){
	scrolling = setInterval(function(){
		$("html, body").animate({
			scrollTop: '-=' + step + "px"
		}, 1);
	}, 50);

}, function(){
	clearInterval(scrolling);
	$('html, body').stop();
});


$('#scrollDown').hover(function(){
	scrolling = setInterval(function(){
		$("html, body").animate({
			scrollTop: '+=' + step + "px"
		}, 1);
	}, 50);

}, function(){
	clearInterval(scrolling);
	$('html, body').stop();
});




});