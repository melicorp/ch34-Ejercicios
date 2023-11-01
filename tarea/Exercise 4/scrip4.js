let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function findCommonCourses(student1Courses, student2Courses) {
  let commonCourses = [];

  for (let i = 0; i < student1Courses.length; i++) {
    for (let j = 0; j < student2Courses.length; j++) {
      if (student1Courses[i] === student2Courses[j]) {
        commonCourses.push(student1Courses[i]);
      }
    }
  }

  return commonCourses;
}

const commonCourses = findCommonCourses(student1Courses, student2Courses);

if (commonCourses.length > 0) {
  console.log('Cursos comunes: ' + commonCourses.join(', '));
} else {
  console.log('No hay cursos comunes.');
}
document.getElementById("resultadoSuma").textContent = `La materia repetida es ${commonCourses}.`;