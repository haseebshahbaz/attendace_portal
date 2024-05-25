const users = [
    { name: 'John Doe', fatherName: 'Richard Doe', age: 16, rollNo: '101', class: '10th Grade' },
    { name: 'Jane Smith', fatherName: 'Robert Smith', age: 15, rollNo: '102', class: '9th Grade' },
    { name: 'Michael Johnson', fatherName: 'James Johnson', age: 17, rollNo: '103', class: '11th Grade' },
    { name: 'Emily Davis', fatherName: 'William Davis', age: 14, rollNo: '104', class: '8th Grade' },
    { name: 'Jessica Brown', fatherName: 'Charles Brown', age: 16, rollNo: '105', class: '10th Grade' },
    { name: 'Daniel Wilson', fatherName: 'Thomas Wilson', age: 15, rollNo: '106', class: '9th Grade' },
    { name: 'Sarah Taylor', fatherName: 'Andrew Taylor', age: 17, rollNo: '107', class: '11th Grade' },
    { name: 'David Lee', fatherName: 'George Lee', age: 14, rollNo: '108', class: '8th Grade' },
    { name: 'Laura Martin', fatherName: 'Paul Martin', age: 16, rollNo: '109', class: '10th Grade' },
    { name: 'Kevin White', fatherName: 'Mark White', age: 15, rollNo: '110', class: '9th Grade' },
    { name: 'Anna Harris', fatherName: 'Steven Harris', age: 17, rollNo: '111', class: '11th Grade' },
    { name: 'Brian Clark', fatherName: 'Edward Clark', age: 14, rollNo: '112', class: '8th Grade' },
    { name: 'Sophia Lewis', fatherName: 'Henry Lewis', age: 16, rollNo: '113', class: '10th Grade' },
    { name: 'Christopher Walker', fatherName: 'Frank Walker', age: 15, rollNo: '114', class: '9th Grade' },
    { name: 'Grace Hall', fatherName: 'Peter Hall', age: 17, rollNo: '115', class: '11th Grade' },
    { name: 'Justin Allen', fatherName: 'Patrick Allen', age: 14, rollNo: '116', class: '8th Grade' },
    { name: 'Olivia Young', fatherName: 'Bruce Young', age: 16, rollNo: '117', class: '10th Grade' },
    { name: 'Nathan Hernandez', fatherName: 'Larry Hernandez', age: 15, rollNo: '118', class: '9th Grade' },
    { name: 'Mia King', fatherName: 'Joe King', age: 17, rollNo: '119', class: '11th Grade' },
    { name: 'Ethan Wright', fatherName: 'Stanley Wright', age: 14, rollNo: '120', class: '8th Grade' },
    { name: 'Ava Lopez', fatherName: 'Timothy Lopez', age: 16, rollNo: '121', class: '10th Grade' },
    { name: 'Jacob Scott', fatherName: 'Chris Scott', age: 15, rollNo: '122', class: '9th Grade' },
    { name: 'Samantha Green', fatherName: 'Shawn Green', age: 17, rollNo: '123', class: '11th Grade' },
    { name: 'Andrew Adams', fatherName: 'Jason Adams', age: 14, rollNo: '124', class: '8th Grade' },
    { name: 'Ella Baker', fatherName: 'Ryan Baker', age: 16, rollNo: '125', class: '10th Grade' },
];

let presentCount = 0;
let absentCount = 0;
let leaveCount = 0;

function updateCounters() {
    document.getElementById('present-count').textContent = `Present: ${presentCount}`;
    document.getElementById('absent-count').textContent = `Absent: ${absentCount}`;
    document.getElementById('leave-count').textContent = `Leave: ${leaveCount}`;
}

function handleCheckboxChange(event) {
    const checkboxType = event.target.dataset.type;
    const studentId = event.target.dataset.id;
    const checkboxes = document.querySelectorAll(`input[data-id="${studentId}"]`);

    checkboxes.forEach(checkbox => {
        if (checkbox !== event.target) {
            checkbox.checked = false;
        }
    });

    if (checkboxType === 'present') {
        presentCount += event.target.checked ? 1 : -1;
    } else if (checkboxType === 'absent') {
        absentCount += event.target.checked ? 1 : -1;
    } else if (checkboxType === 'leave') {
        leaveCount += event.target.checked ? 1 : -1;
    }

    updateCounters();
}

function loadStudents() {
    const tableBody = document.getElementById('student-table-body');

    users.forEach((user, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${user.rollNo}</td>
            <td>${user.name}</td>
            <td>${user.fatherName}</td>
            <td>${user.age}</td>
            <td>${user.class}</td>
            <td><input type="checkbox" class="attendance-checkbox" data-type="present" data-id="${index}"></td>
            <td><input type="checkbox" class="attendance-checkbox" data-type="absent" data-id="${index}"></td>
            <td><input type="checkbox" class="attendance-checkbox" data-type="leave" data-id="${index}"></td>
        `;

        tableBody.appendChild(row);
    });

    document.querySelectorAll('.attendance-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', handleCheckboxChange);
    });
}

document.addEventListener('DOMContentLoaded', loadStudents);
