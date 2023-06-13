import axios from "axios";
// import { arrayOfAuthors } from "../../utils/arrayOfAuthors";

const url = "https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC";
const author =
  'https://www.googleapis.com/books/v1/volumes?q=inauthor:"J.K.+Rowling"&maxResults=40';

export const getBooks = async () => {
  axios.get(author).then((res) => {
    // let data = res.data;
    console.log(res);
    console.log(res.data);
    const listOfBook = res.data.items;
    console.log(listOfBook);
    // listOfBook.forEach(
    //   (element: { volumeInfo: { title: string; authors: string[] } }) => {
    //     console.log(element.volumeInfo.title, element.volumeInfo.authors);
    //   }
    // );
  });
};
