import { validate } from '../../src/index';
import { Post } from './Post';

let post1: any = new Post();
post1.title = 's'; // should pas
post1.titles = [''];// s

validate(post1).then(result => {
  console.log('1. should pass: ', result[0].constraints); // should pass completely, e.g. return empty array
  console.log('1. should pass: ', result[1].constraints); // should pass completely, e.g. return empty array
});
