var bio = {
	"name" : "Rafael Santana",
	"role" : "Front Web Developer",
	"contacts": [
	{
        "mobile": "520-227-1122",
        "email" : "rafaelsantana232@gmail.com",
        "github" : "rsantana23",
        "location" : "Phoenix, Arizona"
    },
    ]
    "welomeMessage" : "In order to be irreplaceable one must always be different - Coco Chanel",
	"skills" : [ "html", "css", "js"],
	"biopic" : "images/fry.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").preappend(formattedName).preappend(formattedRole);
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
}
