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