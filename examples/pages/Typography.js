import React, {Component} from 'react';

export default class Typography extends Component {
  render() {
    return (
      <section className="typography">
        <h2 className="header-1 text-center">Typography</h2>
        <h5 className="header-2 text-center">
          Note: the following typography tags can be any of the following and still work <br/>
          <span className="tag">h1, h2, h3, h4, h5, h6, p</span>
        </h5>
          <div className="example-content">
            <div className="example-content-column">
              <div className="typo-ex-left-light">
                <h3 className="header-1">Heading 1</h3>
                <div className="highlight">
                  <pre>
                    <span className="tag">&lt;h3 </span>
                    <span className="attr">className=</span>
                    <span className="quote">"header-1"></span>
                    <span className="content">Heading 1</span>
                    <span className="tag">&lt;/h3></span>
                  </pre>
                </div>
                <h3 className="header-2">Heading 2</h3>
                <div className="highlight">
                  <pre>
                    <span className="tag">&lt;h3 </span>
                    <span className="attr">className=</span>
                    <span className="quote">"header-2"></span>
                    <span className="content">Heading 2</span>
                    <span className="tag">&lt;/h3></span>
                  </pre>
                </div>
                <h3 className="title">title</h3>
                <div className="highlight">
                  <pre>
                    <span className="tag">&lt;h3 </span>
                    <span className="attr">className=</span>
                    <span className="quote">"title"></span>
                    <span className="content">title</span>
                    <span className="tag">&lt;/h3></span>
                  </pre>
                </div>
                <h3 className="body-copy">Body Copy</h3>
                <div className="highlight">
                  <pre>
                    <span className="tag">&lt;h3 </span>
                    <span className="attr">className=</span>
                    <span className="quote">"body-copy"></span>
                    <span className="content">Body Copy</span>
                    <span className="tag">&lt;/h3></span>
                  </pre>
                </div>
                <h3 className="label">label</h3>
                <div className="highlight">
                  <pre>
                    <span className="tag">&lt;h3 </span>
                    <span className="attr">className=</span>
                    <span className="quote">"label"></span>
                    <span className="content">label</span>
                    <span className="tag">&lt;/h3></span>
                  </pre>
                </div>
                <h3 className="label-sm">small label</h3>
                <div className="highlight">
                  <pre>
                    <span className="tag">&lt;h3 </span>
                    <span className="attr">className=</span>
                    <span className="quote">"label-sm"></span>
                    <span className="content">small label</span>
                    <span className="tag">&lt;/h3></span>
                  </pre>
                </div>
                <h3 className="table-copy">Table Copy</h3>
                <div className="highlight">
                  <pre>
                    <span className="tag">&lt;h3 </span>
                    <span className="attr">className=</span>
                    <span className="quote">"table-copy"></span>
                    <span className="content">Table Copy</span>
                    <span className="tag">&lt;/h3></span>
                  </pre>
                </div>
              </div>
            </div>
            <div className="example-content-column inverse">
              <div className="typo-ex-right-dark">
                <h3 className="header-1-inverse">Heading 1</h3>
                <div className="highlight">
                  <pre>
                    <span className="tag">&lt;h3 </span>
                    <span className="attr">className=</span>
                    <span className="quote">"header-1-inverse"></span>
                    <span className="content">Heading 1</span>
                    <span className="tag">&lt;/h3></span>
                  </pre>
                </div>
                <h3 className="header-2-inverse">Heading 2</h3>
                <div className="highlight">
                  <pre>
                    <span className="tag">&lt;h3 </span>
                    <span className="attr">className=</span>
                    <span className="quote">"header-2-inverse"></span>
                    <span className="content">Heading 2</span>
                    <span className="tag">&lt;/h3></span>
                  </pre>
                </div>
                <h3 className="title-inverse">title</h3>
                <div className="highlight">
                  <pre>
                    <span className="tag">&lt;h3 </span>
                    <span className="attr">className=</span>
                    <span className="quote">"title-inverse"></span>
                    <span className="content">title</span>
                    <span className="tag">&lt;/h3></span>
                  </pre>
                </div>
                <h3 className="body-copy-inverse">Body Copy</h3>
                  <div className="highlight">
                    <pre>
                      <span className="tag">&lt;h3 </span>
                      <span className="attr">className=</span>
                      <span className="quote">"body-copy-inverse"></span>
                      <span className="content">Body Copy</span>
                      <span className="tag">&lt;/h3></span>
                    </pre>
                  </div>
              </div>
            </div>
          </div>
      </section>
    )
  }
}
