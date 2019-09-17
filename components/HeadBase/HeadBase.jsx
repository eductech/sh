import React from 'react';
import Head from 'next/head';

const HeadBase = (props) => (
  <Head>
    <title>{props.title}</title>
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  </Head>
);

export default HeadBase;
