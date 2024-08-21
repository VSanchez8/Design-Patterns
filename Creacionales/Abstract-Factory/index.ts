import { AdminUIFactory } from './AdminUIFactory';
import { InstructorUIFactory } from './InstructorUIFactory';
import { StudentUIFactory } from './StudentUIFactory';
import { UIManager } from './UIManager';


const uifactory = new AdminUIFactory();
const uifactory1 = new InstructorUIFactory();
const uifactory2 = new StudentUIFactory();
const uiManager = new UIManager(uifactory);
const uiManager1 = new UIManager(uifactory1);
const uiManager2 = new UIManager(uifactory2);


const adminUI = uiManager.createUI('admin');
adminUI.button.render();
adminUI.dialog.show();

const instructorUI = uiManager1.createUI('instructor');
instructorUI.button.render();
instructorUI.dialog.show();

const studentUI = uiManager2.createUI('student');
studentUI.button.render();
studentUI.dialog.show();
