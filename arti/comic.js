{
	let cpage = 0
	
	let pages = []
	let pagelabs = []
	{
		let i = 1
		do {
			let page = document.getElementById("imp" + i)
			if (page == null)
				break
			pages.push(page)
			i += 1
		} while (true)
	}
	pagelabs = pages.map(a => document.getElementById(a.id.replace("imp", "plab")))
	
	let cpageswitch = (by) => {
		cpage += by
		if (cpage > pages.length)
			cpage = 0
		else if (cpage < 0)
			cpage = pages.length
		
		location.hash = cpage
	}
	
	{
		let f = () => {
			cpage = +location.hash.substring(1)
			
			pageindicator.style.display = cpage == 0 ? "none" : "inline"
			pagenum.innerHTML = cpage
			
			for (i in pages) {
				pagelabs[i].style.display = cpage != 0 ? "none" : "block"
				pages[i].style.display = cpage - 1 != i && cpage != 0 ? "none" : "block"
			}
		}
		addEventListener("hashchange", f)
		f()
	}
	
	butleft.addEventListener("click", () => cpageswitch(-1))
	butright.addEventListener("click", () => cpageswitch(1))
	
	if (document.getElementById("charinfos")) {
		let func = (e) => {
			if (e.target.value == "")
				return;
			if (e.target.value.startsWith("https://"))
				location = e.target.value;
			else
				location = "https://artifyber.xyz/?" + e.target.value + "&fromUrl=" + location + "&fromTitle=" + document.title
		}
		charinfos.onchange = func
	}
}