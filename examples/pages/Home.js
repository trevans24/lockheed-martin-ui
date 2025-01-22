import React from 'react';

const Home = () => {
  return (
    <section className="home">

      {/* Header */}
      <div className="header text-center">
        <h2 className="header-1">A UI toolkit built for</h2>
        <img src={"../../src/assets/img/Lockheed_Martin.svg"} alt="lockheed-martin-logo" />
      </div>

      {/* Code Section */}
      <div className="code-info">
        <h3 className="header-1 text-center">Designed with the Lockheed team in mind</h3>
        <div className="code-grid">
          <div className="react">
            <img src="../../src/assets/img/React.svg" alt="react-js" />
            <h3 className="header-1 text-center">Built to be easily implemented</h3>
            <h3 className="body-copy text-center">
              React components built using the latest version of <a href="https://reactjs.org/">React </a>
              (v16.2.0). Most of the base components can be just added directly to your code. The more
              complicated components have been built as the base for you to continue and build upon.
            </h3>
          </div>
          <div className="sass">
            <img src={'../../src/assets/img/sass.svg'} alt="sass" />
            <h3 className="header-1 text-center">Preprocessor</h3>
            <h3 className="body-copy text-center">
              Ships with vanilla CSS3, but it is written in <a href="http://sass-lang.com/">SASS</a>,
              a popular CSS preprocessor. Calling the CSS classes on the HTML elements in your
              JSX code will style the element how they are displayed here in the toolkit page, or
              build you can build upon the source code to make it your own.
            </h3>
          </div>
          <div className="webpack">
            <img src={'../../src/assets/img/webpack.svg'} alt="webpack" />
            <h3 className="header-1 text-center">Compiler</h3>
            <h3 className="body-copy text-center">
              Using <a href="https://webpack.js.org/">Webpack</a> to compile the code into one
              JavaScript file for production code. A simple command to serve a web server for
              development or build code to production.
            </h3>
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="documentation">
        <h2 className="header-1 text-center">Quick Start</h2>

        <h3 className="header-1">Our Code Base:</h3>
        <h3 className="body-copy">
          What you will need to get started on this project with the current code:
          <ul>
            <li>Text Editor</li>
            <li>NPM (Node.js)</li>
          </ul>
        </h3>
        <h3 className="header-2">Installation:</h3>
        <h3 className="body-copy">
          Run the following commands in your terminal:
        </h3>
        <div className="highlight">
          <pre>
            <span className="tag">cd into/project/directory</span>
          </pre>
          <pre>
            <span className="tag">npm Install</span>
          </pre>
          <pre>
            <span className="tag">npm run serve</span>
          </pre>
        </div>
        <h3 className="body-copy">That is it for you to build upon the current code base we have built for you</h3>

        {/* In case we have an OK for NPM Packaging */}
        {/* <hr></hr>
          <h3 className="header-1">Your own code:</h3>
          <h3 className="body-copy">
            What you will need to get started on your own project with our code:
            <ul>
              <li>Text Editor</li>
              <li>NPM (Node.js)</li>
            </ul>
          </h3>

          <h3 className="header-2">Installation:</h3>
          <h3 className="body-copy">
            Run the following commands in your terminal:
          </h3>

          <div className="highlight">
            <pre>
              <span className="tag">cd into/project/directory</span>
            </pre>
            <pre>
              <span className="tag">npm Install --save lm-ui-toolkit</span>
            </pre>
          </div>

          <h3 className="body-copy">
            To get the correct styling for building your own components:
          </h3>
          <div className="highlight">
            <pre>
              <span className="jsx">import 'lm-ui-toolkit/Toolkit.css'</span>
            </pre>
          </div>

          <h3 className="body-copy">
            Make sure in your JSX you call the correct classNames/groupClass or attributes
          </h3>

          <div className="highlight">
            Example
            <pre>
              <span className="tag">&lt;Button </span>
              <span className="attr">className=</span>
              <span className="quote">"btn-primary"</span>
            </pre>
          </div> */}

      </div>

      <div className="contact">
        {/* Spire Logo */}
        <img src={"../../src/assets/img/spire-logo.svg"} alt="spire-digital-logo" className="spire" />
        <div className="contact-info">
          <h3 className="header-2">940 Lincoln St</h3>
          <h3 className="header-2">Denver, CO 80203</h3>
          <h3 className="header-2">303 620 9974</h3>
          <h3 className="header-2">info@spiredigital.com</h3>
        </div>
      </div>
    </section>
  )
}

export default Home
