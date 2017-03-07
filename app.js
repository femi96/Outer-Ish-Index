//
(function()
{
	var oiiApp = angular.module("oiiApp", ["ngRoute"]);

	oiiApp.controller("oiiController", function($scope, $window, $interval){

		// Timer

		$scope.time = 25*60;
		$scope.timeMode = 'Working...';
		$scope.ticking = false;

		$scope.starttimer = function() {
			$scope.ticking = true;
			if($scope.interval){
				$interval.cancel($scope.interval);
			}
			$scope.onInterval = function(){
				if($scope.time == 0) {$scope.timeralert(); $scope.stoptimer();}
				else {$scope.time--;}
			}
			$scope.interval = $interval($scope.onInterval,1000);
		};
		$scope.stoptimer = function(){
			$scope.ticking = false;
			$interval.cancel($scope.interval);
		};
		$scope.resettimer = function(){
			if($scope.timeMode == 'Working...') {$scope.time = 25*60}
			if($scope.timeMode == 'Resting...') {$scope.time = 5*60}
			$scope.stoptimer();
		};

		$scope.timermode = function() {
			if($scope.timeMode == 'Working...') { $scope.timeMode = 'Resting...'}
			else { $scope.timeMode = 'Working...'}
			$scope.resettimer();
		};
		$scope.timeralert = function() {
			$window.alert('Timer Done');
		};

		// Quotes

		$scope.quotes = [["Sometimes the best way to solve your own problems, is to help someone else's"/*,'-Uncle Iroh'*/]]

		$scope.getQuote = function() {
			q = $scope.quotes[Math.floor(Math.random()*$scope.quotes.length)];
			return q
		};
		$scope.quote = $scope.getQuote()

		$scope.secret = function() {
			return '/#!/secret';
		};

		// Stubs

		$scope.stubs = {datatap: {title: 'Data Tapestry', sub:'An Earth Tapestry Explorer', date: 'June 2015', link: '/#!/projects/datatap', desc:'During the summer of 2015, I developed an interactive visual data display for the Earth Tapestry project. Earth Tapestry is a project by Kevin Hu and Travis Rich done in collaboration with a team at Carnegie Mellon. It was built on top of Quantify, and the data display was developed to expand to other Quantify projects. The project was launched as Data Tapestry by the MIT Media Lab.'},
			pubpub2015: {title: 'PubPub (2015)', sub:'Open, Continuous Publishing', date: 'June-July 2015', link: '/#!/projects/pubpub', desc:'During the summer of 2015, I contributed to the development of Viral Communication’s project, “PubPub.” PubPub is an open source academic publishing platform. The contributions developed included a frontend file uploading interface and a text editor, both using AngularJS.'},
			pubpub2016: {title: 'PubPub (2016)', sub:'Open, Continuous Publishing', date: 'May-July 2016', link: '/#!/projects/pubpub', desc:'During the summer of 2016, I contributed to the development of Viral Communication’s project, “PubPub.” PubPub is an open source academic publishing platform. The contributions developed included a backend analytics route and a front end visualization, both using D3, React, Redux, and Immutable.'},
			arche: {title: 'ArcheRPG', sub:'A Tabletop RPG System', date: 'June-July 2016', link: '/#!/projects/arche', desc:'During the summer of 2016, I created a tabletop RPG designed to accommodate a variety of settings and playstyles. The project was put on hiatus after brief playtesting and will be revisited soon.'},
			module: {title: 'ModuleCG', sub:'An Action-Programming Card Game', date: 'December 2015', id: 'mod', link: '/#!/projects/module', desc:'During the winter of 2015, I participated in a tabletop game jam known as Paper Jam 4. The challenge was to make a printable game over a 10 day period with one of the given sets of mechanics, themes, goals, and constraints. The project is to be revisited soon.'},
			conspiro: {title: 'Conspiro', sub:'A Non-Conventional Tabletop', date: 'April-May 2016', link: '/#!/projects/conspiro', desc:'During the spring of 2016, I worked on a project for CMS.301, An Introduction to Game Design Methods. The project was centered around designing a game based on the use of non-conventional skills. The resultant game was designed for 4-6 players with generally positive feedback from playtesters.'},
			whatisagame: {title: '“What is a Game?”', sub:'Multi-Level Understanding of Games as Media', date: 'November 2016', link: '/#!/thoughts/whatisagame', desc:'A summary and comparison of the game models of Jesper Juul and Keith Burgun. Written for CMS.400, Media Systems and Texts.'},
			comics: {title: 'An Examination of Comics', sub:'An Examination of Comics by Comparison to other Mediums', date: 'December 2016', link: '/#!/thoughts/comics', desc:'A analysis of comics as a medium by comparison to more traditional media forms. Written and revised for CMS.400, Media Systems and Texts.'}};
		$scope.stubMain = [$scope.stubs['arche'], $scope.stubs['pubpub2016']]
		$scope.stubWork = [$scope.stubs['pubpub2016'], $scope.stubs['pubpub2015'], $scope.stubs['datatap']]
		$scope.stubProj = [$scope.stubs['arche'], $scope.stubs['pubpub2016'], $scope.stubs['conspiro'], $scope.stubs['module'], $scope.stubs['pubpub2015'], $scope.stubs['datatap']]
		$scope.stubThou = [$scope.stubs['whatisagame'], $scope.stubs['comics']]

		$scope.collabs = [{name:'Peter Van', sub:'Graphic Artist & Industrial Designer', desc:'Peter worked on ModuleCG, designing and creating the original card templates plates based on design descriptions and understanding of the mechanics. He was also responsible for combining templates and card art into printable cards. Currently in school for industrial design.', outgoing:[{text:'Twitch.tv',link:'https://www.twitch.tv/smexydonut'}], list:[{text:'Module',link:'/#!/projects/module', id: 'mod'}]},
			{name:'Anh Le', sub:'Artist & Video Editor', desc:'Anh contributed art for ModuleCG, creating many of the program and function card arts. He has an ongoing webcomic known as “Everglow,” and regularly streams it’s production on twitch.', outgoing:[{text:'Twitter',link:'https://twitter.com/Mel0h_Art'}, {text:'Twitch.tv',link:'https://www.twitch.tv/smexydonut'}, {text:'DeviantArt',link:'http://leanh90.deviantart.com/'}], list:[{text:'Module',link:'/#!/projects/module', id: 'mod'}]},
			{name:'Craig Downing', sub:'Actor & Game Designer', desc:'Craig contributed ideas and design input for ArcheRPG. He has experience with tabletop RPGs as both a DM and player, and occasionally streams on twitch.', outgoing:[{text:'Twitter',link:'https://twitter.com/craigs_benedict'}, {text:'Twitch.tv',link:'https://www.twitch.tv/craigs_benedict'}], list:[{text:'ArcheRPG',link:'/#!/projects/arche'}]}];

		$scope.listProg = [{text:'Windows 7/8/10',link:'https://www.microsoft.com/en-us/windows/'},
			{text:'Mac OSX',link:'http://www.apple.com/osx/'},
			{text:'Microsoft Office Products',link:'https://products.office.com/en-US/'},
			{text:'Google Drive Services',link:'https://drive.google.com/'},
			{text:'Matlab',link:'http://www.mathworks.com/products/matlab'},
			{text:'Blender',link:'https://www.blender.org/'},
			{text:'Unity3D',link:'https://unity3d.com/'},
			{text:'Solidworks',link:'http://www.solidworks.com/'}];
		$scope.listLang = [{text:'English',link:'https://en.wikipedia.org/wiki/American_English'},
			{text:'Python 2.7/3+',link:'https://www.python.org/'},
			{text:'Javascript/ES6',link:'https://www.javascript.com/'},
			{text:'HTML',link:'https://en.wikipedia.org/wiki/HTML'},
			{text:'CSS',link:'https://en.wikipedia.org/wiki/Cascading_Style_Sheets'},
			{text:'C#',link:'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)'}];
		$scope.listFram = [{text:'Node.js',link:'https://nodejs.org/'},
			{text:'Node Project Manager',link:'https://www.npmjs.com/'},
			{text:'React',link:'https://facebook.github.io/react/'},
			{text:'Redux',link:'http://redux.js.org/'},
			{text:'Immutable',link:'https://facebook.github.io/immutable-js/'},
			{text:'AngularJS',link:'https://angularjs.org/'},
			{text:'Meteor',link:'https://www.meteor.com/'},
			{text:'Galaxy',link:'https://galaxy.meteor.com'}];
		$scope.listCourse1 = [{text:'3.091: Introduction to Solid-State Chemistry',link:'http://student.mit.edu/catalog/search.cgi?search=3.091'},
			{text:'6.0001: Introduction to Computer Science Programming in Python',link:'http://student.mit.edu/catalog/search.cgi?search=6.0001'},
			{text:'6.01: Introduction to EECS I',link:'http://student.mit.edu/catalog/search.cgi?search=6.01'},
			{text:'6.057: Introduction to MATLAB',link:'http://student.mit.edu/catalog/search.cgi?search=6.057'},
			{text:'7.013: Introductory Biology',link:'http://student.mit.edu/catalog/search.cgi?search=7.013'},
			{text:'8.01: Physics I (Mechanics)',link:'http://student.mit.edu/catalog/search.cgi?search=8.01'},
			{text:'8.02: Physics II (EM)',link:'http://student.mit.edu/catalog/search.cgi?search=8.02'},
			{text:'18.01: Calculus I',link:'http://student.mit.edu/catalog/search.cgi?search=18.01'},
			{text:'18.02: Calculus II',link:'http://student.mit.edu/catalog/search.cgi?search=18.02'},
			{text:'18.03: Differential Equations',link:'http://student.mit.edu/catalog/search.cgi?search=18.03'},
			{text:'21W.747: Rhetoric',link:'http://student.mit.edu/catalog/search.cgi?search=21W.747'}];
		$scope.listCourse2 = [{text:'2.001: Mechanics and Materials I',link:'http://student.mit.edu/catalog/search.cgi?search=2.001'},
			{text:'2.002: Mechanics and Materials II',link:'http://student.mit.edu/catalog/search.cgi?search=2.002'},
			{text:'2.003: Dynamics and Control I',link:'http://student.mit.edu/catalog/search.cgi?search=2.003'},
			{text:'2.004: Dynamics and Control II',link:'http://student.mit.edu/catalog/search.cgi?search=2.004'},
			{text:'2.005: Thermal-Fluids Engineering I',link:'http://student.mit.edu/catalog/search.cgi?search=2.005'},
			{text:'2.086: Numerical Computation for Mechanical Engineers',link:'http://student.mit.edu/catalog/search.cgi?search=2.086'},
			{text:'21L.011: The Film Experience',link:'http://student.mit.edu/catalog/search.cgi?search=21L.011'},
			{text:'CMS.301: Introduction to Game Design Methods',link:'http://student.mit.edu/catalog/search.cgi?search=CMS.301'}];
		$scope.listCourse3 = [{text:'2.006 Thermal-Fluids Engineering II',link:'http://student.mit.edu/catalog/search.cgi?search=2.006'},
			{text:'2.670 Mechanical Engineering Tools',link:'http://student.mit.edu/catalog/search.cgi?search=2.670'},
			{text:'2.671 Measurement and Instrumentation',link:'http://student.mit.edu/catalog/search.cgi?search=2.671'},
			{text:'2.678 Electronics for Mechanical Systems',link:'http://student.mit.edu/catalog/search.cgi?search=2.678'},
			{text:'6.0002 Introduction to Computational Thinking and Data Science',link:'http://student.mit.edu/catalog/search.cgi?search=6.0002'},
			{text:'6.036 Introduction to Machine Learning',link:'http://student.mit.edu/catalog/search.cgi?search=6.036'},
			{text:'6.042 Mathematics for Computer Science',link:'http://student.mit.edu/catalog/search.cgi?search=6.042'},
			{text:'CMS.400 Media Systems and Texts',link:'http://student.mit.edu/catalog/search.cgi?search=CMS.400'},
			{text:'CMS.611 Creating Video Games',link:'http://student.mit.edu/catalog/search.cgi?search=CMS.611'}];
	});

	oiiApp.config(function($routeProvider){
		$routeProvider
		.when("/", { templateUrl : "pages/main.html" })
		.when("/about", { templateUrl : "pages/about.html" })
		.when("/projects", { templateUrl : "pages/projects.html" })
		.when("/projects/arche", { templateUrl : "pages/projects/arche.html" })
		.when("/projects/pubpub", { templateUrl : "pages/projects/pubpub.html" })
		.when("/projects/conspiro", { templateUrl : "pages/projects/conspiro.html" })
		.when("/projects/module", { templateUrl : "pages/projects/module.html", css: 'css/hover_mod.css' })
		.when("/projects/datatap", { templateUrl : "pages/projects/datatap.html" })
		.when("/thoughts", { templateUrl : "pages/thoughts.html" })
		.when("/thoughts/comics", { templateUrl : "pages/thoughts/comics.html" })
		.when("/thoughts/whatisagame", { templateUrl : "pages/thoughts/whatisagame.html" })
		.when("/collab", { templateUrl : "pages/collab.html" })
		.when("/secret", { templateUrl : "pages/secret/secret.html" })
		.when("/timer", { templateUrl : "pages/secret/timer.html" });
	});

	oiiApp.filter('mmss', function () {
		return function (time) {
			var sec_num = parseInt(time, 10); // don't forget the second param
			var minutes = Math.floor(sec_num / 60);
			var seconds = sec_num - (minutes * 60);

			if (minutes < 10) {minutes = "0"+minutes;}
			if (seconds < 10) {seconds = "0"+seconds;}
			var time = minutes+':'+seconds;
			return time;
		}
	});

	oiiApp.directive('head', ['$rootScope','$compile',	function($rootScope, $compile){
		return {
			restrict: 'E',
			link: function(scope, elem){
				var html = '<link rel="stylesheet" ng-repeat="(routeCtrl, cssUrl) in routeStyles" ng-href="{{cssUrl}}" />';
				elem.append($compile(html)(scope));
				scope.routeStyles = {};
				$rootScope.$on('$routeChangeStart', function (e, next, current) {
					if(current && current.$$route && current.$$route.css){
						if(!angular.isArray(current.$$route.css)){
							current.$$route.css = [current.$$route.css];
						}
						angular.forEach(current.$$route.css, function(sheet){
							delete scope.routeStyles[sheet];
						});
					}
					if(next && next.$$route && next.$$route.css){
						if(!angular.isArray(next.$$route.css)){
							next.$$route.css = [next.$$route.css];
						}
						angular.forEach(next.$$route.css, function(sheet){
							scope.routeStyles[sheet] = sheet;
						});
					}
				});
			}
		};
	}]);

})();