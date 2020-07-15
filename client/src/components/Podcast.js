import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import Dods from '../assets/images/dods.png';

import ReactGa from 'react-ga';

export default function Resume() {
  return (
    <div className="container">
      <div
        className="jumbotron text-center"
        style={{ marginBottom: '2em', marginTop: '2em' }}
      >
        <h1>The Dogs Of Dalal Street Podcast</h1>
        <div className="row justify-content-center">
          <div style={{ marginBottom: '1em', marginRight: '1em' }}>
            <a
              href="https://www.instagram.com/dalalstreetpodcast/"
              onClick={(e) => {
                ReactGa.event({
                  category: 'Podcast',
                  action: 'Clicked Instagram icon.',
                });
              }}
            >
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
          </div>
          {/* <div style={{ marginBottom: '1em', marginRight: '1em' }}>
            <a
              href="https://www.linkedin.com/in/mahesh-natamai-b17683188/"
              onClick={(e) => {
                ReactGa.event({
                  category: 'Podcast',
                  action: 'Clicked LinkedIn icon.',
                });
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
          </div> */}
          {/* <div style={{ marginBottom: '1em', marginRight: '1em' }}>
            <a
              href="maheshkumar.natamai@gmail.com"
              onClick={(e) => {
                ReactGa.event({
                  category: 'Home',
                  action: 'Clicked Email icon.',
                });
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} size="3x" />
            </a>
          </div> */}
          <div style={{ marginBottom: '1em', marginRight: '1em' }}>
            <a
              href="https://www.facebook.com/The-Dogs-of-Dalal-Street-100141311786197/?__tn__=kC-R&eid=ARA45lPHSAmDdj3A-P5EfkvkMYv_k-9SJoaVaQYkkusZemhoAqbdLLcSZe1K81Qr_Nz-tbfRQABa3hPI&hc_ref=ARSgES4mA5ScSjjkDwG7Pxykv_9EkwGbpI_LdUIqW8ubBByd4vW526AtpNnsZf9Jri8&fref=nf&__xts__[0]=68.ARCv8mm0X8jEe_Rq2eQr35IQOQ3gz8_AHtaWEohJ6SyThxTCKLJH53zsuD1O_iozrODoI3NWhCfGmmozr9ZqGcGzAJjk7o0mKkqSeZYn12wskZtT73JgwKMzh1wQ2FDvPCNr0kM4ghJRh7pBxt_0N__0eqlcgONK4kIVnAQWY3LtTv-aMzE33YUq0Z-Orce3b_FoxCxpvI4VQLmHfSHJgfsghfKiibyWJiO6eritRZSpAFeqmQ1DYOUukLpokcWmGvX7ZIXB6_hYYsB8uDGxJ0BX9jgmqbkFmz1y4ztbgwPajGyg2pYL6mKon7FovtNxYECNqs-fb3JvxbJpXtFPYsnXKpDq3Kaf6f-xWWdVSra1fHKmOuEHwC4"
              onClick={(e) => {
                ReactGa.event({
                  category: 'Podcast',
                  action: 'Clicked Facebook icon.',
                });
              }}
            >
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
          </div>
        </div>
        <h4>
          A podcast hosted by <span className="text-success">Myself</span>,{' '}
          <span className="text-success">Rutvij Thakkar</span>,{' '}
          <span className="text-success">Harish Jai Ganesh</span>, and{' '}
          <span className="text-success">Raghav Gangatirkar</span>, where we
          discuss the state of the current{' '}
          <span className="text-success">American economy</span>,{' '}
          <span className="text-success">macroeconomic trends</span>, and other
          <span className="text-success">finance</span> related topics.
        </h4>
      </div>
      <div
        className="row justify-content-center text-center"
        style={{ marginBottom: '2em' }}
      >
        <img
          src={Dods}
          alt="Dogs Of Dalal Street Logo"
          className="img-responsive col"
          style={{ maxWidth: 600 }}
        />
      </div>

      <div class="alert alert-success" style={{ marginBotom: '2em' }}>
        <h3>
          The first episode has not been released yet due to shipment times for
          recording equipment. We are planning to release the first episode on
          or beforenext Wednesday (7/22). We will be discussing COVID-19's
          impact on different sectors and industries.
        </h3>
      </div>
    </div>
  );
}
