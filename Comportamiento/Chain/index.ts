import { CourseBuilder } from './CourseBuilder';
import { presentacionOnSite } from './PresentacionOnSite';
import { PresentacionOnline } from './PresentacionOnline';
import { StudentEnrollmentValidator, MaterialAvailabilityValidator, CourseStartDateValidator } from './ConcreteCourseValidators'

const studentValidator = new StudentEnrollmentValidator()
const materialValidator = new MaterialAvailabilityValidator()
const courseValidator = new CourseStartDateValidator()


const basicCourse = new CourseBuilder()
    .setName('Introducción a TypeScript')
    .setInstructor({ name: 'Alice', email: 'alice@example.com', experience: 5 })
    .setCustomMethod((message: string) => { console.log('Se agrego funcionaidad extra' + message) })
    .buildCourse();

console.log('Curso 1:');
// basicCourse.addExtraBehavior('Extra mensaje: este curso es sabatino')
// basicCourse.displayCourseInfo();
// console.log('*****************************************');
// basicCourse.addExtraBehavior('mensaje: este curso es sabatino')
// console.log('*****************************************');


const advancedCourse = new CourseBuilder()
    .setName('TypeScript Avanzado')
    .setDescription('Template para cursos avanzados')
    .setMaterials(['Libro', 'Videos', 'Proyectos', 'Diapositivas'])
    .setSchedule({ days: ['Lunes'], time: 'De 8:00 AM a 5:00PM' })
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


// advancedCourse.displayCourseInfo();
// console.log('*****************************************');


const cursoAvanzadoBD = new CourseBuilder()
    .fromPrototype(advancedCourse.clone())
    .setName('Curso especializado de base de datos')
    .setInstructor({ name: 'Ivan', email: 'ivan@example.com', experience: 5 })
    .setSchedule({ days: ['Lunes'], time: 'De 8:00 AM a 10:00 AM' })
    .setMaterials(['Cuenta en azure', 'Instalador de sql server', 'Docuementacion'])
    .buildCourse()

// configurar cadena de validacion
studentValidator.setNext(materialValidator).setNext(courseValidator)
try {
    studentValidator.validate(cursoAvanzadoBD)
    const presentaciononsite = new presentacionOnSite('Interlomas', cursoAvanzadoBD)
    presentaciononsite.presentarCurso()
    presentaciononsite.confirmarAsistencia(true)
} catch (error) {
    console.error('Fallo alguno de los validadores')
    console.error(error)
}









