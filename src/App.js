import "./App.css";
import React from "react";
import SearchBox from "./searchbox/searchbox.component";
import { CardList } from "./card.list/card.list.component";
import { AnimePage } from "./anime.component.page/anime.component";
import { Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Anime: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://kitsu.io/api/edge/anime")
      .then((Response) => Response.json())
      .then((anime) => this.setState({ Anime: anime.data }));
  }

  handleChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const { Anime, searchfield } = this.state;
    const filteredanime = Anime?.filter((anime) => {
      return anime?.attributes?.slug
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });

    return (
      <div>
        <SearchBox
          placeholder="search anime"
          handleChange={this.handleChange}
        />

        <CardList Anime={filteredanime} />
      </div>
    );
  }
}

export default App;
