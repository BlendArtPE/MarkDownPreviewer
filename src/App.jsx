//import { useState } from 'react'
import { useState } from "react";
import "./App.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`



You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`;

function App() {
  const [input, setInput] = useState(defaultMarkdown);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <div className="container-fluid text-center text-bg-secondary">
        <div className="row h-100">
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h2>Editor</h2>
                </div>
                <div className="card-text">
                  <textarea
                    className="form-control border border-primary"
                    value={input}
                    onChange={handleChange}
                    name=""
                    id="editor"
                    cols="50"
                    rows="15"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 text-bg-info"></div>
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h2>Previewer</h2>
                </div>
                <div className="card-text border border-primary" id="preview">
                  <ReactMarkdown gfm={true} breaks={true} >{input}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
