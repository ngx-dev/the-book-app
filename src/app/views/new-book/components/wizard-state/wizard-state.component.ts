import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Step } from 'src/app/models/step';
import { WizardService } from 'src/app/services/wizard.service';

@Component({
    selector: 'app-wizard-state',
    templateUrl: './wizard-state.component.html',
    styleUrls: ['./wizard-state.component.scss']
})
export class WizardStateComponent implements OnInit {

    steps: Observable<Step[]>;
    currentStep: Observable<Step>;

    constructor(private wizard: WizardService) {
        this.steps = this.wizard.getSteps();
        this.currentStep = this.wizard.getCurrentStep();
    }

    ngOnInit(): void {
    }

    setStep(step: Step) {
        this.wizard.setCurrentStep(step);
    }

}
