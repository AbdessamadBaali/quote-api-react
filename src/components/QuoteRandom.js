import axios from "axios";
import React from "react";

const baseURLRandom = "https://api.quotable.io/random";


export default function QuoteRandom() {
  const [quote, setQuote] = React.useState();
  const [author, setAuthor] = React.useState();
  const [tags, setTags] = React.useState([]);

  React.useEffect( () => {
    axios.get(baseURLRandom)
    .then((response) => {
      setQuote(response.data.content);
      setAuthor(response.data.author);
      setTags(response.data.tags);
    }).catch( err => console.log(err))
  }, [])

  const getQuoate = () => {
    axios.get(baseURLRandom)
    .then((response) => {
      setQuote(response.data.content);
      setAuthor(response.data.author);
      setTags(response.data.tags);
    }).catch( err => console.log(err))
  }


  return (
    <div className="border shadow mt-4 p-4 w-75 m-auto">
        <p className="text-capitalize fw-bold">{author}</p>
        <p><i className="text-capitalize">{quote}</i></p>
        <p><i className="text-capitalize">{tags}</i></p>

        <button className="btn btn-outline-dark text-capitalize" onClick={getQuoate}>get randome quote</button>

    </div>
  );
}
