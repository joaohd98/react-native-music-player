import 'react-native';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

const {JSDOM} = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html lang="pt-br"><body/></html>');
const {window} = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.console = {
  ...global.console,
  error: jest.fn(),
};
global.navigator = {
  userAgent: 'node.js',
};

copyProps(window, global);

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

Enzyme.configure({adapter: new Adapter()});
