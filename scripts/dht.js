
// 在首页 real-panel 里插入一个文章摘要
function add_article_abstract(title, content, time = "") {
	if (time == "") {
		var today_date = new Date()
		time = "20"+today_date.getYear()%100+"-"+(today_date.getMonth()+1)+"-"+today_date.getDate()
	}
	var template_dom = "<div class=\"article-abstract-block\"><div class=\"article-abstract-title-block\"><p class=\"article-abstract-title\">"+title+"</p></div><div class=\"article-abstract-content-block\"><p class=\"article-abstract-content\">"+content+"<a href=\"http://www.baidu.com\" class=\"readmore-link\" id=\"readmore\"><span>more>> </span></a></p></div><div class=\"article-abstract-time-block\"><span class=\"article-abstract-time\">Created at " + time + "</span></div></div>"
	var void_container = document.createElement("div")
	void_container.innerHTML = template_dom
	var parent_dom = document.getElementById("real-panel")
	parent_dom.appendChild(void_container)
}

// 获取一定范围内的文章摘要, 并将其插入到首页中
function get_article_abstracts_by_range(start, end) {
	var all_abstracts = []
	$.ajax({
		url: "http://localhost:7777/server/nn",
		type: "GET",
		success: function(data) {
			all_abstracts = JSON.parse(data)
			var i = 0
			for (i = 0; i < all_abstracts["data"].length; ++i) {
				add_article_abstract(all_abstracts["data"][i]["title"], all_abstracts["data"][i]["abstract"], all_abstracts["data"][i]["time"])
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			console.log("请求对象XMLHttpRequest: "+XMLHttpRequest);
			console.log("错误类型textStatus: "+textStatus);
			console.log("异常对象errorThrown: "+errorThrown);
			alert("Sorry, there is an error occured in server.\n Please contact ritchie lee.")
		}
	})
}

