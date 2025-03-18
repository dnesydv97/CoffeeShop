// libraries
import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';


type SeparatorProps = {
  style?: ViewStyle;
  color?: string;
  horizontal?: boolean;
};

export const Separator: React.FC<SeparatorProps> = ({
  style,
  color = '#EAEAEA',
  horizontal,
}: SeparatorProps) => {
  // returns
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: color,
          ...(horizontal ? {width: 1, height: '100%'} : {}),
        },
        style,
      ]}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 1,
  },
});
