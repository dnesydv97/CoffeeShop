import {FC, ReactNode} from 'react';
import styled from 'styled-components';
import {BackgroundProps, AlignProps, SpacingProps} from '../types';
import {View, TouchableOpacity} from 'react-native';

interface RowProps extends BackgroundProps, AlignProps, SpacingProps {
  children?: ReactNode;
  touchable?: boolean | undefined;
  onPress?: () => void;
  style?: any;
  activeOpacity?: any;
  key?: any;
}
const StyleDiv = styled(View)`
  flex-direction: row;
  align-items: ${({alignItems}: any) => alignItems || 'center'};
  justify-content: ${({justifyContent}: any) => justifyContent || `flex-start`};
  background-color: ${({backgroundColor, theme}: any) =>
    theme.colors[backgroundColor] || `none`};
  padding-horizontal: ${({theme, paddingHorizontal}: any) =>
    theme.spacing[paddingHorizontal] || 0}px;
  padding-top: ${({theme, paddingTop}: any) =>
    theme.spacing[paddingTop] || 0}px;
  padding-bottom: ${({theme, paddingBottom}: any) =>
    theme.spacing[paddingBottom] || 0}px;
  margin-top: ${({theme, marginTop}: any) => theme.spacing[marginTop] || 0}px;
  margin-bottom: ${({theme, marginBottom}: any) =>
    theme.spacing[marginBottom] || 0}px;
  margin-horizontal: ${({theme, marginHorizontal}: any) =>
    theme.spacing[marginHorizontal] || 0}px;
  background-color: ${({background, theme}: any) =>
    theme.colors[background] || `none`};
  flex-shrink: 1;
`;
const StyleTouchableDiv = styled(TouchableOpacity)`
  padding-horizontal: ${({theme, paddingHorizontal}: any) =>
    theme.spacing[paddingHorizontal] || 0}px;
  padding-top: ${({theme, paddingTop}: any) =>
    theme.spacing[paddingTop] || 0}px;
  padding-bottom: ${({theme, paddingBottom}: any) =>
    theme.spacing[paddingBottom] || 0}px;
  margin-top: ${({theme, marginTop}: any) => theme.spacing[marginTop] || 0}px;
  margin-bottom: ${({theme, marginBottom}: any) =>
    theme.spacing[marginBottom] || 0}px;
  margin-horizontal: ${({theme, marginHorizontal}: any) =>
    theme.spacing[marginHorizontal] || 0}px;
  flex-direction: row;
  align-items: ${({alignItems}: any) => alignItems || 'center'};
  justify-content: ${({justifyContent}: any) => justifyContent || `flex-start`};
  background-color: ${({background, theme}: any) =>
    theme.colors[background] || `none`};
  flex-shrink: 1;
`;

const Row: FC<RowProps> = ({children, touchable, onPress, ...restProps}) => {
  if (touchable) {
    return (
      <StyleTouchableDiv onPress={onPress} {...restProps}>
        {children}
      </StyleTouchableDiv>
    );
  } else {
    return <StyleDiv {...restProps}>{children}</StyleDiv>;
  }
};

export default Row;
