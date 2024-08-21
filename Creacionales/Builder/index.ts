
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

// Creación de un curso completo con todos los detalles
// const advancedCourse = new Course(
//     'TypeScript Avanzado',
//     'Un curso avanzado sobre TypeScript',
//     ['Libro', 'Videos', 'Proyectos'],
//     { name: 'Bob', email: 'bob@example.com', experience: 10 },
//     { days: ['Lunes', 'Miércoles'], time: '10:00 - 12:00' },
    // [
    //     { name: 'Kevin', email: 'Kevin@example.com' },
    //     { name: 'Victor', email: 'Victor@example.com' },
    //     { name: 'Camila', email: 'Camila@example.com' },
    //     { name: 'Jose', email: 'Jose@example.com' },
    //     { name: 'Amairani', email: 'Amairani@example.com' },
    // ],
//     new Date(2024, 8, 1),
//     new Date(2024, 11, 30)
// );

const advancedCourse = new CourseBuilder()
.setName('TypeScript Avanzado')
.setDescription('Un curso avanzado sobre TypeScript')
.setMaterials(['Libro', 'Videos', 'Proyectos'])
.setInstructor({ name: 'Bob', email: 'bob@example.com', experience: 10 })
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

// console.log('Curso 2 agregar un estudiante');
// advancedCourse.addStudent({ name: 'Javier', email: 'javier@example.com'})
// advancedCourse.displayCourseInfo();
