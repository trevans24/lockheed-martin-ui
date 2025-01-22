import React, {Component} from 'react';
// Components
import PrimaryNav from '../../src/components/Navbars/PrimaryNav';
import SecondaryNav from '../../src/components/Navbars/SecondaryNav';
import Footer from '../../src/components/Footer/Footer';
import BreadCrumb from '../../src/components/BreadCrumbs/BreadCrumbs';

export default class Navigations extends Component {
  render() {
    return (
      <div className="navigations">
        <PrimaryNav />

        <div className="content">
          <SecondaryNav />

          <h2 className="header-1 text-center">Navs</h2>
          <h2 className="header-2 text-center">Primary (Side Bar) | Secondary (Top Bar)</h2>

          <h4 className="header-2 text-center">**You will need to go into the SecondaryNav Component and handle the Notifications through data</h4>
          <section className="text-center">
            <h2 className="header-1">Bread Crumb</h2>
            <BreadCrumb />
            <div className="highlight">
              HTML in JSX
              <pre className="tag">&lt;div <span className="attr">className="bread-crumb"</span>&gt;</pre>
              <pre className="tag line-2">
                &lt;a
                <span className="attr"> href="/link-to-page"</span>
                <span className="attr"> className="crumb"&gt;</span>
                <span className="content">&#123;first page&#125;</span>
                &lt;/a&gt;
              </pre>
              <pre className="tag line-2">&lt;img
                <span className="attr"> src=</span>
                &#123;chevronRight&#125;
                <span className="attr"> alt=</span>"" /&gt;
              </pre>
              <pre className="tag line-2">
                &lt;a
                <span className="attr"> href="/link-to-page"</span>
                <span className="attr"> className="crumb"&gt;</span>
                <span className="content">&#123;second page&#125;</span>
                &lt;/a&gt;
              </pre>
              <pre className="tag line-2">&lt;img
                <span className="attr"> src=</span>
                &#123;chevronRight&#125;
                <span className="attr"> alt=</span>"" /&gt;
              </pre>
              <pre className="tag line-2">
                &lt;span
                <span className="attr"> className="crumb active"&gt;</span>
                <span className="content">&#123;current page&#125;</span>
                &lt;/span&gt;
              </pre>
              <pre className="tag">&lt;/div&gt;</pre>
            </div>
          </section>

          <div className="footer-example">
            <h2 className="header-1 text-center">Footer</h2>
            <Footer />
          </div>

        </div>
      </div>
    )
  }
}
