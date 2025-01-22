import React, {Component} from 'react';
import Alert from '../../src/components/Confirmations/Alert';
import Modal from '../../src/components/Confirmations/Modal';
import Button from '../../src/components/Button/Button';

export default class Confirmations extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalOpen: false,
      modal2Open: false,
      alertOpen: true
    }

    this.openModal = this.openModal.bind(this);
    this.openModal2 = this.openModal2.bind(this);
  }

  // MODAL
  openModal() {
    this.setState({
      modalOpen: true
    });
  }

  openModal2() {
    this.setState({
      modal2Open: true
    })
  }

  closeModal() {
    this.setState({
      modalOpen: false,
      modal2Open: false
    });
  }

  // ALERT
  closeAlert() {
    this.setState({
      alertOpen: false
    });
  }

  render() {
    return (
      <section>
        <h2 className="header-1 text-center">Confirmations</h2>
        <Alert isOpen={this.state.alertOpen} title="confirmation" message="Alert Message" close={() => this.closeAlert()} />
        <div className="highlight text-center">
          <pre>
            <span className="tag">&lt;Alert </span>
            <span className="attr">message=</span>
            <span className="quote">"message" </span>
          </pre>
          <pre className="line-2">
            <span className="attr">isOpen=</span>
            <span className="quote">&#123;boolean based on state from Parent (this.state.open)&#125; </span>
          </pre>
          <pre className="line-2">
            <span className="attr">close=</span>
            <span className="quote">&#123;() => close alert function you create to change state in Parent &#125;</span>
            <span className="tag"> /></span>
          </pre>
        </div>
        <Modal isOpen={this.state.modalOpen} close={() => this.closeModal()} title="Event" message="Are you sure?">
        </Modal>
        <button className="btn-primary" onClick={() => this.openModal()}>Open Modal</button>

        <div className="highlight text-center">
          <pre>
            <span className="tag">&lt;Modal </span>
            <span className="attr">message=</span>
            <span className="quote">"message" </span>
          </pre>
          <pre className="line-2">
            <span className="attr">title=</span>
            <span className="quote">&#123;string for title of component&#125;</span>
          </pre>
          <pre className="line-2">
            <span className="attr">message=</span>
            <span className="quote">&#123;string for message of component&#125;</span>
          </pre>
          <pre className="line-2">
            <span className="attr">isOpen=</span>
            <span className="quote">&#123;boolean based on state from Parent (this.state.open)&#125; </span>
          </pre>
          <pre className="line-2">
            <span className="attr">close=</span>
            <span className="quote">&#123;() => close modal function you create to change state in Parent &#125;</span>
            <span className="tag"> /></span>
          </pre>
        </div>

        <Modal isOpen={this.state.modal2Open} close={() => this.closeModal()} title="Event" message="Are you sure?">
          <Button className="btn-primary" title="Child Button" />
        </Modal>
        <button className="btn-primary" onClick={() => this.openModal2()}>Open Modal With Children</button>

        <div className="highlight text-center">
          <pre>
            <span className="tag">&lt;Modal </span>
            <span className="attr">message=</span>
            <span className="quote">"message" </span>
          </pre>
          <pre className="line-2">
            <span className="attr">title=</span>
            <span className="quote">&#123;string for title of component&#125;</span>
          </pre>
          <pre className="line-2">
            <span className="attr">message=</span>
            <span className="quote">&#123;string for message of component&#125;</span>
          </pre>
          <pre className="line-2">
            <span className="attr">isOpen=</span>
            <span className="quote">&#123;boolean based on state from Parent (this.state.open)&#125; </span>
          </pre>
          <pre className="line-2">
            <span className="attr">close=</span>
            <span className="quote">&#123;() => close modal function you create to change state in Parent &#125;</span>
            <span className="tag">></span>
          </pre>
          <pre className="line-3">
            <span className="note">can take child components to display</span>
          </pre>
          <pre className="line-3">
            <span className="note">**Example of child component:</span>
          </pre>
          <pre className="line-3">
            <span className="tag">&lt;Button /></span>
          </pre>
          <pre>
            <span className="tag">&lt;Modal/></span>
          </pre>
        </div>

      </section>
    )
  }
}
