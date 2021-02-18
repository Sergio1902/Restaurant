(function($) {
    var slide = function(ele,options) {
        var $ele = $(ele);
        var setting = {	
            speed: 1000,
            interval: 2000,
            };
        
        $.extend(true, setting, options);
        
        var states = [
            { $zIndex: 1, width: 100, height: 100, top: 59, left: 10, $opacity: 0.2 },
            { $zIndex: 2, width: 110, height: 120, top: 49, left: 35, $opacity: 0.4 },
            { $zIndex: 3, width: 130, height: 168, top: 25, left: 60, $opacity: 0.7 },
            { $zIndex: 4, width: 180, height: 220, top: 0, left: 100, $opacity: 1 },
            { $zIndex: 3, width: 130, height: 168, top: 25, left: 200, $opacity: 0.7 },
            { $zIndex: 2, width: 110, height: 120, top: 49, left: 250, $opacity: 0.4 },
            { $zIndex: 1, width: 100, height: 100, top: 59, left: 285, $opacity: 0.2 }
        ];

        var $lis = $ele.find('li');
        var timer = null;

        // clase del btn next
        $ele.find('.hi-next').on('click', function() {
            next();
        });
        // claase del btn preview
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();

       
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }
        function next() {
            states.unshift(states.pop());
            move();
        }
        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }

    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        return this;
    }
})(jQuery);
