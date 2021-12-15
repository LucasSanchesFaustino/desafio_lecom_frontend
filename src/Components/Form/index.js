import React from "react";
import Spinner from "../Spinner";

const Form = ({ user, loading, error, buttonAction, changeUser, clearAction }) => (
  <div className="formContainer">
    <input
      type="text"
      className="userInput"
      value={user}
      placeholder="Usuário ou Organização"
      onChange={e => changeUser(e.target.value)}
    />
    <button className="searchButton" onClick={buttonAction}>
      {loading ?  <Spinner /> : "Buscar"}
    </button>

    <button className="searchButton" onClick={clearAction}>
      Limpar
    </button>

    <p className="errorText">{error}</p>
  </div>
);

export default Form;
