import React from 'react';

import Layout from '../../components/layout';
import { H1 } from '../../components/headers';
import BibleQuote from '../../components/BibleQuote';
import Breadcrumbs from '../../components/Breadcrumbs';

const title = 'What We Believe';

const Page = () => (
  <Layout>
    <Breadcrumbs
      path={[{ title: 'Home', url: '/' }, { title: 'About' }]}
      title={title}
    />
    <H1>{title}</H1>

    <BibleQuote reference="Romans 6:23 (NLT)">
      "For the wages of sin is death, but the free gift of God is eternal life
      through Christ Jesus our Lord."
    </BibleQuote>

    <p>
      You are not an accident.  You are the wonderful creation of God.  He made
      you to love you.  The ultimate expression of this love is dying on a cross
      in your place for breaking His law.  Everyone has broken His law and is
      therefore imperfect.  Because God is perfect, we can not be connected with
      Him in our imperfection or sin.  The payment for your sin and the sin of
      the world has been PAID IN FULL by the life, death, and resurrection of
      Jesus.  However, God doesn’t force a relationship and this free gift of
      forgiveness upon anyone.  Instead God offers it freely to those who accept
      it.  To accept it you simply place your trust in Jesus alone to save you
      from spiritual death.  You can do this right now through a simple prayer
      like this:
    </p>

    <p>
      “God I admit that I have broken Your law.  I have lived life on my own
      terms.  I accept Your amazing free gift of forgiveness.  Thank you Jesus
      for paying my penalty.  I now live for You alone.”
    </p>

    <p>
      This may seem too easy.  You may feel you don’t deserve this kind of
      gift.  That is why it is AMAZING grace.  Your salvation is not easy.  It
      was incredibly painful and difficult, but Jesus did it in your place.  A
      gift requires nothing more than acceptance from the beneficiary.
    </p>

    <p>
      This is the best decision you will ever make.  Your next step is to share
      this decision and connect with others who have trusted Jesus in a Bible
      based Christian church.  Welcome to God’s family.
    </p>

    <p>
      <a
        href="http://www.sbc.net/bfm2000/bfm2000.asp"
        target="_blank"
        rel="noopener noreferrer"
      >
        We affirm the Baptist Faith and Message
      </a>
    </p>
  </Layout>
);

export default Page;
