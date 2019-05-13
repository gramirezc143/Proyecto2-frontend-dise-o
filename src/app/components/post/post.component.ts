import { Component, OnInit, Input } from '@angular/core';

import { Post } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Input() post: Post = {};

  img1 = '/assets/images.jpg';
  img2 = '/assets/pesca.jpg';
  img3 = '/assets/goku.jpg';

  constructor() { }

  ngOnInit() {}

}
