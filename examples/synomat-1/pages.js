module.exports = {

	
	page_0: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/001.htm',
		decisions:[
			{
				page:1,
				name:'Start'
			}
		]
	},


	page_1: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/001.htm',
		opts: "yoyo or cellar",
		decisions:[
			{
				page:16,
				name:'YoYo'
			}, 
			{
				page:101,
				name:'Cellar'
			}
		]
	},

	page_16: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/016.htm',
		opts: "follow or stay",
		decisions: [
			{
				page:64,
				name:'Follow'
			}, 
			{
				page:44,
				name:'Stay'
			}
		]
	},

	page_101: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/101.htm',
		opts: "-Over",
		decisions:[
			{
				page:1,
				name:'-Over'
			}
		]
	},


	page_64: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/064.htm',
		opts: "farmhouse or running",
		decisions:[
			{
				page:24,
				name:'Farmhouse'
			}, 
			{
				page:106,
				name:'Running'
			}
		]
	},

	page_44: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/044.htm',
		opts: "keep-running or couple",
		decisions:[
			{
				page:26,
				name:'Keep-Running'
			}, 
			{
				page:109,
				name:'Couple'
			}
		]
	},

	page_24: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/024.htm',
		opts: "animals or not",
		decisions:[
			{
				page:98,
				name:'Animals'
			}, 
			{
				page:30,
				name:'Not'
			}
		]
	},

	page_106: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/106.htm',
		opts: "",
		decisions:[
			
			{
				page:106,
				name:'Game Over Bad'
			}
		]
	},

	page_26: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/026.htm',
		opts: "Storehouse or Wendy",
		decisions: 'Keep-Running' [
			{
				page:80,
				name:'Storehouse'
			}, 
			{
				page:129,
				name:'Wendy'
			}
		]
	},

	page_109: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/109.htm',
		opts: "Keep or Van",
		decisions:[
			{
				page:47,
				name:'Keep'
			}, 
			{
				page:89,
				name:'Van'
			}
		]
	},

	page_98: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/098.htm',
		opts: "School or Bus",
		decisions:[
			{
				page:32,
				name:'School'
			}, 
			{
				page:112,
				name:'Bus'
			}
		]
	},

	page_30: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/030.htm',
		opts: "Cross or Other",
		decisions:[
			{
				page:39,
				name:'Cross'
			}, 
			{
				page:96,
				name:'Other'
			}
		]
	},

	page_80: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/080.htm',
		opts: "Rope or Means",
		decisions:[
			{
				page:75,
				name:'Rope'
			}, 
			{
				page:31,
				name:'Means'
			}
		]
	},

	page_129: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/129.htm',
		opts: "Shelter or Going",
		decisions:[
			{
				page:71,
				name:'Shelter'
			}, 
			{
				page:45,
				name:'Going'
			}
		]
	},

	page_47: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/047.htm',
		opts: "Accept or Dont",
		decisions:[
			{
				page:6,
				name:'Accept'
			}, 
			{
				page:124,
				name:'Dont'
			}
		]
	},

	page_89: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/089.htm',
		opts: "Break or Speed",
		decisions:[
			{
				page:25,
				name:'Break'
			}, 
			{
				page:102,
				name:'Speed'
			}
		]
	},

	page_32: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/032.htm',
		opts: "Free or Reason",
		decisions:[
			{
				page:57,
				name:'Free'
			}, 
			{
				page:119,
				name:'Reason'
			}
		]
	},

	page_112: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/112.htm',
		opts: "Cross or Other",
		decisions:[
			{
				page:39,
				name:'Cross'
			}, 
			{
				page:96,
				name:'Other'
			}
		]
	},

	page_39: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/039.htm',
		opts: "Stay-put or Leave",
		decisions:[
			{
				page:37,
				name:'Stay-put'
			}, 
			{
				page:67,
				name:'Leave'
			}
		]
	},

	page_96: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/096.htm',
		opts: "",
		decisions:[
			
			{
				page:133,
				name:'Game Over Bad'
			}
		]
	},

	page_75: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/075.htm',
		opts: "",
		decisions:[
			
			{
				page:20,
				name:'Game Over Bad'
			}
		]
	},

	page_31: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/031.htm',
		opts: "",
		decisions:[
			
			{
				page:11,
				name:'Game Over Win'
			}
		]
	},


	page_71: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/071.htm',
		opts: "Carpet or Out",
		decisions:[
			{
				page:69,
				name:'Carpet'
			}, 
			{
				page:50,
				name:'Out'
			}
		]
	},

	page_45: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/045.htm',
		opts: "Trailer or Cave",
		decisions:[
			{
				page:97,
				name:'Trailer'
			}, 
			{
				page:55,
				name:'Cave'
			}
		]
	},

	page_6: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/006.htm',
		opts: "",
		decisions:[
			
			{
				page:110,
				name:'Game Over Bad'
			}
		]
	},

	page_124: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/124.htm',
		opts: "",
		decisions:[
			
			{
				page:124,
				name:'Game Over Bad'
			}
		]
	},

	page_25: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/025.htm',
		opts: "",
		decisions:[
			
			{
				page:25,
				name:'Game Over Bad'
			}
		]
	},

	page_102: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/102.htm',
		opts: "Experiment or Agree",
		decisions:[
			{
				page:40,
				name:'Experiment'
			}, 
			{
				page:99,
				name:'Agree'
			}
		]
	},

	page_57: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/057.htm',
		opts: "",
		decisions:[
			
			{
				page:57,
				name:'Game Over Bad'
			}
		]
	},

	page_119: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/119.htm',
		opts: "",
		decisions:[
			
			{
				page:119,
				name:'Game Over Bad'
			}
		]
	},

	page_39: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/039.htm',
		opts: "Stay-put or Leave",
		decisions:[
			{
				page:37,
				name:'Stay-put'
			}, 
			{
				page:67,
				name:'Leave'
			}
		]
	},

	page_96: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/096.htm',
		opts: "",
		decisions:[
			
			{
				page:133,
				name:'Game Over Bad'
			}
		]
	},

	page_37: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/037.htm',
		opts: "",
		decisions: 'Stay-put' [
			{
				page:37,
				name:'Game Over Bad'
			}
		]
	},

	page_67: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/067.htm',
		opts: "Rescue or Help",
		decisions:[
			{
				page:49,
				name:'Rescue'
			}, 
			{
				page:68,
				name:'Help'
			}
		]
	},

	page_69: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/069.htm',
		opts: "",
		decisions:[
			
			{
				page:69,
				name:'Game Over Bad'
			}
		]
	},

	page_50: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/050.htm',
		opts: "",
		decisions:[
			
			{
				page:10,
				name:'Game Over Bad'
			}
		]
	},

	page_97: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/097.htm',
		opts: "Ethel or Escape",
		decisions:[
			{
				page:13,
				name:'Ethel'
			}, 
			{
				page:103,
				name:'Escape'
			}
		]
	},

	page_55: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/055.htm',
		opts: "Boulder or Continue",
		decisions:[
			
			{
				page:91,
				name:'Boulder'
			}, 
			{
				page:113,
				name:'Continue'
			}
		]
	},

	page_40: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/040.htm',
		opts: "Storm or Ground",
		decisions:[
			{
				page:19,
				name:'Storm'
			}, 
			{
				page:70,
				name:'Ground'
			}
		]
	},

	page_99: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/099.htm',
		opts: "Stop or Plan",
		decisions:[
			{
				page:95,
				name:'Stop'
			}, 
			{
				page:33,
				name:'Plan'
			}
		]
	},

	page_68: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/068.htm',
		opts: "",
		decisions:[
			{
				page:69,
				name:'Game Over Win'
			}
		]
	},

	page_49: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/049.htm',
		opts: "",
		decisions:[
			
			{
				page:84,
				name:'Game Over Win'
			}
		]
	},

	page_13: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/013.htm',
		opts: "Page or Doll",
		decisions:[
			{
				page:66,
				name:'Page'
			}, 
			{
				page:15,
				name:'Doll'
			}
		]
	},

	page_103: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/103.htm',
		opts: "",
		decisions:[
			
			{
				page:34,
				name:'Game Over Bad'
			}
		]
			
	},

	page_91: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/91.htm',
		opts: "",
		decisions:[
			
			{
				page: 91,
				name: 'Game Over Bad'
			},
		]
	},
	page_113: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/113.htm',
		opts: "Take or Return",
		decisions:[
			{
				page:21,
				name:'Take'
			}, 
			{
				page:77,
				name:'Return'
			}
		]
	},

	page_19: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/019.htm',
		opts: "Storm or Ground",
		decisions:[
			{
				page:51,
				name:'Storm'
			}, 
			{
				page:62,
				name:'Ground'
			}
		]
	},

	page_70: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/070.htm',
		opts: "Call or Own",
		decisions:[
			{
				page:42,
				name:'Call'
			}, 
			{
				page:59,
				name:'Own'
			}
		]
	},

	page_95: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/095.htm',
		opts: "",
		decisions:[
			{
				page:95,
				name:'Game Over Bad'
			}
		]
	},

	page_33: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/033.htm',
		opts: "",
		decisions:[
			{
				page:127,
				name:'Game Over Bad/Win'
			}
		]
	},

	page_66: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/066.htm',
		opts: "Twister or Hold",
		decisions:[
			{
				page:121,
				name:'Twister'
			}, 
			{
				page:60,
				name:'Hold'
			}
		]
	},

	page_15: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/015.htm',
		opts: "",
		decisions:[
			{
				page:15,
				name:'Game Over Bad'
			
			},
		]
	},

	page_21: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/021.htm',
		opts: "",
		decisions:[
			{
				page:85,
				name:'Game Over Win'
			}
		]
			
	},

	page_77: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/077.htm',
		opts: "Native or Apologiize",
		decisions:[
			{
				page:107,
				name:'Native'
			}, 
			{
				page:14,
				name:'Apologiize'
			}
		]
	},

	page_51: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/051.htm',
		opts: "",
		decisions:[
			{
				page:83,
				name:'Game Over Win'
			}
		]
	},

			

	page_62: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/062.htm',
		opts: "Trick or Fly",
		decisions:[
			{
				page:117,
				name:'Trick'
			}, 
			{
				page:48,
				name:'Fly'
			}
		]
	},

	page_42: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/042.htm',
		opts: "Suit or Intercom",
		decisions:[
			{
				page:35,
				name:'Suit'
			}, 
			{
				page:125,
				name:'Intercom'
			}
		]
	},

	page_86: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/086.htm',
		opts: "Controls or Spin",
		decisions:[
			{
				page:86,
				name:'Controls'
			}, 
			{
				page:17,
				name:'Spin'
			}
		]
	},

	page_121: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/121.htm',
		opts: "",
		decisions: [
			{
				page:121,
				name:'Game Over Bad'
			}, 
			
		]
	},
	page_60: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/060.htm',
		opts: "Stay? or Run?",
		decisions:[
			{
				page:23,
				name:'Stay?'
			}, 
			{
				page:126,
				name:'Run?'
			}
		]
	},

	page_107: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/107.htm',
		opts: "",
		decisions:[
			{
				page:107,
				name:'Game Over Bad/Win'
			}
		]
	},
			

	page_14: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/014.htm',
		opts: "",
		decisions:[
			{
				page:14,
				name:'Game Over Bad'
			}
		]
	},
			
	page_117: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/117.htm',
		opts: "",
		decisions:[
			{
				page:81,
				name:'Game Over Win'
			}
		]
	},
			

	page_48: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/048.htm',
		opts: "",
		decisions:[
			{
				page:81,
				name:'Game Over Bad'
			}
		]
	},
	page_35: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/035.htm',
		opts: "",
		decisions:[
			{
				page:65,
				name:'Game Over Bad'
			}
		]
	},
			

	page_125: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/125.htm',
		opts: "",
		decisions:[
			{
				page:4,
				name:' Over'
			}
		]
	},
			
	page_86: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/086.htm',
		opts: "",
		decisions:[
			{
				page:27,
				name:'Game Over Bad'
			}
		]
	},

	page_17: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/017.htm',
		opts: "",
		decisions:[
			{
				page:104,
				name:'Game Over Bad'
			}
		]
	},

			
	page_23: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/023.htm',
		opts: "",
		decisions:[
			{
				page:41,
				name:'Game Over Win'
			}
		]
	},

			

	page_126: {
		url: 'http://camilamercado.com/GBB/GooseBumpsBot/pages/126.htm',
		opts: "",
		decisions:[
			{
				page:126,
				name:'Game Over Bad'
			}
		]
	}

};