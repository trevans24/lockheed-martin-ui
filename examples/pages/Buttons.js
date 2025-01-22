import React, {Component} from 'react';
import Button from '../../src/components/Button/Button';

export default class Buttons extends Component {
  render() {
    return (
      <section>
        <h2 className="header-1 text-center">Buttons</h2>
        <div className="highlight text-center">
          <pre>
            <span className="tag">&lt;Button </span>
            <span className="attr">className=</span>
            <span className="quote">"class name for styling"</span>
            <span className="attr"> title=</span>
            <span className="quote">"text for button"</span>
            <span className="attr"> diabled=</span>
            <span className="quote">"true or false" </span>
            <span className="attr"> click=</span>
            <span className="quote">&#123;() => this.click() or any function you want in the parent component&#125; </span>
            <span className="tag">/></span>
          </pre>
        </div>

        <div className="example-content">
          <div className="example-content-column">
            <h2 className="header-2">Buttons</h2>
            <Button className="btn-primary" title="primary"/>
            <Button className="btn-secondary" title="secondary"/>
            <div className="highlight text-center">
              <pre>
                <span className="tag">&lt;Button </span>
                <span className="attr">className=</span>
                <span className="quote">"btn-primary"</span>
                <span className="attr"> title=</span>
                <span className="quote">"primary"</span>
                <span className="tag">/></span>
              </pre>
              <pre>
                <span className="tag">&lt;Button </span>
                <span className="attr">className=</span>
                <span className="quote">"btn-secondary"</span>
                <span className="attr"> title=</span>
                <span className="quote">"secondary"</span>
                <span className="tag">/></span>
              </pre>
            </div>
            <h2 className="header-2">Buttons Disabled</h2>
            <Button className="btn-primary" title="primary" disabled="true"/>
            <Button className="btn-secondary" title="secondary" disabled="true"/>
            <div className="highlight text-center">
              <pre>
                <span className="tag">&lt;Button </span>
                <span className="attr">className=</span>
                <span className="quote">"btn-primary"</span>
                <span className="attr"> title=</span>
                <span className="quote">"primary"</span>
                <span className="attr"> diabled=</span>
                <span className="quote">"true" </span>
                <span className="tag">/></span>
              </pre>
              <pre>
                <span className="tag">&lt;Button </span>
                <span className="attr">className=</span>
                <span className="quote">"btn-secondary"</span>
                <span className="attr"> title=</span>
                <span className="quote">"primary"</span>
                <span className="attr"> diabled=</span>
                <span className="quote">"true" </span>
                <span className="tag">/></span>
              </pre>
            </div>
            <h2 className="header-2">Buttons as Links</h2>
            <Button className="link" title="link" />
            <div className="highlight text-center">
              <pre>
                <span className="tag">&lt;Button </span>
                <span className="attr">className=</span>
                <span className="quote">"link"</span>
                <span className="attr"> title=</span>
                <span className="quote">"link"</span>
                <span className="tag">/></span>
              </pre>
            </div>
            <Button className="link edit" title="edit" />
            <div className="highlight text-center">
              <pre>
                <span className="tag">&lt;Button </span>
                <span className="attr">className=</span>
                <span className="quote">"link edit"</span>
                <span className="attr"> title=</span>
                <span className="quote">"edit"</span>
                <span className="tag">/></span>
              </pre>
            </div>
            <Button className="link delete" title="delete" />
            <div className="highlight text-center">
              <pre>
                <span className="tag">&lt;Button </span>
                <span className="attr">className=</span>
                <span className="quote">"link delete"</span>
                <span className="attr"> title=</span>
                <span className="quote">"delete"</span>
                <span className="tag">/></span>
              </pre>
            </div>
            <Button className="link cancel" title="cancel" />
            <div className="highlight text-center">
              <pre>
                <span className="tag">&lt;Button </span>
                <span className="attr">className=</span>
                <span className="quote">"link cancel"</span>
                <span className="attr"> title=</span>
                <span className="quote">"cancel"</span>
                <span className="tag">/></span>
              </pre>
            </div>
            <h2 className="header-2">Buttons as Links Disabled</h2>
            <Button className="link edit" title="edit" disabled="true" />
            <div className="highlight text-center">
              <pre>
                <span className="tag">&lt;Button </span>
                <span className="attr">className=</span>
                <span className="quote">"link edit"</span>
                <span className="attr"> title=</span>
                <span className="quote">"edit"</span>
                <span className="attr"> diabled=</span>
                <span className="quote">"true" </span>
                <span className="tag">/></span>
              </pre>
            </div>
          </div>
          <div className="example-content-column inverse">
            <h2 className="header-2-inverse">Buttons as Links</h2>
            <Button className="link add" title="Add Program" />
            <Button className="link add" title="Add Program" disabled="true"/>
            <div className="highlight text-center">
              <pre>
                <span className="tag">&lt;Button </span>
                <span className="attr">className=</span>
                <span className="quote">"link add"</span>
                <span className="attr"> title=</span>
                <span className="quote">"Add Program"</span>
                <span className="tag">/></span>
              </pre>
              <pre>
                <span className="tag">&lt;Button </span>
                <span className="attr">className=</span>
                <span className="quote">"link add"</span>
                <span className="attr"> title=</span>
                <span className="quote">"Add Program"</span>
                <span className="attr"> disabled=</span>
                <span className="quote">"true"</span>
                <span className="tag">/></span>
              </pre>
            </div>
            <h2 className="header-2-inverse">Static Buttons</h2>
            <Button className="static-btn" title="Static" />
            <Button className="static-btn" title="Static" disabled="true"/>
            <div className="highlight text-center">
              <pre>
                <span className="tag">&lt;Button </span>
                <span className="attr">className=</span>
                <span className="quote">"static-btn"</span>
                <span className="attr"> title=</span>
                <span className="quote">"Static"</span>
                <span className="tag">/></span>
              </pre>
              <pre>
                <span className="tag">&lt;Button </span>
                <span className="attr">className=</span>
                <span className="quote">"static-btn"</span>
                <span className="attr"> title=</span>
                <span className="quote">"Static"</span>
                <span className="attr"> disabled=</span>
                <span className="quote">"true"</span>
                <span className="tag">/></span>
              </pre>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
