// import styled from 'styled-components'
import { AllBooksStyle } from "../styles/BooksStyle";

export default function Books({ booksCollection }) {
  //Extract info from properties
  const { Title, Author, Copies_Available, Book_Image } =
    booksCollection.attributes;

  return (
    <AllBooksStyle>
      <div>
        {/* Hello */}
        <img src={Book_Image.data.attributes.formats.small.url} alt="{Title}" />
      </div>
      <div className="Title">
      <h2>{Title}</h2></div>
      <h4>
        By <u>{Author}</u>
      </h4>
      <h4>Copies Left: {Copies_Available}</h4>
    </AllBooksStyle>
  );
}

// const Titlehead = styled.h2`
//     background-color: black;
//     color: #1391ff;
// `

// const BigPage = styled.div`
//     padding:0;
//     background-color: #1692ff;
// `
