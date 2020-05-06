function loaded() {
	//document.getElementById("pagecontent").onhashchanged = function() {alert("hi")}
	document.getElementById("title").innerHTML = "VMan_2002's pages"
	if (location.hash == "") {
		location.hash = "#p_main" //Don't call the func here, because this will already call it
	} else {
		myFunction()
	}
}

function myFunction() {
	let thehash = location.hash
	alert("The hash is " + thehash);
	var prefix = "#p_"
	if (thehash.startsWith(prefix)) {
		let newpage = trim(thehash, prefix)
		alert("Changing to page " + newpage)
		gotopage(newpage)
	}
}

function gotopage(page) {
	let path = window.location.pathname
	path = window.location.protocol + "//" + path.slice(0, path.length - 9)
	pathtitle = path + "content_titles/" + page + ".html"
	path = path + "content/" + page + ".html"
	alert("The content in " + path + " and title in " + pathtitle)
	let reader_title = new FileReader()
	let reader_content = new FileReader()
	reader_title.addEventListener("load", function() {
		document.getElementById("title").innerHTML = reader_title.result
	}, false)
	reader_content.addEventListener("load", function() {
		document.getElementById("pagecontent").innerHTML = reader_content.result
	}, false)
}

function trim(a, b) {
	return a.slice(b.length)
}