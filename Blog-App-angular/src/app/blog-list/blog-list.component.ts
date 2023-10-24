

import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post.model';
import { BlogService } from '../blog.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  posts: BlogPost[] = [];
  newPost: BlogPost = { title: '', content: '', author: '',id:0};

  constructor(private blogService: BlogService, private authService: AuthService) { }

  ngOnInit(): void {
    this.posts = this.blogService.getPosts();
  }
  canAddPost(): boolean {
    return this.authService.isAdmin() || this.authService.isNormalUser(); // Implement isNormalUser if needed
  }
  addPost(postAuthor: string | undefined): void {
    // Check if the new post has required fields (title and content)
    if (this.newPost.title && this.newPost.content) {
      // Set the author based on the currently logged-in user
      this.newPost.author = this.authService.getCurrentUser();
      
      // Add the new post to the list of posts
      this.blogService.addPost(this.newPost);

      // Clear the new post fields for the next entry
      this.newPost = { title: '', content: '', author: '',id:0 };
    }  

    return this.authService.isAdmin() || this.authService.getCurrentUser() === postAuthor;
  }
  canDeletePost(postAuthor: string | undefined): boolean {
    // Use the optional chaining operator to handle the case where postAuthor is undefined
    return this.authService.isAdmin() || this.authService.getCurrentUser() === postAuthor;
  }


  deletePost(postId: number): void {
    const post = this.posts.find(post => post.id === postId);
    if (post) {
      if (this.canDeletePost(post.author)) {
        this.blogService.deletePost(postId);
      } else {
        // Handle unauthorized deletion (e.g., show an error message).
      }
    }
  }
}
