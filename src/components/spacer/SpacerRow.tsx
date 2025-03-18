import React from 'react';
import {View} from 'react-native';
import {SpacerProps} from './SpacerColumn';
import {layout} from '../../utils';

export const SpacerRow: React.FC<SpacerProps> = ({size}) => (
  <View
    style={{
      width: layout.padding_x1 * size,
    }}
  />
);
