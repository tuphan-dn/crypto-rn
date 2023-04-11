module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            net: require.resolve('react-native-tcp'),
            crypto: require.resolve('react-native-quick-crypto'),
            buffer: require.resolve('@craftzdog/react-native-buffer'),
            stream: require.resolve('stream-browserify'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            zlib: require.resolve('browserify-zlib'),
            assert: require.resolve('assert'),
            url: require.resolve('url'),
          },
        },
      ],
      [
        '@babel/plugin-proposal-private-methods',
        {
          loose: true,
        },
      ],
    ],
  }
}
