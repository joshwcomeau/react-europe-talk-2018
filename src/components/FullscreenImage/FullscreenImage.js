import React from 'react';
import { Layout, Fill } from 'spectacle';

const FullscreenImage = ({ src }) => (
  <Layout>
    <Fill>
      <img src={src} width="100%" />
    </Fill>
  </Layout>
);
export default FullscreenImage;
