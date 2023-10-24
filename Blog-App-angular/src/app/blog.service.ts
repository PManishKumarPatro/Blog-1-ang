

import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private posts: BlogPost[] = [];

  addPost(post: BlogPost) {
    this.posts.push(post);
  }

  getPosts() {
    return this.posts;
  }

  deletePost(postId: number) {
    this.posts = this.posts.filter((post) => post.id !== postId);
  }
}
