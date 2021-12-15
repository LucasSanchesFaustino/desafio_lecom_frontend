import { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Form from "./Components/Form";
import axios from "axios";
import RepoList from "./Components/RepoList";

class App extends Component {
  state = {
    user: "",
    repos: [],
    error: "",
    loading: false,
  };

  changeUser = (user) => {
    this.setState({ user });
  };

  clearUser = () => {
    this.setState({repos: [], error: '', user: ''})
  }


  searchUser = async () => {
    const { user } = this.state;
    this.setState({loading: true})

    try {
      const { data: repos } = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );

      this.setState({ repos, error: "", loading: false});

    } catch (error) {
      this.setState({
        error: "Usuário ou Organização não encontrados",
        repos: [],
        loading: false,
      });
    }
  };

  render() {
    const { user, repos, error, loading } = this.state;
    return (
      <div className="App">
        <Header />
        <Form
          changeUser={this.changeUser}
          user={user}
          loading={loading}
          error={error}
          buttonAction={this.searchUser}
          clearAction={this.clearUser}
        />
        <RepoList repos={repos} />
        </div>
    );
  }
}

export default App;
