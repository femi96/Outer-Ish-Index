(function()
{
  var oiiApp = angular.module("oiiApp", ["ngRoute"]);

  oiiApp.controller("oiiController", function($scope){
    stubs = {
      datatap: {
        title:'Data Tapestry',
        sub:'Earth Tapestry Data Exploration',
        date:'June 2015',
        skills:'D3 · HTML · Javascript · CSS · NPM',
        id:'datatap',
        link:'/#!/projects/datatap',
        desc:'During the summer of 2015, I developed an interactive visual data display for the Earth Tapestry project. Earth Tapestry is a project by Kevin Hu and Travis Rich done in collaboration with a team at Carnegie Mellon. It was built on top of Quantify, and the data display was developed to expand to other Quantify projects. The project was launched as Data Tapestry by the MIT Media Lab.'},
      pubpub2015: {
        title:'PubPub (2015)',
        sub:'Open, Continuous Publishing',
        date:'June-August 2015',
        skills:'AngularJS · HTML · Javascript · CSS · NPM',
        link:'/#!/projects/pubpub',
        desc:'During the summer of 2015, I contributed to the development of Viral Communication’s project, “PubPub.” PubPub is an open source academic publishing platform. The contributions developed included a frontend file uploading interface and a text editor, both using AngularJS.'},
      pubpub2016: {
        title:'PubPub (2016)',
        sub:'Open, Continuous Publishing',
        date:'June-August 2016',
        skills:'React · Redux · Immutable · HTML · Javascript · CSS · NPM',
        link:'/#!/projects/pubpub',
        desc:'During the summer of 2016, I contributed to the development of Viral Communication’s project, “PubPub.” PubPub is an open source academic publishing platform. The contributions developed included a backend analytics route and a front end visualization, both using D3, React, Redux, and Immutable.'},
      gameblox: {
        title:'Gameblox',
        sub:'Playful, Powerful Learning',
        date:'June-August 2017',
        skills:'React · Redux · PouchDB · HTML · Javascript · CSS · NPM',
        link:'/#!/projects/gameblox',
        desc:'During the summers of 2017, I worked on the Gameblox project with the MIT Scheller Teacher Education Program Lab. Gameblox is a block-based programming encironment, developed by the STEP Lab. The environment is designed for making games online, and intended for classroom use. The novice friendly programming allows for students and teachers alike to create games and enhance the learning experience.'},
      clevr: {
        title:'Clevr',
        sub:'collaboration',
        date:'January 2018-Present',
        skills:'Unity3D · C# · Cg · Blender',
        link:'/#!/projects/clevr',
        desc:'xxxxxxxxxxxxxxxxx'},
      pan: {
        title:'Gardens of Pan',
        sub:'subtitle',
        date:'February 2018-Present',
        skills:'Unity3D · C# · Blender',
        link:'/#!/projects/pan',
        desc:'xxxxxxxxxxxxxxxxx'},
      modulecg: {
        title:'ModuleCG',
        sub:'An Action-Programming Card Game',
        date:'December 2015',
        skills:'Google Drive',
        link:'/#!/projects/module',
        desc:'During the winter of 2015, I participated in a tabletop game jam known as Paper Jam 4. The challenge was to make a printable game over a 10 day period with one of the given sets of mechanics, themes, goals, and constraints. The project is to be revisited soon.'},
    };

    $scope.stubsViral = [
      stubs['pubpub2016'],
      stubs['pubpub2015'],
      stubs['datatap'],
    ];
    $scope.stubsStep = [
      stubs['clevr'],
      stubs['gameblox'],
    ];
    $scope.stubsProjects = [
      stubs['pan'],
      stubs['clevr'],
      stubs['gameblox'],
      stubs['pubpub2016'],
      stubs['modulecg'],
      stubs['pubpub2015'],
      stubs['datatap'],
    ];

    $scope.thoughtStubs = [
    {title: '“What is a Game?”',
      sub:'Multi-Level Understanding of Games as Media',
      date: 'November 2016',
      link: '/#!/thoughts/whatisagame',
      desc:'A summary and comparison of the game models of Jesper Juul and Keith Burgun. Written for CMS.400, Media Systems and Texts.'},
    {title: 'An Examination of Comics',
      sub:'An Examination of Comics by Comparison to other Mediums',
      date: 'December 2016',
      link: '/#!/thoughts/comics',
      desc:'A analysis of comics as a medium by comparison to more traditional media forms. Written and revised for CMS.400, Media Systems and Texts.'}
    ];

    $scope.courses1 = [
    {text:'Introduction to Solid-State Chemistry',
      number:'3.091'},
    {text:'Introduction to Computer Science Programming in Python',
      number:'6.0001'},
    {text:'Introduction to EECS I',
      number:'6.01'},
    {text:'Introduction to MATLAB',
      number:'6.057'},
    {text:'Introductory Biology',
      number:'7.013'},
    {text:'Physics I (Mechanics)',
      number:'8.01'},
    {text:'Physics II (EM)',
      number:'8.02'},
    {text:'Calculus I',
      number:'18.01'},
    {text:'Calculus II',
      number:'18.02'},
    {text:'Differential Equations',
      number:'18.03'},
    {text:'Rhetoric',
      number:'21W.747'}
    ];

    $scope.courses2 = [
    {text:'Mechanics and Materials I',
      number:'2.001'},
    {text:'Mechanics and Materials II',
      number:'2.002'},
    {text:'Dynamics and Control I',
      number:'2.003'},
    {text:'Dynamics and Control II',
      number:'2.004'},
    {text:'Thermal-Fluids Engineering I',
      number:'2.005'},
    {text:'Numerical Computation for Mechanical Engineers',
      number:'2.086'},
    {text:'The Film Experience',
      number:'21L.011'},
    {text:'Introduction to Game Design Methods',
      number:'CMS.301'}];
    
    $scope.courses3 = [
    // {text:'Thermal-Fluids Engineering II',
    //   number:'2.006'},
    {text:'Mechanical Engineering Tools',
      number:'2.670'},
    {text:'Measurement and Instrumentation',
      number:'2.671'},
    {text:'Electronics for Mechanical Systems',
      number:'2.678'},
    {text:'Introduction to Computational Thinking and Data Science',
      number:'6.0002'},
    {text:'Introduction to Machine Learning',
      number:'6.036'},
    {text:'Mathematics for Computer Science',
      number:'6.042'},
    {text:'Media Systems and Texts',
      number:'CMS.400'},
    {text:'Current Debates in Media',
      number:'CMS.701'}];
    
    $scope.courses4 = [
    {text:'Computation Structures',
      number:'6.004'},
    {text:'Introduction to Algorithms',
      number:'6.006'},
    {text:'Fundamentals of Programming',
      number:'6.009'},
    {text:'Elements of Software Construction',
      number:'6.031'},
    {text:'Design and Analysis of Algorithms',
      number:'6.046'},
    {text:'Game Design',
      number:'CMS.608'},
    {text:'Creating Video Games',
      number:'CMS.611'}];
    
    $scope.courses5 = [
    {text:'Signals and Systems',
      number:'6.003'},
    {text:'Computer Systems Engineering',
      number:'6.033'},
    {text:'Principles and Practice of Assistive Technology',
      number:'6.811'},
    {text:'Computer Graphics',
      number:'6.837'},
    {text:'Oral Communication',
      number:'6.UAT'},
    {text:'Sound Studies',
      number:'CMS.407'},
    {text:'Games and Culture',
      number:'CMS.616'}];

    $scope.software = [
    {text:'Unity3D',link:'https://unity3d.com/'},
    {text:'Matlab',link:'http://www.mathworks.com/products/matlab'},
    {text:'LaTeX',link:'https://www.latex-project.org/'},
    {text:'Microsoft Office',link:'https://products.office.com/en-US/'},
    {text:'Google Drive Services',link:'https://drive.google.com/'},
    {text:'Blender',link:'https://www.blender.org/'},
    {text:'Solidworks',link:'http://www.solidworks.com/'}];

    $scope.languages = [
    {text:'English',link:'https://en.wikipedia.org/wiki/American_English'},
    {text:'C#',link:'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)'},
    {text:'Cg',link:'https://en.wikipedia.org/wiki/Cg_%28programming_language%29'},
    {text:'C++',link:'https://en.wikipedia.org/wiki/C%2B%2B'},
    {text:'Java',link:'https://en.wikipedia.org/wiki/Java_(programming_language)'},
    {text:'Python 2.7/3+',link:'https://www.python.org/'},
    {text:'Javascript/ES6',link:'https://www.javascript.com/'},
    {text:'HTML',link:'https://en.wikipedia.org/wiki/HTML'},
    {text:'CSS',link:'https://en.wikipedia.org/wiki/Cascading_Style_Sheets'}];

    $scope.frameworks = [
    {text:'Node',link:'https://nodejs.org/'},
    {text:'NPM',link:'https://www.npmjs.com/'},
    {text:'React',link:'https://facebook.github.io/react/'},
    {text:'Redux',link:'http://redux.js.org/'},
    {text:'Immutable',link:'https://facebook.github.io/immutable-js/'},
    {text:'AngularJS',link:'https://angularjs.org/'},
    {text:'Meteor',link:'https://www.meteor.com/'},
    {text:'Galaxy',link:'https://galaxy.meteor.com'},
    {text:'PouchDB',link:'https://pouchdb.com/'},
    {text:'D3',link:'https://d3js.org/'}];
  });

  oiiApp.config(function($routeProvider){

    $routeProvider
    .when("/", { templateUrl : "pages/about.html" })
    .when("/projects", { templateUrl : "pages/projects.html" })
    .when("/thoughts", { templateUrl : "pages/thoughts.html" })

    .when("/projects/arche", { templateUrl : "pages/projects/arche.html", css: 'css/hover_arche.css' })
    .when("/projects/pubpub", { templateUrl : "pages/projects/pubpub.html" })
    .when("/projects/conspiro", { templateUrl : "pages/projects/conspiro.html"})
    .when("/projects/module", { templateUrl : "pages/projects/module.html"})
    .when("/projects/datatap", { templateUrl : "pages/projects/datatap.html"})
    .when("/projects/pan", { templateUrl : "pages/projects/pan.html"})
    .when("/projects/clevr", { templateUrl : "pages/projects/clevr.html"})
    .when("/projects/gameblox", { templateUrl : "pages/projects/gameblox.html"})

    .when("/thoughts/comics", { templateUrl : "pages/thoughts/comics.html" })
    .when("/thoughts/whatisagame", { templateUrl : "pages/thoughts/whatisagame.html" })
    
    .otherwise({redirectTo:'/'});
  });
})();