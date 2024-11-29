module.exports = {
    transform: {
      "^.+\\.js$": "babel-jest",
    },
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif)$': '<rootDir>/__mocks__/fileMock.js',
      '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
  };
  