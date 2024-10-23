class Sinhvien {
    constructor(MaSV, Hoten, GiớiTính, NgaySinh, QueQuan) {
        this.MaSV = MaSV;
        this.Hoten = Hoten;
        this.GiớiTính = GiớiTính;
        this.NgaySinh = NgaySinh;
        this.QueQuan = QueQuan;
    }
}

class StudentManager {
    constructor() {
        this.students = JSON.parse(localStorage.getItem('students')) || [];
        this.displayStudents();
    }

    addStudent(student) {
        this.students.push(student);
        this.saveData();
        this.displayStudents();
    }
    deleteStudent(index) {
        this.students.splice(index, 1);
        this.saveData();
        this.displayStudents();
    }
    saveData() {
        localStorage.setItem('students', JSON.stringify(this.students));
    }

    displayStudents() {
        const studentList = document.getElementById('student-list');
        studentList.innerHTML = '';

        this.students.forEach((student, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.MaSV}</td>
                <td>${student.Hoten}</td>
                <td>${student.GiớiTính}</td>
                <td>${student.NgaySinh}</td>
                <td>${student.QueQuan}</td>
                <td>
                    <button class="edit" onclick="editStudent(${index})">Sửa</button>
                    <button class="delete" onclick="deleteStudent(${index})">Xóa</button>
                </td>
            `;
            studentList.appendChild(row);
        });
    }
}

const manager = new StudentManager();

document.getElementById('student-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const MaSV = document.getElementById('MaSV').value;
    const Hoten = document.getElementById('Hoten').value;
    const GiớiTính = document.getElementById('GiớiTính').value;
    const NgaySinh = document.getElementById('NgaySinh').value;
    const QueQuan = document.getElementById('QueQuan').value;

    const SV = new Sinhvien(MaSV, Hoten, GiớiTính, NgaySinh, QueQuan);
    manager.addStudent(SV);

    document.getElementById('student-form').reset();
});

function editStudent(index) {
    const student = manager.students[index];
    console.log(index);

    document.getElementById('MaSV').value = student.MaSV;
    document.getElementById('Hoten').value = student.Hoten;
    document.getElementById('GiớiTính').value = student.GiớiTính;
    document.getElementById('NgaySinh').value = student.NgaySinh;
    document.getElementById('QueQuan').value = student.QueQuan;
    manager.deleteStudent(index);
    document.getElementById('student-form').onsubmit = function(e) {
        e.preventDefault();

        const updatedStudent = new Sinhvien(
            document.getElementById('MaSV').value ,
            document.getElementById('Hoten').value ,
            document.getElementById('GiớiTính').value ,
            document.getElementById('NgaySinh').value ,
            document.getElementById('QueQuan').value 
        );
        document.getElementById('student-form').reset();
        
    }
    
    
}

function deleteStudent(index) {
    if (confirm('Bạn có chắc chắn muốn xóa sinh viên này không?')) {
        manager.deleteStudent(index);
    }
}











