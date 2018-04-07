import { Factory } from 'vuex-action-names';

const factory = new Factory('counter');
// eslint-disable-next-line
export const INCREMENT = factory.createAction('increment');
