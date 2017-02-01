import { Component } from '@angular/core';
import { PostsService } from './../services/posts.service';
import { AppService } from './../services/app.service';

@Component({
	selector: 'my-user',
	templateUrl: 'user.component.html',
	providers: [
		AppService,
		PostsService
	]
})
export class UserComponent {
	name: string;
	email: string;
	address: address;
	hobbies: string[];
	showHobbies: boolean;
	posts: Post[];

	constructor(
		private _appService: AppService, 
		private _postService: PostsService
	){
		this.getName();

		this.email = 'ac@actest.de';  
		this.address = {
			street: '42 Reee',
			city: 'Remscheid',
			state: 'NRW'
		};

		this.hobbies = ['Music','Movies','Sports'];
		this.showHobbies = false;

		this._postService.getPosts().subscribe(posts => {
			this.posts = posts;
		});
	}

	getName(){
		this.name = this._appService.getName();
	}

	toggleHobbies(){
		(this.showHobbies) ? this.showHobbies = false : this.showHobbies = true;
	}

	addHobby(hobby){
		if(hobby !== "") this.hobbies.push(hobby);	
	}

	deleteHobby(index){
		this.hobbies.splice(index,1);
	}
}

interface address {
	street: string;
	city: string;
	state: string;
}

interface Post {
	id: number;
	title: string;
	body: string;
}