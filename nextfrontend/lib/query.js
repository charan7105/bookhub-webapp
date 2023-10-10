export const BOOKS_QUERY = `
query{
    booksCollections{
      data{
        attributes{
          Title
          Author
          Description
          Published_Year
          Field
          Price
          slug
          Copies_Available
          Book_Image{
            data{
              attributes{
                formats
              }
            }
          }
        }
      }
    }
  }
`;
// query getBook($slug: String!) Means We passed a slug which is always a string
// the main idea is that we're asking the computer to find a particular book based on the special word (slug) we provided

export const GET_BOOK_QUERY = `
query getBook($slug: String!){

  booksCollections(filters: {slug: {eq: $slug}}){
    data{
      
    attributes{
      Title
      Author
      Description
      Published_Year
      Field
      Price
      slug
      Copies_Available
      
      Book_Image{
        data{
          attributes{
            formats
          }
        }
      }
    }
  }
}
  
}
`;
