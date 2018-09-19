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
        desc:"Developed an interactive visual data display for Earth Tapestry called Data Tapestry. Earth Tapestry is a project built on the QUANTIFY framework that crowdsources and assigns quantitative qualities to wonders around the globe. Data Tapestry pulls from this data, displaying it on a world map in a way that's visually appealing and informative."},
      pubpub2015: {
        title:'PubPub (2015)',
        sub:'Open, Continuous Publishing',
        date:'June-August 2015',
        skills:'AngularJS · HTML · Javascript · CSS · NPM',
        link:'/#!/projects/pubpub',
        desc:'Developed a front-end file management system for PubPub. This system was used to upload research data sets alongside papers and articles. Additionally, contributed features to the PubPub text editor.'},
      pubpub2016: {
        title:'PubPub (2016)',
        sub:'Open, Continuous Publishing',
        date:'June-August 2016',
        skills:'React · Redux · Immutable · HTML · Javascript · CSS · NPM',
        link:'/#!/projects/pubpub',
        desc:'Developed back-end analytics routes and front-end data visualizations for Viral Communication’s PubPub. PubPub is an open-source academic publishing platform, similar to Wikipedia or Medium, but designed for research with data-driven functionality. The analytics were used to track post engagement and informed the design of the project.'},
      gameblox: {
        title:'Gameblox',
        sub:'Playful, Powerful Learning',
        date:'June-August 2017',
        skills:'React · Redux · PouchDB · HTML · Javascript · CSS · NPM',
        link:'/#!/projects/gameblox',
        desc:'Developed live, multi-user collaboration for STEP Lab’s Gameblox. Gameblox is a block-based programming environment, designed for making games online. The live collaboration allows students and teachers to work together, simultaneously on a single project.'},
      clevr: {
        title:'Clevr',
        sub:'Collaborative Learning Experiences in Virtual Reality',
        date:'January 2018-Present',
        skills:'Unity3D · OculusVR · C# · Cg · Blender',
        link:'/#!/projects/clevr',
        desc:'Developed a 3D cell environment, with navigation tools and network functionality for STEP Lab’s CLEVR. CLEVR is a project designed to create learning experience in virtual reality, supported by Oculus and the MIT GameLab. The unique affordances of VR have helped to dispel some of the misconceptions about molecular biology, while the networking capabilities have improved the project’s viability as a classroom tool.'},
      pan: {
        title:'Gardens of Pan',
        sub:'Simulated Monster Gardens',
        date:'February 2018-Present',
        skills:'Unity3D · C# · Blender',
        link:'/#!/projects/pan',
        desc:'Designed and developed a video game based around creating and managing a garden full of monsters. The game features multiple species of monsters, each with their own unique behaviors, as well plants, produce, and elemental terrain. The game explores concepts of ecology and synergy in a uniquely entertaining way.'},
      modulecg: {
        title:'ModuleCG',
        sub:'An Action-Programming Card Game',
        date:'December 2015',
        skills:'Google Drive',
        link:'/#!/projects/module',
        desc:'Designed an action programming card game for an online tabletop game jam known as Paper Jam 4. The challenge was to make a printable game over a 10 day period with one of the given sets of mechanics, themes, goals, and constraints.'},
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
    {title: 'Social Representation in Video Games',
      sub:'A Brief Examination of the Growth of Social Representation in Video Games',
      date: 'March 2017',
      link: '/#!/thoughts/representation',
      desc:'A look at representation in three games and gaming as a whole. Written for CMS.701, Current Debates in Media, within the context of discussion about how fan culture shapes and creates media.'},
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
    {text:'OculusVR',link:'https://www.oculus.com/'},
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
    .when("/thoughts/representation", { templateUrl : "pages/thoughts/representation.html" })
    
    .otherwise({redirectTo:'/'});
  });
})();