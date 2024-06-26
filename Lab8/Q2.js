function Student(firstName, lastName, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
}
Student.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
}
Student.prototype.computeAverageGrade = function () {
    return this.grades.reduce((sum, current, index, array) => sum + current /
        array.length, 0);
}
const stu1 =  new Student('John', 'Smith');
stu1.inputNewGrade(88);
stu1.inputNewGrade(78);
stu1.inputNewGrade(96);
stu1.inputNewGrade(80);
const stu2 = new Student('Kira', 'Solo');
stu2.inputNewGrade(85);
stu2.inputNewGrade(95);
stu2.inputNewGrade(85);
stu2.inputNewGrade(77);
const students = [stu1, stu2];
const result = students.reduce((average, stu, index, array) => average +
    stu.computeAverageGrade() / array.length, 0);
console.log(result);