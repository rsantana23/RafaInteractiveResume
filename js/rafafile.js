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
    "welomeMessage" : "In order to be irreplaceable one must always be different - Coco Chanel",
	"skills" : [ "HTML", "CSS", "JS","Java", "C#"],
	"biopic" : "images/fry.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").append(formattedName)
$("#workExperience").append(HTMLcontactGeneric);
for(contact in bio.contacts) {

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmplyerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmplyerTitle);
}

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
            "dates_worked" : 2014,
            "description" : "Developed a C# application to meet Mexican tax regulations from SAT (Mexican IRS), which required the creation of digital signatures to be used by third party vendor to meet regulations."
        }
    ]
};

for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmplyerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmplyerTitle);








    var work = {
    "jobs": [
        {
            "employer" : "Innovative Software Sollutions",
            "title" : "Data Analyst",
            "location" : "Phoenix Arizona",
            "dates_worked" : 2015,
            "description" : "HTML5 Game Development"
        },
        {
            "employer" : "Look Local",
            "title" : "Junior Developer",
            "location" : "Phoenix Arizona",
            "dates_worked" : 2014,
            "description" : "A community-operated workspace where people with common interests, often in computers, machining, technology, science, digital art or electronic art; can meet, socialize and collaborate."
        }
    ]
}

work.display = function() {
    work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedworkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedworkDates = HTMLworkDates.replace("%data%", job.dates_worked);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedworkEmployerTitle = formattedworkEmployer + formattedworkTitle;
        $(".work-entry:last").append(formattedworkEmployerTitle);
        $(".work-entry:last").append(formattedworkDates);
        $(".work-entry:last").append(formattedworkDescription);
    });
}

var bio = {
    "name": "Ryan Shatto",
    "role": "Front-End Web Developer",
    "welcomeMessage": "Never underestimate your resources.",
    "contacts": {
        "mobile_number": "555-555-5555",
        "email" : "rshatto@asu.edu",
        "github" : "https://github.com/Cashy855",
        "location" : "Phoenix, Arizona"
    },
    "pictureURL":"images/yunen.png",
    "skills" : ["AngularJS", "HTML","CSS", "JavaScript","Haskell","Java"]
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile_number);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

    $("#topContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    $("#footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.pictureURL);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedBioPic).append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $('#skills').append(formattedSkill);
        });
    }
};


var education = {
    "schools": [
        {
            "name" : "Arizona State University",
            "location": "Tempe, Arizona",
            "degree": "Information technology",
            "majors" : ["Sustainable Technology"],
            "dates_attended": "July 2011",
            "url": "http://www.anu.edu.au/"
        }],

        
    "onlineCourses":[
        {
            "title": "Introduction to Game Design",
            "school": "MITx",
            "dates_attended":"Oct 22, 2014",
            "url":"https://courses.edx.org/courses/MITx/11.126x/3T2014/info"
        },{
            "title": "Introduction to Computational Thinking and Data Science",
            "school": "MITx",
            "dates_attended":"May 09, 2014",
            "url":"https://courses.edx.org/courses/MITx/6.00.2x/1T2014/info"
        },
        {
            "title": "Introduction to Computer Science and Programming Using Python",
            "school": "MITx",
            "dates_attended":"Apr 25, 2014",
            "url":"https://courses.edx.org/courses/MITx/6.00.1-x/1T2014/info"
        }]
};

education.display = function(){
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace('#', school.url);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates_attended);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last a").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolLocation).append(formattedSchoolDates);

        school.majors.forEach(function(major) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formattedSchoolMajor);
        });
    });

    if (education.onlineCourses.length > 0) {
        $(".education-entry").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function (course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace('#', course.url);;
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates_attended);

            $(".education-entry:last")
                .append(formattedOnlineTitle + formattedOnlineSchool)
                .append(formattedOnlineDates)
                .append('<br>');
        });
    }
};

var projects = {
    "projects" : [
        {
            "title" : "Word Game (Java and JavaFX)",
            "dates_worked" : "20 October 2013",
            "description" : "",
            "images" : ["images/project1.png"]
        },
        {
            "title" : "MochiStaker Clone (Phaser)",
            "dates_worked" : "3 July 2014",
            "description" : "",
            "images" : ["images/project2.png"]
        }
    ]
};

projects.display = function() {
    projects.projects.forEach(function(project){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
        var formattedDates = HTMLprojectDates.replace("%data%",project.dates_worked);
        var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        if (project.images.length > 0) {
            project.images.forEach(function(image){
                var formattedImage = HTMLprojectImage.replace("%data%",image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    })
};

function inName(name) {
    name = name.trim().split(" ");
    name[0] = name[0].toUpperCase();
    name[1] = name[1].slice(0,1).toUpperCase() + name[1].slice(1).toLocaleLowerCase();
    return name[0] + " " + name[1];
}

work.display();
bio.display();
education.display();
projects.display();

$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);
}