import { useEffect, useState } from "react"
import { marked } from "marked"

const App = () => {
  const [text, setText] = useState(`
  # H1
  ## H2
  ### H3
  **bold text**
  *italicized text*
  - First item
  - Second item
  - Third item
  > blockquote
  \`code\`
  [title](https://www.example.com)
  ![alt text](image.jpg)
  \`\`\`
  function greet(name) {
      console.log(\`Hello, ${name}!\`);
  }
  \`\`\`

  `)
  
  const [expandEditor, setExpandEditor] = useState(true)
  const [expandPreviewer, setExpandPreviewer] = useState(true)

 useEffect(() => {
  marked.setOptions({
    breaks: true,
  })
 }, [])

  const editorExpand = () => {
    setExpandEditor(!expandEditor)
  }
  const previewerExpand = () => {
    setExpandPreviewer(!expandPreviewer)
  }
  
  return (
    <div className='center'>
    {expandPreviewer &&
      <div className="editor-box">
        <div className="editor-title"><p>Editor</p> <button onClick={() => editorExpand()} className="editor-expand">
        {expandEditor ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"/>
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrows-angle-contract" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707"/>
      </svg>}
        
</button></div>
        <textarea onChange={(e) => setText(e.target.value)} value={text} className={`${expandEditor ? "editor" : "editor-expanded"}`} id="editor"></textarea>
      </div>}

      {expandEditor && 
      <div id="preview-box">
        <div className="preview-title"><p>Previewer</p><button className="editor-expand" onClick={() => previewerExpand()}>
        {expandPreviewer ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"/>
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrows-angle-contract" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707"/>
      </svg>}
      </button>
        </div>
        <div id="preview" className={` ${expandEditor ? "preview-text" : "preview-text-expanded"}`} dangerouslySetInnerHTML={{ __html: marked(text)}}></div>
      </div>}
    </div>
  )
}

export default App