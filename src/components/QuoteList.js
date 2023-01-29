import axios from "axios";
import React from "react";

const baseURList = "https://api.quotable.io/quotes";


export default function QuoteRandom() {
  const [results, setResultse] = React.useState([]);
  const [count, setCount] = React.useState();
  const [page, setPage] = React.useState();

  React.useEffect( () => {
    axios.get(baseURList)
    .then((response) => {
        setResultse(response.data.results);
        setCount(response.data.count);
        setPage(response.data.page);
    }).catch( err => console.log(err))
  }, [])


  return (
    <div className="    p-4  m-auto">
        <p className="text-capitalize fw-bold"></p>
        <p><i className="text-capitalize">count of quote : {count}</i></p>
        <div className="d-flex justify-content-center flex-wrap">
        {
        results.map( (e, i) => 
            <div className="card m-2 p-4 w-50 " key={i}>
                <p className="text-capitalize fw-bold">{e.author}</p>
                <p><i className="text-capitalize">{e.content}</i></p>
                <p><i className="text-capitalize">{e.tags}</i></p>

            </div>
        ) }
        </div>
    </div>
  );
}
