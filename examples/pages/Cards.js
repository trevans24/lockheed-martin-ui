import React, {Component} from 'react';
import Card from '../../src/components/Cards/Card';

export default class Cards extends Component {
  render() {
    return (
      <section className="text-center cards">
        <h2 className="header-1">Cards</h2>
        <h2 className="header-1">Card Small</h2>

        <Card small title="Card with Title">
          <h2 className="header-2">Card Body</h2>
        </Card>

        <div className="highlight">
          <pre>
            <span className="tag">&lt;Card </span>
            <span className="attr">small </span>
            <span className="attr">title= </span>
            <span className="quote">"Card with Title"</span>
            <span className="tag">&gt;</span>
          </pre>
          <pre className="line-2">
            <span className="content">Any Component or HTML element can go inside here</span>
          </pre>
          <pre>
            <span className="tag">&lt;/Card&gt;</span>
          </pre>
        </div>

        <Card small>
          <h2 className="header-2">Card without Title</h2>
        </Card>

        <div className="highlight">
          <pre>
            <span className="tag">&lt;Card </span>
            <span className="attr">small </span>
            <span className="tag">&gt;</span>
          </pre>
          <pre className="line-2">
            <span className="content">Any Component or HTML element can go inside here</span>
          </pre>
          <pre>
            <span className="tag">&lt;/Card&gt;</span>
          </pre>
        </div>

        <h2 className="header-1">Card Large</h2>
        
        <Card large title="Card with Title">
            <h2 className="header-2">Card Body</h2>
        </Card>

        <div className="highlight">
          <pre>
            <span className="tag">&lt;Card </span>
            <span className="attr">large </span>
            <span className="attr">title= </span>
            <span className="quote">"Card with Title"</span>
            <span className="tag">&gt;</span>
          </pre>
          <pre className="line-2">
            <span className="content">Any Component or HTML element can go inside here</span>
          </pre>
          <pre>
            <span className="tag">&lt;/Card&gt;</span>
          </pre>
        </div>

        <Card large>
            <h2 className="header-2">Card No Title</h2>
        </Card>

        <div className="highlight">
          <pre>
            <span className="tag">&lt;Card </span>
            <span className="attr">large </span>
            <span className="tag">&gt;</span>
          </pre>
          <pre className="line-2">
            <span className="content">Any Component or HTML element can go inside here</span>
          </pre>
          <pre>
            <span className="tag">&lt;/Card&gt;</span>
          </pre>
        </div>

      </section>
    )
  }
}
