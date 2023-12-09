import {Injectable} from '@angular/core';
import {Book} from "../../shared/models/book";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private id: number = books.length;

  constructor() {
  }

  generateNewId(): number {
    return ++this.id;
  }

  getLastBooks(count: number = 10): Observable<Book[]> {
    return of(books.slice(0, count));
  }

  getBook(id: number): Observable<Book | undefined> {
    return of(books.find(x => x.id == id));
  }

  addBook(book: Book) {
    books.push(book);
  }
}


const books: Book[] = [
  {
    id: 1,
    title: 'One of Us Is Lying',
    description: 'این دسته از کتاب ها، ضربان قلب مخاطب را به بازی می گیرند و هیجان و احساس ورود به دنیایی جدید را برای او به ارمغان می آورند.',
    price: 50000,
    author: ' کارن ام مک منس',
    image: 'https://www.iranketab.ir/Images/ProductImages/18780cdc9bc648c49796a79d0e56649c.jpg'
  },
  {
    id: 2,
    title: 'کتاب سفرهای گالیور',
    description: 'جزو لیست برترین رمان های انگلیسی گاردین\n' +
      'فیلم هایی بر اساس این کتاب در سال های 1936 و 2010 ساخته شده است',
    price: 180000,
    author: ' جاناتان سویفت',
    image: 'https://www.iranketab.ir/Images/ProductImages/14d4b9c28a694d2281d717772c5ed460.jpg'
  },
  {
    id: 3,
    title: 'کتاب مرد زنجبیلی',
    description: 'کتاب مرد زنجبیلی، رمانی نوشته ی جی پی دانلیوی است که برای اولین بار در پاریس به چاپ رسید و انتشار آن، مدتی در ایالات متحده ممنوع بود. داستان این رمان در ایرلند و درست بعد از اتمام جنگ جهانی دوم می گذرد',
    price: 137000,
    author: ' جی پی دانلیوی',
    image: 'https://www.iranketab.ir/Images/ProductImages/Thumbs/5c5c08c1fe554415afc5ab94256845e0.jpg'
  },
  {
    id: 4,
    title: 'Animal Farm',
    description: 'اریک آرتور بلر با نام مستعار جورج اورول، زاده ی ۲۵ ژوئن ۱۹۰۳ و درگذشته ی ۲۱ ژانویه ۱۹۵۰، داستان نویس، روزنامه نگار، منتقد ادبی و شاعر انگلیسی بود. او را بیشتر برای دو رمان سرشناس و پرفروشش، مزرعه ی حیوانات و ۱۹۸۴ می شناسند',
    price: 150000,
    author: ' جورج اورول',
    image: 'https://www.iranketab.ir/Images/ProductImages/Thumbs/fc2244999c6f4b3cbe105d907324a11f.jpg'
  }
]
