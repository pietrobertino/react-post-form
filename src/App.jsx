
function App() {

  return (
    <>
      <header className="text-center py-3" >
        <h1>Upload a new post</h1>
      </header>
      <main>
        <div className="container">
          <form >
            <input type="text" name="author" className="form-control mt-3 border-secondary-subtle" placeholder="Author" />
            <input type="text" name="title" className="form-control mt-3 border-secondary-subtle" placeholder="Title" />
            <textarea type="text" name="body" className="form-control mt-3 border-secondary-subtle" placeholder="Body" />
            <div className="form-check mt-3 ">
              <input className="form-check-input border-secondary" type="checkbox" value="" id="checkDefault" />
              <label className="form-check-label" htmlFor="checkDefault">
                Public
              </label>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default App
