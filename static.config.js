import path from 'path'

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  maxThreads: 1, // Remove this when you start doing any static generation
  plugins: [
    'react-static-plugin-emotion',
    [
      'react-static-plugin-react-router',
      {
        RouterProps: {},
      },
    ],
    'react-static-plugin-typescript',
    'react-static-plugin-sitemap',
    [
      'react-static-plugin-source-filesystem',
      {
        location: path.resolve('./src/pages'),
      },
    ],
  ],
}
