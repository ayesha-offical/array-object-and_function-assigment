"use strict";
// 1 QUESTION OF ANSWER
Object.defineProperty(exports, "__esModule", { value: true });
let student = [
    { name: "ayesha",
        isSenior: true,
        assigmentCompleted: false
    },
    {
        name: "khadija",
        isSenior: true,
        assigmentCompleted: true
    },
    { name: "unknown",
        isSenior: true,
        assigmentCompleted: true
    }
];
function seniorstudentassigment(student) {
    return student.filter(student => student.isSenior && student.assigmentCompleted);
}
function updateClassList(student) {
    return student.filter(student => !student.isSenior || (student.isSenior && student.assigmentCompleted));
}
