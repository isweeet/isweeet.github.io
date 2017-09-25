//预加载
var oPreload = $('.preload');
var oSpan = $('.preload span');
var iStatus = 0;
for (var i=0; i<imgData.length; i++) {
	var oImg = new Image();
	oImg.onload = function (){
		iStatus++;
		oSpan.html(Math.floor(iStatus/imgData.length*100));
		if (iStatus==imgData.length) {
			oSpan.parent().fadeOut();
			oPreload.slideUp(1600,function (){
				$(this).remove();
			});
		}
	}
	oImg.src = imgData[i];
}

//bootstrap小提示
$('[data-toggle="tooltip"]').tooltip();

