import { Component } from '@angular/core';
import { PostService } from './services/post/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestao-de-acoes';

  posts:any;
  
  constructor(private service:PostService) {}
  
  ngOnInit() {
      this.service.getPosts()
        .subscribe(response => {
          this.posts = response;
        });
  }
}
