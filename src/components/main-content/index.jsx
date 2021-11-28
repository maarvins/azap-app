import { useEffect, useState } from "react";
import { Card } from "../card";
import { Loading } from "../loading";

import { MainContentStyle } from "./styles";
import { InputContainer } from "./styles";
import { ClearButton } from "./styles";

export function MainContent() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://homologacao3.azapfy.com.br/api/ps/metahumans`)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
    if (e.key === "Enter") {
      handleSearch(input);
    }
  };

  const handleSearch = (value) => {
    const valueLength = value.length;
    const filtered = data.filter((hero) => hero.name.slice(0, valueLength).toLowerCase() === value.toLowerCase());
    setFilteredData(filtered);
  };

  const clearFilter = () => {
    setFilteredData([]);
    setInput("");
  };

  return (
    <div>
      {loading && <Loading />}
      <MainContentStyle>
        <InputContainer>
          <input
            className="effect-8"
            onKeyUp={(e) => handleInput(e)}
            onChange={(e) => handleInput(e)}
            value={input}
            placeholder="SEARCH YOUR HERO AND PRESS ENTER..."
          />
          <ClearButton inputValue={input.length > 0} onClick={() => clearFilter()}>
            X
          </ClearButton>
        </InputContainer>
        {filteredData?.length > 0 ? (
          <ul>
            {filteredData?.map((superHero, index) => (
              <Card key={index} superHero={superHero} />
            ))}
          </ul>
        ) : (
          <ul>
            {data?.map((superHero, index) => (
              <Card key={index} superHero={superHero} />
            ))}
          </ul>
        )}
      </MainContentStyle>
    </div>
  );
}
