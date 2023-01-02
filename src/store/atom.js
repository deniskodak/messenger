import {
    atom,
  } from 'recoil';
import {selectedChanelKey, allChannelsKeys} from './keys'

export const selectedChanel = atom({
    key: selectedChanelKey,
    default: null,
  });

  export const allChannels = atom({
    key: allChannelsKeys,
    default: [],
  });  