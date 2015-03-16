var bio = {
    "name" : "Rafael Santana",
    "role" : "Front Web Developer",
    "contacts":
    {
        "mobile": "520-227-1122",
        "email" : "rafaelsantana232@gmail.com",
        "github" : "rsantana23",
        "location" : "Phoenix, Arizona"
    },
    "welcomeMessage" : "In order to be irreplaceable one must always be different - Coco Chanel",
    "skills" : ["HTML", "CSS", "JS","Java", "C#"],
    "biopic" : "images/fry.jpg"
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#topContacts").append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedLocation);

    $("#footerContacts").append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedBioPic).append(formattedWelcomeMsg);
    $('#header').append(HTMLskillsStart);

    for(skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
     $("#skills").append(formattedSkill);
    }
};

var work = {
    "jobs": [
        {
            "employer" : "Avolve Software",
            "title" : "Consultant",
            "location" : "Scottsdale AZ",
            "dates_worked" : "2013 - Present" ,
            "description" : "Gathered current business requirements from multiple departments to develop and implement electronic plan solutions to expedite the plan review processes by 90%"
        },
        {
            "employer" : "Barclays",
            "title" : "Emerging Markets IT - Intern",
            "location" : "New York City NY",
            "dates_worked" : "2014",
            "description" : "Developed a C# application to meet Mexican tax regulations from SAT (Mexican IRS), which required the creation of digital signatures to be used by third party vendor to meet regulations."
        },
          {
            "employer" : "Ford Motor Company",
            "title" : "Project Manager - Intern",
            "location" : "Dearborn MI",
            "dates_worked" : "2012",
            "description" : "Analyzed current CSS (Customer Solution Service) process, which was not line up with overall view of being the primary point of contact between business customers and IT.  Developed an efficient process to align it to the overall view.  As a result, the process was approved and released to production a week earlier than deadline."
        }
    ]
};

work.display = function() {
for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates_worked);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
    }
};

var projects = {
    "project": [
        {
            "title" : "SAAS Cloud Vulnerabilities",
            "dates" : "2011 - 2013",
            "description" : "The goal of this project is to determine the effectiveness of security enforcement in the Software as a Service (SaaS) layer of Cloud Computing.",
            "images" : "images/SAAS.jpg" ,
        },
        {
            "title" : "Final Project iPhone Game - Elemental Wars App",
            "dates" : "2011",
            "description" : "Worked a team of three to design an app for iPhone and iPod Touch that will provide the user with a game similar Rock, Paper, Scissor but with a twist.",
            "images" : "images/rockpaperscissor.png" ,
         }
    ]
};

projects.display = function() {
    for(section in projects.project){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[section].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.project[section].dates);
        var formattedDescription= HTMLprojectDescription.replace("%data%", projects.project[section].description);
        $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);

        var formattedImage = HTMLprojectImage.replace("%data%", projects.project[section].images);
        $(".project-entry:last").append(formattedImage);
    }

};

var education = {
    "schools": [
        {
            "name" : "Arizona State University",
            "location": "Tempe, Arizona",
            "degree": "Bachelor Degree",
            "majors" : ["Computer Science", "Information Assurance"],
            "dates_attended": "Aug 2008 - May 2013",
            "url": "http://www.asu.edu"
        }],

    "onlineCourses":[
        {
            "title": "Entrepreneurship",
            "school": "Udemy",
            "dates_attended":"Jan - May 2010",
            "url":"https://www.udemy.com/entrepreneurship-from-idea-to-launch/"
        },
        {
            "title": "Ruby on Rails",
            "school": "TreeHouse",
            "dates_attended":"Aug - Dec 2014",
            "url":"http://teamtreehouse.com/tracks/rails-development?cid=1712&utm_source=google&utm_campaign=sitelinks&gclid=CKLD3OPSq8QCFVCVfgod9SEA6g"

        }]
};

education.display = function() {
    for(school in education.schools) {
        $("#education").append(HTMLschoolStart);
        
        var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
        var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates_attended);
        var formattedUrl = HTMLschoolName.replace("#",education.schools[school].url);
        
        $(".education-entry:last").append(formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor);
    }
   
    $(".education-entry").append(HTMLonlineClasses);

    for(classes in education.onlineCourses){
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[classes].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[classes].school);
        var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[classes].dates_attended);
        var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[classes].url);

         $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool + formattedonlineDates + formattedonlineURL);
    }
};


bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);