window.addEventListener("resize", onResize);
window.addEventListener("load", onResize);

function onResize() {
	var width = window.innerWidth;

	document.getElementById("test").innerHTML = width;
}