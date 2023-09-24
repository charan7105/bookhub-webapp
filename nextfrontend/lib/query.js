export const BOOKS_QUERY =  
`
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
`