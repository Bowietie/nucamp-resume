$(function() {
    $("#resume-form").submit(function(event){
        event.preventDefault();
        let nameInput = $("#userName").val();
        $("#html-name").html(nameInput);
    
        let phoneInput = $("#userPhoneNumber").val();
        $("#html-phone-number").html(phoneInput);

        let jobTitleInput = $("#user-job-title").val();
        $("#html-job-title").html(jobTitleInput);

        let summaryInput = $("#user-summary").val();
        $("#html-summary").html(summaryInput);

        let emailInput = $("#userEmail").val();
        $("#html-email").html(emailInput);
    
        let websiteInput = $("#user-website").val();
        $("#html-website").html(websiteInput);

        let eduInput = $("#user-education").val();
        $("#html-edu").html(eduInput);

        let edu2Input = $("#user-education-2").val();
        $("#html-edu-2").html(edu2Input);

        let whInput = $("#work-experience").val();
        $("#html-work-experience").html(whInput);

        let wh2Input = $("#work-experience-2").val();
        $("#html-work-experience-2").html(wh2Input);
    });

});
