
$(document).ready(function() {
var jobData = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "file:///C:/Users/Dar%20Laptop/Desktop/i211140_Q_Assignment1/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "file:///C:/Users/Dar%20Laptop/Desktop/i211140_Q_Assignment1/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "file:///C:/Users/Dar%20Laptop/Desktop/i211140_Q_Assignment1/account%20(1).svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "file:///C:/Users/Dar%20Laptop/Desktop/i211140_Q_Assignment1/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "file:///C:/Users/Dar%20Laptop/Desktop/i211140_Q_Assignment1/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "file:///C:/Users/Dar%20Laptop/Desktop/i211140_Q_Assignment1/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "file:///C:/Users/Dar%20Laptop/Desktop/i211140_Q_Assignment1/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "file:///C:/Users/Dar%20Laptop/Desktop/i211140_Q_Assignment1/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "file:///C:/Users/Dar%20Laptop/Desktop/i211140_Q_Assignment1/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "file:///C:/Users/Dar%20Laptop/Desktop/i211140_Q_Assignment1/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ];
  function createJobListing(job) {
    var jobListing = $('<div class="job">');
    var jobHeader = $('<div class="job-header">');
    var logoImg = $('<img src="' + job.logo + '" alt="' + job.company + ' logo">');
    var jobInfo = $('<div class="job-info">');
    var jobInfo2 = $('<div class="job-info2">');
    var account = $('<div class="account">' + job.company + '</div>');
    var newLabel = job.new ? '<div class="new">New!</div>' : '';
    var featuredLabel = job.featured ? '<div class="featured">Featured</div>' : '';
    var jobPosition = $('<div class="job-position">' + job.position + '</div>');
    var jobInfo3 = $('<div class="job-info2">');
    var jobPostedAt = $('<div class="job-company">' + job.postedAt + '</div>');
    var jobContract = $('<div class="job-contract">' + job.contract + '</div>');
    var jobLocation = $('<div class="job-location">' + job.location + '</div>');
    var jobSkills = $('<div class="job-skills">');
    const deleteButton = $('<button class="delete-job-btn">Delete</button>');
    deleteButton.click(function() {
      jobListing.remove();
      $(".job:visible").each(function(index) {
        $(this).css("order", index);
      });
    });


    job.languages.forEach(function (language) {
        jobSkills.append('<div class="skill">' + language + '</div>');
    });

    jobHeader.append(logoImg);
    jobInfo2.append(account, newLabel, featuredLabel);
    jobInfo.append(jobInfo2, jobPosition, jobInfo3);
    jobInfo3.append(jobPostedAt, jobContract, jobLocation);
    jobListing.append(jobHeader, jobInfo, jobSkills,deleteButton);

    jobListing.on("click", function () {
    showJobDetails(job); 
    });
    return jobListing;
}


function rearrangeJobBoxes() {
 
  const visibleJobBoxes = $(".job:visible");

  visibleJobBoxes.each(function (index) {
    const jobBox = $(this);

    jobBox.css("margin-top", index > 0 ? "20px" : "0");
  });
}



$("#add-job-btn").click(function () {
  $("#job-form-popup").fadeIn();
});

$("#close-form-btn").click(function () {
  $("#job-form-popup").fadeOut();
});

$("#submit-job-btn").click(function (e) {
  e.preventDefault();
 
  const company = $("#company").val();
  const position = $("#position").val();
  const Role = $("#Role").val();
  const Location = $("#Location").val();
  const Contract = $("#Contract").val();
  const PostedAt = $("#PostedAt").val();
  const selectedLanguages = [];
    $("input[name='languages']:checked").each(function () {
      selectedLanguages.push($(this).val());
    });

  var newJobListing = $('<div class="job">');
  var jobHeader = $('<div class="job-header">');
  var jobImage = $("#previewImg").clone();  
jobImage.removeClass("hidden");
  var jobInfo = $('<div class="job-info">');
  var jobInfo2 = $('<div class="job-info2">');
  var account = $('<div class="account">' + company + '</div>');
  var jobPosition = $('<div class="job-position">' + position + '</div>');
  var jobInfo3 = $('<div class="job-info2">');
  var jobPostedAt = $('<div class="job-company">' + PostedAt + '</div>');
  var jobContract = $('<div class="job-contract">' + Contract + '</div>');
  var jobLocation = $('<div class="job-location">' + Location + '</div>');
  var jobSkills = $('<div class="job-skills">');
  const deleteButton = $('<button class="delete-job-btn">Delete</button>');
  for (let i = 0; i < selectedLanguages.length; i++) {
    jobSkills.append('<div class="skill">' + selectedLanguages[i] + '</div>');
  }
  deleteButton.click(function () {

    newJobListing.remove();
  
    
    $(".job:visible").each(function (index) {
      $(this).css("order", index);
    });
  });

  
  jobHeader.append(jobImage);
  jobInfo2.append(account);
  jobInfo.append(jobInfo2, jobPosition, jobInfo3);
  jobInfo3.append(jobPostedAt, jobContract, jobLocation);
  newJobListing.append(jobHeader, jobInfo, jobSkills, deleteButton);

  
  $(".centered-jobs").append(newJobListing);

 
  $("form")[0].reset();
     
  
  $("#job-form-popup").fadeOut();

 
});


jobData.forEach(function (job) {
    var jobListing = createJobListing(job);
    $(".centered-jobs").append(jobListing);
});

function reloadJobListings() {
  const jobListingsContainer = $(".centered-jobs");
  jobListingsContainer.empty(); 

  jobData.forEach(function (job) {
    const jobListing = createJobListing(job);
    jobListingsContainer.append(jobListing);
  });
}
$("#closee-form-btn").click(function () {
  $("#job-form-popup").fadeOut();
});
function showJobDetails(job) {
  const jobPopup = $("#job-popup");
  jobPopup.empty(); // Clear previous content

  jobPopup.append("<h2><br>" + job.company + "</h2> <br>");
  jobPopup.append("<p> <b>Position: </b><br>" + job.position + "</p>");
  jobPopup.append("<p> <b>Role: </b><br>" + job.role + "</p>");
  jobPopup.append("<p> <b>Level: </b><br>" + job.level + "</p>");
  jobPopup.append("<p> <b>Contract: </b><br>" + job.contract + "</p>");
  jobPopup.append("<p> <b>Location: </b><br> " + job.location + "</p>");
  jobPopup.append("<p> <b>Posted At: </b><br>" + job.postedAt + "</p>");
 
  if (job.languages.length > 0) {
    const languagesList = $("<ul>");
    job.languages.forEach(function (language) {
        const languageItem = $("<li>").text(language);
        languagesList.append(languageItem);
    });
    jobPopup.append("<h3>Languages:</h3>");
    jobPopup.append(languagesList);
   
}
  jobPopup.show();
 
}


$(".job").on("click", function () {
 
  showJobDetails(job); 
  
});
function closeJobDetails() {
  const jobPopup = $("#job-popup");
  jobPopup.hide();
  
}
$("#job-popup").on("click", function () {
  closeJobDetails();
});
const selectedSkills = [];

function filterJobs() {
  $(".job").hide();

  if (selectedSkills.length === 0) {
    $(".job").show();
  } else {
    $(".job").each(function() {
      const jobSkills = $(this).find(".skill").map(function() {
        return $(this).text();
      }).get();

      if (selectedSkills.every(skill => jobSkills.includes(skill))) {
        $(this).show();
      }
     
    });
  }
}
Set.prototype.hasAll = function(arr) {
  return arr.every(item => this.has(item));
};


function updateSkillsBox() {
  
  const selectedSkillsHTML = selectedSkills.map(skill => `<div class="selected-skill">${skill} <span class="remove-skill"></span></div>`).join(' ');
  $("#selected-skills").html(selectedSkillsHTML);
}

function clearSkills() {
  selectedSkills.length = 0;
  updateSkillsBox();
  filterJobs();
  $(".job").show();
}
$(".selected-skills").on("click", ".skill", function () {
  const skillToRemove = $(this).text();


  const index = selectedSkills.indexOf(skillToRemove);
  if (index !== -1) {
    selectedSkills.splice(index, 1);
  }

 
  updateSkillsBox();
  filterJobs();
  $(this).remove();
});
$("#clear-skills").click(function() {
  clearSkills();
});


$(".job").on("click", ".skill", function(event) {
  event.stopPropagation();
  const skill = $(this).text();

  if (!selectedSkills.includes(skill)) {
    selectedSkills.push(skill);
    updateSkillsBox();
    filterJobs();
  }

});


filterJobs();




});