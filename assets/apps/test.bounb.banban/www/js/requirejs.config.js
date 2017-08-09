/**********
requirejs通用配置
**********/

requirejs.config({
	"baseUrl": "../..",
	// 路径别名映射
	"paths": {
		"jq": "js/jquery-3.1.1.min", // jquery-3.1.1.min jq
		"json": "js/jquery.json-2.2", // jquery.json-2.2 jq json数据处理扩展
		"cropper":"js/cropper.min",
		"md5": "js/md5", // md5加密处理
		"css": "js/css", // css.js requirejs引用css样式文件扩展
		"cssfile": "css", // cssfile css样式文件根目录地址
		"viewsfile": "css/views", // viewsfile 页面对应独有css样式文件根目录地址
		"common": "js/common/common", // common.js 公用处理js库
		"banban-tree": "js/common/banban-tree", // 自定义树形控件
		"addr-list": "js/common/address-list", // 自定义通讯录控件
		"crossorgin": "js/crossorgin", // 自定义跨域调用封装
		"firstcharindex-list": "js/common/firstcharindex-list", // 自定义首字母所有列表
		"appcommon": "js/common/app-common", //app公共方法
		"clip":"js/common/cutting",
		"addressmap": "js/common/address-map", //选择地址地图方法
		"async": "js/async", //异步加载地图
		"amapwebapi": "https://webapi.amap.com/maps?v=1.3&key=f62345015dbde265c2c3689aee4b62c2&callback=init", //高德地图Api
		"highcharts": "js/highcharts", //图表js库
		"light7": "js/light7.min",
		"light7-swiper": "js/light7-swiper.min",
		"swiper": "js/swiper.min",
		"H5lock": "js/views/Me/H5lock",
		"flow_mobile": "js/views/flows/flow_mobile",
		"zoom": "js/mui.zoom",
		"share": "js/common/share", //分享功能
		"lazyload": "js/jquery.lazyload.min", //图片延迟加载
		"mui": "js/mui.min",
		"muipicker": "js/mui.picker.min",
		"light7-city": "js/light7-city-picker.min",
		"muiImage": "js/mui.previewimage",
		"nativeUI": "js/common/nativeUI",
		"immersed": "js/common/immersed",
		"appevent": "js/common/appevent",
		"update": "js/common/update",
		"imgReady": "js/common/imgReady",
		"module-list": "js/common/module-list",
		"banbanpay": "js/views/mkt/banbanpay",
		"userInfo": "js/common/userInfo",
		"nativeMethod": "js/common/nativeMethod",
		"Shoping": "js/views/marketing/advertorial/Shoping",
		"base-common": "js/common/base-common",
		"muipullToRefresh": "js/mui.pullToRefresh",
		"muipullToRefreshmaterial": "js/mui.pullToRefresh.material",
		"silderevent": "js/views/common/silderevent",
		"city-data":"js/city.data.min",
		"newbanbanpay":"js/views/marketing/advertorial/newbanbanpay",
		"newpayment":"js/views/common/newpayment",
		"storageData":"js/common/storageData",
		"exif":"js/exif",
		"recomCom":"js/common/RecommendCom",
	},
	// 文件依赖
	"shim": {
		"highcharts": ["jq"],
		"light7": ["common", "crossorgin"],
		"light7-swiper": ["light7", "css!cssfile/light7-swiper.min.css"],
		"swiper": ["css!cssfile/swiper.min.css"],
		"zoom": ["mui"],
		"share": ["mui", "jq"],
		"lazyload": ["jq"],
		"muipicker": ["mui", "css!cssfile/mui.picker.min.css"],
		"light7-city": ["light7"],
		"muiImage": ["zoom", "css!cssfile/mui.min.css", "css!viewsfile/IM/LookFile.css"],
		"module-list": ["css!cssfile/common/module-list.css"],
		"banbanpay": ["jq", "light7", "mui", "crossorgin"],
		"userInfo": ["crossorgin"],
		"Shoping": ["jq", "crossorgin"],
		"muipullToRefresh": ["mui"],
		"muipullToRefreshmaterial": ["muipullToRefresh"],
		"silderevent": ["mui"],
		"newbanbanpay":["mui","jq","crossorgin"],
		"newpayment":["mui"],
		"cropper":["jq"],
		"clip":["mui","jq"]
	},
	//等待时间
	"waitSeconds": 0
});