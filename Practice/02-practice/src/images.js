import {createStore} from 'redux';
import reduce from './reduce'

const images = createStore(reduce)

export default images