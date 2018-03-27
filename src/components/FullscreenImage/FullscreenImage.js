import React from 'react';
import { Layout, Fill } from 'spectacle';

const FullscreenImage = ({ src, portrait = false }) => (
  <Layout>
    <Fill>
      <img
        src={src}
        width={portrait ? null : '100%'}
        height={portrait ? '100%' : null}
      />
    </Fill>
  </Layout>
);

export default FullscreenImage;
