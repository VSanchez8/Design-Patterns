import { Course } from "./Course";
import { CoursePresentation } from "./CoursePresentation";

export class presentacionOnSite extends CoursePresentation {
    private location: string;


    constructor(location: string, curso: Course) {
        super(curso)
        this.location = location

    }

    public presentarCurso(): void {
        console.log('Este curso sera impartido en la sala: ' + this.location)
        this.curso.displayCourseInfo()
    }

    public showPreRequisits(): void {
        console.log('Presentarse 15 minutos antes en la sala asignada, confirmar asistencia en resepcion')
        // this.curso.getMaterials().forEach(material => {console.log(material)})
    }

    public confirmarAsistencia(aConfirmado: boolean): void {
        if(aConfirmado) {
            console.log('El asistente confirmo su asistencia')
        } else {
            console.log('El asistente no ha confirmado su asistencia')
        }
    }

}