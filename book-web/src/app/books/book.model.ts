import { Liber } from './../shared/liber.model';
export class Book {
  public author: string;
  public description: string;
  public imagePath: string;
  public des: string;
  public libra: Liber[];

  constructor( author: string, desc: string, imagePath: string, des: string, libra: Liber[]) {
    this.author = author;
    this.description = desc;
    this.imagePath = imagePath;
    this.des = des;
    this.libra = libra;

  }
}
