function mail(form) {
    var first = form.firstname.value,
        last = form.lastname.value,
        school = form.school.value,
        grade = form.grade.value,
        email = form.email.value,
        phone = form.phone.value,
        subject = form.subject.value,
        times = form.times.value
    
    var start = "mailto:washingtutors@gmail.com?subject=[Washingtutors] Contact - new submission&body=",
        target = ""
    target += "Name: " + first + " " + last + "\n"
    target += "School: " + school + "\n"
    target += "Grade: " + (grade == "Grade Level..." ? "?" : grade) + "\n"
    target += "Email: " + email + "\n"
    target += "Phone: " + phone + "\n"
    target += "Subject: " + subject + "\n"
    target += "Times: " + times

    window.open(start + encodeURIComponent(target))
}