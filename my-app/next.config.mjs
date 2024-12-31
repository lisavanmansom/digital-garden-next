import path from 'path';
import withMDX from '@next/mdx';

export default withMDX({
  // Define which file extensions should be treated as pages
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],

  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve('./src'),  
    };
    return config;
  },
});
