import { Course } from "./Course";
import { CoursePresentation } from "./CoursePresentation";

export class PresentacionOnline extends CoursePresentation {
    private plattform: string;


    constructor(platform: string, curso: Course) {
        super(curso)
        this.plattform = platform

    }

    public presentarCurso(): void {
        console.log('Este curso sera impartido mediante la plataforma: ' + this.plattform)
        this.curso.displayCourseInfo()
    }

    public showOnlineResults(): void {
        console.log('Los materiales del curso son: ')
        this.curso.getMaterials().forEach(material => {console.log(material)})
    }

    public enviarRecordatorio(cadena: string): void {
        console.log('Este es un recordatorio del curso en linea: ' + cadena)
    }

}