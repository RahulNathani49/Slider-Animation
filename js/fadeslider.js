var subu;
var subuUl;
var subuUlLi;
var countChildren;
var arrayLastEntry;
var b;
var newi = 0;
var currCount = 0;
var activeslide = "slide1";

TweenMax.to('.innercircle', 0.5, { scale: 1, opacity: 1 });
TweenMax.to('.innercircle2', 0, { scale: 1, opacity: 1, delay: 1 });
TweenMax.to('.boyimage', 0, { opacity: 1, y: -20, delay: 2 });
TweenMax.to('.cld', 0, { opacity: 1, delay: 2.5 });


(function($) {

    jQuery.fn.fadeslider = function() {

        //set duration time; 
        // window.setInterval(setDuration, 8000);

        function setDuration() {
            if (currCount == 0) {
                currCount = 1;
            } else {
                $(subuSliderNext);

            }

        }

        subu = $(this).attr('id');
        subuUl = $("#" + subu + ' ul');
        subuUlLi = $("#" + subu + ' ul li');
        countChildren = subuUl.children().length; //count total li
        arrayLastEntry = countChildren - 1;
        b = subuUlLi.hide();

        // push li element to array 
        var imgArr = [];
        $(subuUlLi).each(function() {
            imgArr.push(this);
        });



        function subuSliderNext() {
            startanim();
            startanim2();
            startanim3();
            if (arrayLastEntry > newi) {

                $(imgArr[newi]).fadeOut(0);
                $(bulArr[newi]).removeClass('bulletactive');
                ++newi;
                $(imgArr[newi]).fadeIn(2000);

                $(bulArr[newi]).addClass('bulletactive');
                var getid = imgArr[newi].getAttribute("id");
                console.log(getid);
            } else {
                $(imgArr[newi]).fadeOut(0);
                $(bulArr[newi]).removeClass('bulletactive');
                newi = 0;
                $(imgArr[newi]).fadeIn(2000);

                $(bulArr[newi]).addClass('bulletactive');
                getid = imgArr[newi].getAttribute("id");
                console.log(getid);
            }

        };

        function subuSlsiderPreview() {
            startanim();
            startanim2();
            startanim3();
            if (newi > 0) {
                $(bulArr[newi]).removeClass('bulletactive');
                $(imgArr[newi]).fadeOut(0);
                $(bulArr[newi - 1]).addClass('bulletactive');
                $(imgArr[newi - 1]).fadeIn(2000);
                getid = imgArr[newi - 1].getAttribute("id");
                --newi;

            } else {
                newi = 0;
                $(bulArr[newi]).removeClass('bulletactive');
                $(imgArr[newi]).fadeOut(0);
                newi = countChildren - 1;
                $(bulArr[newi]).addClass('bulletactive');
                $(imgArr[newi]).fadeIn(2000);
                getid = imgArr[newi].getAttribute("id");

            }

        };

        function startanim() {
            var slide1 = document.getElementById("slide1");

            // ----------------SLIDE 1----------------

            if (slide1.style.display != "none") {

                TweenMax.to('.innercircle', 0, { scale: .3, opacity: 0 });
                TweenMax.to('.innercircle2', 0, { scale: .3, opacity: 0 });
                TweenMax.to('.boyimage', 0, { opacity: 0 });
                TweenMax.to('.boyimage', 0, { opacity: 0, y: 20 });
                TweenMax.to('.cld', 0, { opacity: 0, delay: 2.5 });


            } else {

                if (activeslide == "slide1") {
                    TweenMax.to('.innercircle', 0, { scale: .3, opacity: 0 });
                    TweenMax.to('.innercircle2', 0, { scale: .3, opacity: 0 });
                    TweenMax.to('.boyimage', 0, { opacity: 0 });
                    TweenMax.to('.boyimage', 0, { opacity: 0, y: 20 });
                    TweenMax.to('.cld', 0, { opacity: 0, delay: 2.5 });
                }

                TweenMax.to('.innercircle', 0.5, { scale: 1, opacity: 1 });
                TweenMax.to('.innercircle2', 0, { scale: 1, opacity: 1, delay: 1 });
                TweenMax.to('.boyimage', 0, { opacity: 1, delay: 2 });
                TweenMax.to('.boyimage', 0, { opacity: 1, y: -20, delay: 2 });
                TweenMax.to('.cld', 0, { opacity: 1, delay: 2.5 });
            }


        }

        function startanim2() {
            TweenMax.to('.innertilt', 0, { scale: .3, opacity: 0 });
            TweenMax.to('.innertilt2', 0, { scale: .3, opacity: 0 });
            TweenMax.to('.teachimg', 0, { opacity: 0 });
            TweenMax.to('.teachimg', 0, { opacity: 0, y: 20 });
            TweenMax.to('.letter', 0, { opacity: 0, delay: 2.5 });
            var slide2 = document.getElementById("slide2");
            // ----------------SLIDE 2----------------

            if (slide2.style.display != "none") {

                TweenMax.to('.innertilt', 0, { scale: .3, opacity: 0 });
                TweenMax.to('.innertilt2', 0, { scale: .3, opacity: 0 });
                TweenMax.to('.teachimg', 0, { opacity: 0 });
                TweenMax.to('.teachimg', 0, { opacity: 0, y: 20 });
                TweenMax.to('.letter', 0, { opacity: 0, delay: 2.5 });

            } else {
                if (activeslide == "slide2") {
                    TweenMax.to('.innertilt', 0, { scale: .3, opacity: 0 });
                    TweenMax.to('.innertilt2', 0, { scale: .3, opacity: 0 });
                    TweenMax.to('.teachimg', 0, { opacity: 0 });
                    TweenMax.to('.teachimg', 0, { opacity: 0, y: 20 });
                    TweenMax.to('.letter', 0, { opacity: 0, delay: 2.5 });
                }

                TweenMax.to('.innertilt', 0.5, { scale: .5, opacity: 1 });
                TweenMax.to('.innertilt2', 0, { scale: .5, opacity: 1, delay: 1 });
                TweenMax.to('.teachimg', 0, { opacity: 1, delay: 2 });
                TweenMax.to('.teachimg', 0, { opacity: 1, y: -20, delay: 2 });
                TweenMax.to('.letter', 0, { opacity: 1, delay: 2.5 });

            }
        }

        function startanim3() {
            var slide3 = document.getElementById("slide3");
            // ----------------SLIDE 3----------------

            if (slide3.style.display != "none") {

                TweenMax.to('.inner-tri-tilt', 0, { scale: .5, opacity: 0 });
                TweenMax.to('.inner-tri-tilt2', 0, { scale: .5, opacity: 0 });
                TweenMax.to('.girl-banner', 0, { opacity: 0 });
                TweenMax.to('.girl-banner', 0, { opacity: 0, y: 20 });

            } else {

                TweenMax.to('.inner-tri-tilt', 0.5, { scale: .7, opacity: 1 });
                TweenMax.to('.inner-tri-tilt2', 0, { scale: .7, opacity: 1, delay: 1 });
                TweenMax.to('.girl-banner', 0, { opacity: 1, delay: 2 });
                TweenMax.to('.girl-banner', 0, { opacity: 1, y: -20, delay: 2 });
            }


        }

        var bulArr = [];
        $("#sliderBulet div").each(function() {
            bulArr.push(this);
        });

        var c = subuUlLi.first().show();
        $(bulArr[newi]).addClass('bulletactive');

        $("#sliderBulet div").on("click", function() {
            $('.slider-title').remove();
            var id = $(this).attr("id");
            id = id.replace('b', '');
            if (newi < id) {
                console.log(imgArr[newi]);
                $(imgArr[newi]).fadeOut(0);
                $(bulArr[newi]).removeClass('bulletactive');
                $(bulArr[id]).addClass('bulletactive');
                $(imgArr[id]).fadeIn(1000);
                newi = id;
                currCount = 0;

            } else {
                console.log(imgArr[newi]);
                $(imgArr[newi]).fadeOut(0);
                $(bulArr[newi]).removeClass('bulletactive');
                $(bulArr[id]).addClass('bulletactive');
                $(imgArr[id]).fadeIn(1000);
                newi = id;
                currCount = 0;

            }
        });
        $('#' + subu).append('<a id="subuprev">', '<a id="subunext">');
        $("#subunext").on("click", function(e) {

            e.preventDefault();
            subuSliderNext();
            currCount = 0;
        });
        $("#subuprev").on("click", function(e) {

            e.preventDefault();
            subuSlsiderPreview();
            currCount = 0;
        });
    };
})(jQuery);