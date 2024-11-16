import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { SpecialTitle } from "@/components";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <SpecialTitle title="contact" body="We are born to create" />
        <div className="contact__content">
          <h3 className="contact__content__title">
            Feel free to drop us a line at:
          </h3>
          <a
            className="contact__content__mail"
            href="mailto:leonagency@mail.com"
          >
            leonagency@mail.com
          </a>
          <div className="contact__content__links">
            <p>Find Us On Social Networks</p>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com"
                  className="contact__content__links__youtube"
                >
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  className="contact__content__links__facebook"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="https://www.x.com"
                  className="contact__content__links__twitter"
                >
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
