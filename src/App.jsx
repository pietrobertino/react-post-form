import { useState } from "react"
import axios from 'axios';
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

          <form onSubmit={handleSubmit} >

            <input type="text"
              className="form-control mt-3 border-secondary-subtle"
              name="author"
              placeholder="Author"
              value={formData.author}
              onChange={e => handleInput(e)} />

            <input type="text"
              className="form-control mt-3 border-secondary-subtle"
              placeholder="Title"
              name="title"
              value={formData.title}
              onChange={e => handleInput(e)} />

            <textarea type="text"
              className="form-control mt-3 border-secondary-subtle"
              placeholder="Body"
              name="body"
              value={formData.body}
              onChange={e => handleInput(e)} />

            <div className="form-check mt-3 ">
              <input className="form-check-input border-secondary"
                type="checkbox"
                id="checkDefault"
                name="public"
                checked={formData.public}
                onChange={e => handleInput(e)} />
              <label className="form-check-label" htmlFor="checkDefault">
                Public
              </label>
            </div>

            <div className="text-center">
              <button className="btn btn-primary mt-3 px-5 ">Post</button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default App

