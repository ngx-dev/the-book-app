import { Injectable } from '@angular/core';
import { Step } from '../models/step';
import { BehaviorSubject, Observable } from 'rxjs';

/* Wizard inspired by: https://itnext.io/simple-wizard-stepper-for-your-angular-web-apps-31b9edaebd9a */

const STEPS: Step[] = [
    { index: 1, isComplete: false },
    { index: 2, isComplete: false },
    { index: 3, isComplete: false }
];

@Injectable()
export class WizardService {

    steps$ = new BehaviorSubject<Step[]>(STEPS);
    currentStep$ = new BehaviorSubject<Step>(STEPS[0]);

    constructor() {
        this.currentStep$.next(STEPS[0]);
    }

    setCurrentStep(step: Step = STEPS[0]): void {
        this.currentStep$.next(step);
    }

    getCurrentStep(): Observable<Step> {
        return this.currentStep$.asObservable();
    }

    getSteps(): Observable<Step[]> {
        return this.steps$.asObservable();
    }

    nextStep(): void {
        const index = this.currentStep$.value.index;

        if (index < this.steps$.value.length) {
            this.currentStep$.next(this.steps$.value[index]);
        }
    }

    isLastStep(): boolean {
        return this.currentStep$.value.index === this.steps$.value.length;
    }

}
