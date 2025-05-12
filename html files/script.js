const doctors = {
  dr_smith: {
    name: "Dr. Smith",
    specialization: "Cardiology",
    bio: "Specialist in heart conditions with 10 years of experience.",
  },
  dr_jones: {
    name: "Dr. Jones",
    specialization: "Pediatrics",
    bio: "Child specialist with a gentle approach to care.",
  },
};

window.onload = function () {
  const doctorSelect = document.getElementById("doctor");
  const doctorInfo = document.createElement("div");
  doctorInfo.id = "doctor-info";
  doctorSelect.insertAdjacentElement("afterend", doctorInfo);
};

function showDoctorInfo(selectedDoctor) {
  const doctorInfo = document.getElementById("doctor-info");
  if (selectedDoctor && doctors[selectedDoctor]) {
    const doc = doctors[selectedDoctor];
    // doctorInfo
    doctorInfo.innerHTML = `
    <h3>${doc.name}</h3>
<p><strong>Specialization:</strong> ${doc.specialization}</p>
<p>${doc.bio}</p>`;
  } else {
    doctorInfo.innerHTML = "";
  }
}

function validateRegisterForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  if (!name || !email || !password || !role) {
    alert("Please fill  all the fields");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

  alert(
    `Registration successful! \n Thank you ${name} for registration \n Your Role is: ${role}`
  );
}

function validateAppointmentDate(dateInput) {
  const selectedDate = new Date(dateInput.value);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize today to midnight
  // Reset previous validation message
  dateInput.setCustomValidity("");
  if (selectedDate < today) {
    dateInput.setCustomValidity("Cannot book appointments in the past");
    dateInput.reportValidity(); // Show the message
    dateInput.value = ""; // Clear the invalid value
  } else if (selectedDate.getDay() === 0 || selectedDate.getDay() === 6) {
    dateInput.setCustomValidity("Clinic is closed on weekends");
    dateInput.reportValidity();
    dateInput.value = "";
  }
}
