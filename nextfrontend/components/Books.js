// import styled from 'styled-components'

export default function Books({booksCollection}){

    //Extract info from properties
    const{Title, Author, Copies_Available, Book_Image } = booksCollection.attributes

    return(
        <div>
            <div>
                <img src={Book_Image.data.attributes.formats.small.url} alt="" />
            </div>
            <h2>{Title}</h2>
            <h4>{Author}</h4>
            <h4>Copies Left: {Copies_Available}</h4>
        </div>
    )
}

// const Titlehead = styled.h2`
//     background-color: black;
//     color: #1391ff;
// `

// const BigPage = styled.div`
//     padding:0;
//     background-color: #1692ff;
// `