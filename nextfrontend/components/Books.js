export default function Books({booksCollection}){
    const{Title, Author, Copies_Available, Book_Image } = booksCollection.attributes
    return(
        <div>
            <div>
                <img src={Book_Image.data.attributes.formats.thumbnail.url} alt="" />
            </div>
            <h2>{Title}</h2>
            <h4>{Author}</h4>
            <h4>Copies Left: {Copies_Available}</h4>
        </div>
    )
}