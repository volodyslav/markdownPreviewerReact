const App = () => {
  return (
    <div className='center'>
      <div className="editor-box">
        <div className="editor-title">Editor</div>
        <textarea id="editor"></textarea>
      </div>
      <div id="preview-box">
        <div className="preview-title">Previewer</div>
        <div className="preview-text" id="preview"></div>
      </div>
    </div>
  )
}

export default App