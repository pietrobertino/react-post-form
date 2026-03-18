export default function AppForm({ handleInput, handleSubmit, formData }) {

    return (
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
    )
}