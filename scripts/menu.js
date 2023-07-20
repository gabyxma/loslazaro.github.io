(function(){
	const g = document.getElementsByClassName("mas")[0];
	const f = document.querySelector("header nav div.general  div.menu div.sub");
	g.addEventListener("click",function(){
		const va = f.style.height || "0px";
		if(va == "0px"){
			f.style.height = "calc(50vh - 40px)";
		}else{
			f.style.height = "0px";
		}
	});
	window.addEventListener('resize', function() {
  		if(window.innerWidth >= 1188 && f.style.height){
  			f.removeAttribute("style");
  		}
	});
})();