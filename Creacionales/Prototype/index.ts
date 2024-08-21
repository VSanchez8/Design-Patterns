
import { Course } from './Course';
import { CourseBuilder } from './CourseBuilder';

const basicCourse = new CourseBuilder()
.setName('Introducción a TypeScript')
.setInstructor({name: 'Alice', email: 'alice@example.com', experience: 5 })
.setCustomMethod((message: string) => {console.log('Se agrego funcionaidad extra' + message)})
.buildCourse();

console.log('Curso 1:');
basicCourse.addExtraBehavior('Extra mensaje: este curso es sabatino')
basicCourse.displayCourseInfo();
console.log('*****************************************');
basicCourse.addExtraBehavior('mensaje: este curso es sabatino')
console.log('*****************************************');


const advancedCourse = new CourseBuilder()
.setName('TypeScript Avanzado')
.setDescription('Template para cursos avanzados')
.setMaterials(['Libro', 'Videos', 'Proyectos', 'Diapositivas'])
.setSchedule({days: ['Lunes'], time: 'De 8:00 AM a 5:00PM'})
.setstudents([
    { name: 'Kevin', email: 'Kevin@example.com' },
    { name: 'Victor', email: 'Victor@example.com' },
    { name: 'Camila', email: 'Camila@example.com' },
    { name: 'Jose', email: 'Jose@example.com' },
    { name: 'Amairani', email: 'Amairani@example.com' },
])
.setstartDate(new Date(2024, 8, 1))
.setendDate(new Date(2024, 11, 30))
.buildCourse();


console.log('Curso 2:');
advancedCourse.displayCourseInfo();
console.log('*****************************************');


const cursoAvanzadoBD  = new CourseBuilder()
.fromPrototype(advancedCourse.clone())
.setName('Curso especializado de base de datos')
.setInstructor({name: 'Ivan', email: 'ivan@example.com', experience: 5 })
.setSchedule({days: ['Lunes'], time: 'De 8:00 AM a 10:00 AM'})
.buildCourse()

console.log('Imprimiendo clon para base de datos');
cursoAvanzadoBD.displayCourseInfo();
console.log('*****************************************');

const cursoAvanzadoAPIS  = new CourseBuilder()
.fromPrototype(advancedCourse.clone())
.setName('Curso avanzado de Apis')
.setInstructor({name: 'Rodrigo', email: 'rodrigo@example.com', experience: 5 })
.setSchedule({days: ['Lunes'], time: 'De 8:00 AM a 12:00 PM'})
.buildCourse()

console.log('Imprimiendo clon para APIS');
cursoAvanzadoAPIS.displayCourseInfo();
console.log('*****************************************');

// console.log('Curso 2 agregar un estudiante');
// advancedCourse.addStudent({ name: 'Javier', email: 'javier@example.com'})
// advancedCourse.displayCourseInfo();
