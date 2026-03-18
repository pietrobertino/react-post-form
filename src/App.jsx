import { useState } from "react"
import axios from 'axios';
import AppForm from "./components/AppForm";
const api_url = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"

function App() {

  const initialFormData = {
    author: "",
    title: "",
    body: "",
    public: false
  }

  const [formData, setFormData] = useState(initialFormData)

  function handleInput(e) {
    const value = (e.target.type === "checkbox" ? e.target.checked : e.target.value)
    setFormData({ ...formData, [e.target.name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    //mandare i dati all'API
    axios.post(api_url, formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


    setFormData(initialFormData)
    alert("Post uploaded!")

  }

  return (
    <>
      <header className="text-center py-3" >
        <h1>Upload a new post</h1>
      </header>
      <main>
        <div className="container">
          <AppForm handleInput={handleInput} handleSubmit={handleSubmit} formData={formData} />
        </div>
      </main>
    </>
  )
}

export default App

