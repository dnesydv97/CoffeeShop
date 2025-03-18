import {FC, ReactNode} from 'react';
import styled from 'styled-components';
import {View, TouchableOpacity} from 'react-native';
import {BackgroundProps, AlignProps, SpacingProps} from '../types';
interface ColumnProps extends BackgroundProps, AlignProps, SpacingProps {
  children?: ReactNode;
  touchable?: boolean;
  style?: any;
  onPress?: () => void;
}
const StyleColumnView = styled(View)<any>`
  flex-direction: column;
  align-self: stretch;
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
  background-color: ${({theme, background}: any) =>
    theme.colors[background] || ''};
  align-items: ${({alignItems}: any) => alignItems || 'baseline'};
  justify-content: ${({justifyContent}: any) => justifyContent || 'flex-start'};
  flex-shrink: 1;
  width: 100%;
`;
const StyleColumnTouchable = styled(TouchableOpacity)<any>`
  flex-direction: column;
  align-self: stretch;
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
  background-color: ${({theme, background}: any) =>
    theme.colors[background] || 'white'};
  align-items: ${({alignItems}: any) => alignItems || 'baseline'};
  justify-content: ${({justifyContent}: any) => justifyContent || 'flex-start'};
  flex-shrink: 1;
  width: 100%;
`;
const Column: FC<ColumnProps> = ({
  children,
  touchable,
  onPress,
  ...restProps
}) => {
  if (touchable) {
    return (
      <StyleColumnTouchable onPress={onPress} {...restProps}>
        {children}
      </StyleColumnTouchable>
    );
  } else {
    return <StyleColumnView {...restProps}>{children}</StyleColumnView>;
  }
};

export default Column;
