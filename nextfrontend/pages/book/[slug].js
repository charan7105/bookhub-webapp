import { useQuery } from "urql";
import { GET_BOOK_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import {
  DetailsStyle,
  DescriptionStyle,
  Quantity,
  Buy,
  CompleteDetailski,
} from "@/styles/BookDetail";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useStateContext } from "../../lib/context";
import { useEffect } from "react"; //To Get Reset the Quantity Number

export default function BooksDetails() {
  //UseState
  const { qnty, increaseQnty, decreaseQnty, onAdd } = useStateContext();

  //Fetch SLUG
  const { query } = useRouter();
  //if your URL looks like this: /book?slug=123, calling query.slug would give you the value "123", which you can then use to fetch specific book details in your component.
  // console.log(router)

  //Fetch GraphQL Data
  const [results] = useQuery({
    query: GET_BOOK_QUERY,
    variables: { slug: query.slug },
    // you are setting up a variable named slug in your GraphQL query, and you are assigning it the value from the slug property in the URL using query.slug. This allows you to dynamically pass the slug value from the URL to your GraphQL query, so you can fetch data related to the specific book identified by that slug.
  });

  const { data, fetching, error } = results;

  useEffect(() => {
    // Reset the quantity when the component is unmounted
    return () => {
      decreaseQnty(qnty); // You can use decreaseQnty to set it to 1 or any initial value
    };
  }, []); // Empty dependency array to run this effect once

  if (fetching) return <p>Loading..</p>;
  if (error) return <p>Oh no..{error.message}</p>;
  // console.log(data)

  const {
    Title,
    Author,
    Description,
    Price,
    Published_Year,
    Copies_Available,
    Book_Image,
    Field,
  } = data.booksCollections.data[0].attributes;

  // const [qnty,SetQuantity] = useState(0)

  return (
    <CompleteDetailski>
      <DetailsStyle>
        <img src={Book_Image.data.attributes.formats.small.url} alt={Title} />

        <DescriptionStyle>
          <h2>{Title}</h2>
          <p className="des">{Description}</p>
          <h4>Published Year: {Published_Year}</h4>
          <h4>By {Author}</h4>
          <h4>Price: {Price}/-</h4>
          <h4>Field: {Field}</h4>
          <h4>No of Copies Available: {Copies_Available}</h4>
          <Quantity>
            <span>No of Copies</span>
            <button onClick={decreaseQnty}>
              <AiFillMinusCircle />
            </button>
            <p>{qnty}</p>
            <button onClick={increaseQnty} disabled={qnty >= Copies_Available} >
              <AiFillPlusCircle />
            </button>
          </Quantity>
          <Buy onClick={() => onAdd(data.booksCollections.data[0].attributes,qnty)}>Add to Cart</Buy>
        </DescriptionStyle>
      </DetailsStyle>
    </CompleteDetailski>
  );
}
