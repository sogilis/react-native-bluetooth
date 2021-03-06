/**
 * Copyright (c) 2016-present, Sogilis SARL
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  makeCharacteristicEventListener,
  ReactNativeBluetooth,
} from './lib';

const writeCharacteristicValue = (characteristic, buffer, withResponse) => {
  return new Promise((resolve, reject) => {
    if (!withResponse) {
      ReactNativeBluetooth.writeCharacteristicValue(characteristic, buffer.toString('base64'), withResponse);
      resolve();
      return;
    }

    const resultMapper = detail => detail;

    makeCharacteristicEventListener(resolve, reject, ReactNativeBluetooth.CharacteristicWritten, characteristic, resultMapper);

    ReactNativeBluetooth.writeCharacteristicValue(characteristic, buffer.toString('base64'), withResponse);
  });
};

export {
  writeCharacteristicValue,
};
