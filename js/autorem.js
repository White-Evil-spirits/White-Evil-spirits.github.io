var docEl = document.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
				var clientWidth = document.documentElement.clientWidth;
                if (!clientWidth) return;
                if(clientWidth>=750){
                    docEl.style.fontSize = '100px';
                    self.remval=100;
                }else{
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';}
            };

        window.addEventListener(resizeEvt, recalc, false);
		window.addEventListener("load", recalc, false);