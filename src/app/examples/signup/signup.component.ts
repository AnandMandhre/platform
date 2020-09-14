import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ActivedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
	
	public rForm: FormBuilder;

    constructor(
				private formbuilder: FormBuilder,
				private router: Router
	) { }

    ngOnInit() {
		
		this.rForm = this.formbuilder.group({
			'username': [null, Validators.required],
			'password': [null, Validators.required],
		})
	}
	
	public add(formData: object){
		console.log('formData', formData)
		
		if(formData.username === 'admin' && formData.password === 'ilyass'){
			this.router.navigate(['user-profile']);
		}
			
		
	}
}
