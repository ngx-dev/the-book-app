import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/models/book';
import { Step } from 'src/app/models/step';
import { BooksService } from 'src/app/services/books.service';
import { WizardService } from 'src/app/services/wizard.service';

@Component({
    selector: 'app-new-book',
    templateUrl: './new-book.component.html',
    styleUrls: ['./new-book.component.scss'],
    providers: [WizardService],
})
export class NewBookComponent implements OnInit, OnDestroy {

    subscription = new Subscription();
    currentStep: Step = this.wizard.steps$.value[0];

    step1Form = this.formBuilder.group({
        title: ['', Validators.required],
        author: ['', Validators.required],
    });
    step2Form = this.formBuilder.group({
        genres: [[], Validators.required],
        synopsis: ['', Validators.required],
        releaseDate: ['', Validators.required],
    });
    step3Form = this.formBuilder.group({
        editable: [false],
        deletable: [false],
    });

    forms = [
        null,
        this.step1Form,
        this.step2Form,
        this.step3Form
    ]

    bookID: number;

    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private wizard: WizardService,
        private bookService: BooksService
    ) {
        this.subscription = this.wizard.getCurrentStep()
            .subscribe(
                data => {
                    this.currentStep = data;
                });
        /* If new book -> no param id -> set to 0 */
        this.bookID = Number(this.route.snapshot.paramMap.get('id') || 0);

        if (this.bookID) this.setFormsValue();
    }

    ngOnInit(): void {
    }

    get genres() { return this.bookService.genres }

    get isStepComplete() { return ((this.forms[this.currentStep?.index]) as FormGroup).valid }

    get isLastStep() { return this.wizard.isLastStep(); }

    get wizardIsCompleted() {
        return this.step1Form.valid
            && this.step2Form.valid
            && this.step3Form.valid;
    }

    setFormsValue() {
        const book = <Book>this.bookService.getBook(this.bookID);
        this.step1Form.patchValue(book);
        this.step2Form.patchValue(book);
        this.step3Form.patchValue(book);
    }

    nextStep() {
        this.currentStep.isComplete = true;
        this.wizard.nextStep();
    }

    submitForm(): void {
        const book: Book = {
            ...this.step1Form.value,
            ...this.step2Form.value,
            ...this.step3Form.value,
            isComplete: this.wizardIsCompleted,
            thumbnailUrl: '',
            id: this.bookID
        }
        this.bookService.addBook(book);
    }

    ngOnDestroy() { this.subscription.unsubscribe(); }

}
