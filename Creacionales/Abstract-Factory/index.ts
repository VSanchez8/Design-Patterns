
import { UIManager } from './UIManager';

const uiManager = new UIManager();

const adminUI = uiManager.createUI('admin');
adminUI.button.render();
adminUI.dialog.show();

const instructorUI = uiManager.createUI('instructor');
instructorUI.button.render();
instructorUI.dialog.show();

const studentUI = uiManager.createUI('student');
studentUI.button.render();
studentUI.dialog.show();
