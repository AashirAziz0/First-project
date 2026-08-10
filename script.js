let students = JSON.parse(localStorage.getItem("students")) || [];


// READ
function displayStudents() {

    let list = document.getElementById("studentList");

    list.innerHTML = students.map((student, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${student.rollNo}</td>
            <td>${student.name}</td>
            <td>${student.fatherName}</td>
            <td>${student.email}</td>
            <td>${student.department}</td>
            <td>${student.cgpa}</td>

            <td>

                <button class="edit"
                    onclick="editStudent(${index})">
                    <i class="fa-solid fa-pen"></i>
                </button>

                <button class="delete"
                    onclick="deleteStudent(${index})">
                    <i class="fa-solid fa-trash"></i>
                </button>

            </td>
        </tr>
    `).join("");
}


// CREATE + UPDATE
function saveStudent() {

    let rollNo = document.getElementById("rollNo").value;
    let name = document.getElementById("name").value;
    let fatherName = document.getElementById("fatherName").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;
    let cgpa = document.getElementById("cgpa").value;

    let editIndex = document.getElementById("editIndex").value;


    if (!rollNo || !name || !fatherName ||
        !email || !department || !cgpa) {

        alert("Please fill all fields!");
        return;
    }


    let student = {
        rollNo,
        name,
        fatherName,
        email,
        department,
        cgpa
    };


    // CREATE
    if (editIndex === "") {

        students.push(student);

    }

    // UPDATE
    else {

        students[editIndex] = student;

        document.getElementById("editIndex").value = "";
    }


    // Save data in browser
    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );


    clearForm();

    displayStudents();
}


// EDIT
function editStudent(index) {

    let student = students[index];

    document.getElementById("rollNo").value = student.rollNo;
    document.getElementById("name").value = student.name;
    document.getElementById("fatherName").value = student.fatherName;
    document.getElementById("email").value = student.email;
    document.getElementById("department").value = student.department;
    document.getElementById("cgpa").value = student.cgpa;

    document.getElementById("editIndex").value = index;
}


// DELETE
function deleteStudent(index) {

    if (confirm("Delete this student?")) {

        students.splice(index, 1);

        localStorage.setItem(
            "students",
            JSON.stringify(students)
        );

        displayStudents();
    }
}


// Clear Form
function clearForm() {

    document.getElementById("rollNo").value = "";
    document.getElementById("name").value = "";
    document.getElementById("fatherName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("department").value = "";
    document.getElementById("cgpa").value = "";
}


// Show existing students
displayStudents();