var ProjectAnim = (function(){
	function replaceInvi(el, _class, timer) {
		if(!timer) {
			timer = 400;
		}
		setTimeout( function(){ el.removeClass('invisible').addClass(_class); }, timer);
	}
	// Animations for people - around block;
	var peopleA = function(){
		var $parent = $('.people-around-prj');

		var elems = {
			$andrew : $('.andrew', $parent),
			$desc : $('.p-desc', $parent),
			$banner : $('.p-banner', $parent),
			$empty : $('.p-empty', $parent),
			$screen : $('.p-screen', $parent),
			$logo : $('.p-logo', $parent)
		};
		
		replaceInvi(elems['$desc'], 'pt-page-scaleUp', 400);
		replaceInvi(elems['$banner'], 'pt-page-scaleUp', 600);
		replaceInvi(elems['$empty'], '', 400);
		replaceInvi(elems['$andrew'], 'pt-page-scaleUp', 700);
		replaceInvi(elems['$screen'], 'pt-page-scaleUp', 800);
		replaceInvi(elems['$logo'], 'pt-page-scaleUp', 1000);
	};

	var mdpEvent = function(){
		var $parent = $('.mdp-event-prj');

		var elems = {
			$part1 : $('.part-1', $parent),
			$part2 : $('.part-2', $parent),
			$part3 : $('.part-3', $parent),
			$part4 : $('.part-4', $parent),
			$col2 : $('.col-2', $parent),
			$desc : $('.prj-desc', $parent),
			$moreDesc : $('.prj-more-desc', $parent)

		};
		
		replaceInvi(elems['$part1'], 'pt-page-rotateCubeLeftIn', 1000);
		replaceInvi(elems['$part2'], 'pt-page-rotateCubeRightIn', 1200);
		replaceInvi(elems['$part3'], 'pt-page-rotateCubeLeftIn', 1400);
		replaceInvi(elems['$part4'], 'pt-page-rotateCubeRightIn', 1600);
		replaceInvi(elems['$col2'], 'pt-page-rotateCubeRightIn', 400);
		replaceInvi(elems['$desc'], 'pt-page-rotateCubeBottomIn', 600);
		replaceInvi(elems['$moreDesc'], 'pt-page-rotateCubeTopIn', 800);
	};
	var alfaPeople = function(){
		var $parent = $('.alfa-people');

		var elems = {
			$desc : $('.prj-desc', $parent),
			$moreDesc : $('.prj-more-desc', $parent),
			$overlay : $('.overlay', $parent)
		};

		replaceInvi(elems['$desc'], 'pt-page-scaleUp', 400);
		replaceInvi(elems['$moreDesc'], 'pt-page-scaleUp', 600);
		replaceInvi(elems['$overlay'], 'pt-page-scaleDownCenter', 1200);
	};
	var dahSloboda = function(){
		var $parent = $('.dah-sl');

		var elems = {
			$cover : $('.cover', $parent),
			$desc : $('.prj-desc', $parent),
			$moreDesc : $('.prj-more-desc', $parent),
			$dire : $('.dire')
		};

		replaceInvi(elems['$desc'], 'pt-page-scaleUp', 400);
		replaceInvi(elems['$moreDesc'], 'pt-page-scaleUp', 800);
		replaceInvi(elems['$cover'], 'pt-page-moveFromLeft', 600);
		replaceInvi(elems['$dire'], 'pt-page-rotatePullBottom', 1000);
	};
	var sunnyClub = function(){
		var $parent = $('.sun-club');

		var elems = {
			$cover : $('.cover', $parent),
			$desc : $('.prj-desc', $parent),
			$moreDesc : $('.prj-more-desc', $parent)
		};

		replaceInvi(elems['$desc'], 'pt-page-scaleUp', 600);
		replaceInvi(elems['$moreDesc'], 'pt-page-scaleUp', 800);
		replaceInvi(elems['$cover'], 'pt-page-scaleUp', 400);
	};
	var peopleFlag = false;
		mdpFlag = false;
		alfaFlag = false;
		dahFlag = false;
		sunnyFlag = false;

	var execOnScroll = function(){
		var mainOffset = $(window).scrollTop(),
			peopleOffset = $('.people-around-prj'),
			mdpOffset = $('.mdp-event-prj'),
			alfaOffset = $('.alfa-people'),
			dahOffset = $('.dah-sl'),
			sunnyOffset = $('.sun-club');

		if( peopleFlag === false) {
			peopleA();
			peopleFlag=true;
			console.log('pip');
		}
		if( mdpFlag === false && mainOffset >= mdpOffset.offset().top - mdpOffset.height()) {
			mdpEvent();
			mdpFlag=true;
			console.log('pip');
		}
		if( alfaFlag === false && mainOffset >= alfaOffset.offset().top - alfaOffset.height()) {
			alfaPeople();
			alfaFlag=true;
			console.log('pip');
		}
		if( dahFlag === false && mainOffset >= dahOffset.offset().top - dahOffset.height()) {
			dahSloboda();
			dahFlag=true;
			console.log('pip');
		}
		if( sunnyFlag === false && mainOffset >= sunnyOffset.offset().top - sunnyOffset.height()) {
			sunnyClub();
			sunnyFlag=true;
			console.log('pip');
		}
	};

	return {
		execOnScroll : execOnScroll
	};

})();
$(function(){
	ProjectAnim.execOnScroll();
});
$(window).scroll( ProjectAnim.execOnScroll );