import GsapAnimation from "./components/GsapAnimation";
import Dropdown from "./components/Dropdown";

export default function Home() {
  return (
    <div className="page-wrapper">
      <div className="background" aria-hidden="true"></div>
      <main role="main">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/" className="nav-services">
                  <span className="bullet">•</span>
                  Our services
                </a>
              </li>
              <li>
                <a
                  href="https://justincefai.dev"
                  target="blank"
                  rel="noopener noreferrer"
                  className="nav-work"
                >
                  Let's work together
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="page-content">
          <div className="title-wrapper">
            <h1 className="title">
              <div className="front">FRONT</div>
              <div className="back">BACK</div>
            </h1>
            <div className="title end">END</div>
          </div>
          <div className="menu-wrapper">
            <h2 className="services-title">(Front End Services)</h2>
            <ul className="dropdown-list frontend">
              <li className="accordion-item">
                <button className="accordion-header" aria-expanded="false">
                  <h3>Creative Development</h3>
                  <span className="icon"></span>
                </button>
                <div
                  className="accordion-content"
                  role="region"
                  aria-hidden="true"
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatem facere cupiditate consectetur quasi quidem
                    molestiae, voluptatibus praesentium quo earum, nobis dolor
                    vel saepe culpa eius consequuntur quas suscipit officiis
                    maxime?
                  </p>
                </div>
              </li>
              <li className="accordion-item">
                <button className="accordion-header" aria-expanded="false">
                  <h3>Animation</h3>
                  <span className="icon"></span>
                </button>
                <div
                  className="accordion-content"
                  role="region"
                  aria-hidden="true"
                >
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsam in dolores quibusdam doloribus aut animi ipsa quos
                    repudiandae aperiam impedit laudantium at, suscipit quod,
                    amet non, molestiae magni! Explicabo, cupiditate?
                  </p>
                </div>
              </li>
              <li className="accordion-item">
                <button className="accordion-header" aria-expanded="false">
                  <h3>Landing Pages</h3>
                  <span className="icon"></span>
                </button>
                <div
                  className="accordion-content"
                  role="region"
                  aria-hidden="true"
                >
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iusto maiores provident quis rem quasi, quisquam odio
                    doloremque omnis sequi quos nisi accusantium sint dolorum
                    laboriosam quae eos exercitationem, commodi eligendi.
                  </p>
                </div>
              </li>
              <li className="accordion-item">
                <button className="accordion-header" aria-expanded="false">
                  <h3>Performance Optimizaion</h3>
                  <span className="icon"></span>
                </button>
                <div
                  className="accordion-content"
                  role="region"
                  aria-hidden="true"
                >
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iusto maiores provident quis rem quasi, quisquam odio
                    doloremque omnis sequi quos nisi accusantium sint dolorum
                    laboriosam quae eos exercitationem, commodi eligendi.
                  </p>
                </div>
              </li>
              <li className="accordion-item">
                <button className="accordion-header" aria-expanded="false">
                  <h3>Landing Pages</h3>
                  <span className="icon"></span>
                </button>
                <div
                  className="accordion-content"
                  role="region"
                  aria-hidden="true"
                >
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iusto maiores provident quis rem quasi, quisquam odio
                    doloremque omnis sequi quos nisi accusantium sint dolorum
                    laboriosam quae eos exercitationem, commodi eligendi.
                  </p>
                </div>
              </li>
              <li className="accordion-item">
                <button className="accordion-header" aria-expanded="false">
                  <h3>Animation</h3>
                  <span className="icon"></span>
                </button>
                <div
                  className="accordion-content"
                  role="region"
                  aria-hidden="true"
                >
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iusto maiores provident quis rem quasi, quisquam odio
                    doloremque omnis sequi quos nisi accusantium sint dolorum
                    laboriosam quae eos exercitationem, commodi eligendi.
                  </p>
                </div>
              </li>
            </ul>
            <h2 className="services-title" id="backend">
              (Back End Services)
            </h2>
            <ul className="dropdown-list backend">
              <li className="accordion-item">
                <button className="accordion-header" aria-expanded="false">
                  <h3>Back End Structures</h3>
                  <span className="icon"></span>
                </button>
                <div
                  className="accordion-content"
                  role="region"
                  aria-hidden="true"
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptatem facere cupiditate consectetur quasi quidem
                    molestiae, voluptatibus praesentium quo earum, nobis dolor
                    vel saepe culpa eius consequuntur quas suscipit officiis
                    maxime?
                  </p>
                </div>
              </li>
              <li className="accordion-item">
                <button className="accordion-header" aria-expanded="false">
                  <h3>Content Management Systems</h3>
                  <span className="icon"></span>
                </button>
                <div
                  className="accordion-content"
                  role="region"
                  aria-hidden="true"
                >
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsam in dolores quibusdam doloribus aut animi ipsa quos
                    repudiandae aperiam impedit laudantium at, suscipit quod,
                    amet non, molestiae magni! Explicabo, cupiditate?
                  </p>
                </div>
              </li>
              <li className="accordion-item">
                <button className="accordion-header" aria-expanded="false">
                  <h3>User Authentication</h3>
                  <span className="icon"></span>
                </button>
                <div
                  className="accordion-content"
                  role="region"
                  aria-hidden="true"
                >
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iusto maiores provident quis rem quasi, quisquam odio
                    doloremque omnis sequi quos nisi accusantium sint dolorum
                    laboriosam quae eos exercitationem, commodi eligendi.
                  </p>
                </div>
              </li>
              <li className="accordion-item">
                <button className="accordion-header" aria-expanded="false">
                  <h3>Remote Updating</h3>
                  <span className="icon"></span>
                </button>
                <div
                  className="accordion-content"
                  role="region"
                  aria-hidden="true"
                >
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iusto maiores provident quis rem quasi, quisquam odio
                    doloremque omnis sequi quos nisi accusantium sint dolorum
                    laboriosam quae eos exercitationem, commodi eligendi.
                  </p>
                </div>
              </li>
              <li className="accordion-item">
                <button className="accordion-header" aria-expanded="false">
                  <h3>Cloud Storage</h3>
                  <span className="icon"></span>
                </button>
                <div
                  className="accordion-content"
                  role="region"
                  aria-hidden="true"
                >
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iusto maiores provident quis rem quasi, quisquam odio
                    doloremque omnis sequi quos nisi accusantium sint dolorum
                    laboriosam quae eos exercitationem, commodi eligendi.
                  </p>
                </div>
              </li>
              <li className="accordion-item">
                <button className="accordion-header" aria-expanded="false">
                  <h3>Hosting</h3>
                  <span className="icon"></span>
                </button>
                <div
                  className="accordion-content"
                  role="region"
                  aria-hidden="true"
                >
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iusto maiores provident quis rem quasi, quisquam odio
                    doloremque omnis sequi quos nisi accusantium sint dolorum
                    laboriosam quae eos exercitationem, commodi eligendi.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <footer role="contentinfo">
          <div className="page-number-wrapper">
            <div className="first">01</div>
            <div className="second">02</div>
          </div>
        </footer>
      </main>
      <GsapAnimation />
      <Dropdown />
    </div>
  );
}
