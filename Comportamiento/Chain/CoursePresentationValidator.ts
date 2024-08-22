import { Course } from "./Course";

export abstract class CoursePresentationValidator {
    protected nextValidator: CoursePresentationValidator | null = null

    public setNext(validator: CoursePresentationValidator): CoursePresentationValidator {
        this.nextValidator = validator
        return validator 
    }

    public validate(curso: Course): void {
        if(this.nextValidator) {
            this.nextValidator.validate(curso)
        }
    }
}  