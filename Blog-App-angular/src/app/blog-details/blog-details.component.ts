

import { Component, Input } from '@angular/core';
import { BlogPost } from '../blog-post.model';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent {
  @Input() post: BlogPost | undefined;

  constructor() {
    // Initialize 'post' in the constructor
    this.post = {
      id: 1, // Example ID
      title: 'Default Title',
      content: 'Default Content',
      author: 'Default Author'
    };
  }
}
