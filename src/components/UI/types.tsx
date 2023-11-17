export interface HeaderProps {
  leftOptions?: IconOptions;
  rightOptions?: IconOptions;
  style?: ViewStyle | ViewStyle[] | undefined;
  presentation?: 'close' | 'back';
  insetTop?: boolean;
  textOptions?: {
    shown?: boolean | undefined;
    title?: string | undefined;
    style?: TextStyle | TextStyle[] | undefined;
    component?: React.ReactNode;
  };
}
