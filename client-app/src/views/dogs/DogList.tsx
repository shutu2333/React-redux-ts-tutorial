import { useState } from "react";
import { useFetchDogBreedsQuery } from "./dogs-slice";

export const DogList = () => {
  const [limit, setLimit] = useState(5);

  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading, isFetching } = useFetchDogBreedsQuery(limit);

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <div>
      <select onChange={change => setLimit(Number(change.target.value))}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
      </div>

      {error && <div>Oh no, there was an error</div>}
      {(isLoading) && <div>Loading...</div>}
      {data &&
        data.map((item, index) => (
          <div key={index}>
            <h3>
              {index + 1}.{item.name} {isFetching ? "..." : ""}
            </h3>
            <img
              src={item.image.url}
              alt={item.name}
              width={300}
              height={300}
            />
          </div>
        ))}
    </div>
  );
};
