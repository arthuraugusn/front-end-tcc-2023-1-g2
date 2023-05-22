export const Comment = ({ comment }) => {
  // const [input, SetInput] = useState("")
  const onAddComment = () => {

  }
  return (
    <div>
      <div className="filter-container-part">
        <div className="container-comment-part">
          {/* <div className={comment.id === 1 ? "inputContainer" : "commentContainer"} >
            ()
          </div> */}
          <input
            className="input-comment-something"
            type="text"
            // value={input}
            // onChange={(e) => setInput(e.target.value)}
            placeholder="Insira um comentario"
          />
        </div>
        <button className="button-send-comment" onClick={onAddComment}>ENVIAR</button>
      </div>
    </div>

  )
}