import { ButtonType, ButtonSize } from "antd/lib/button";

declare interface IPropsInterface {
    href?: string,
    htmlType?: string,
    loading?: boolean,
    disabled?: boolean,
    target?: string,
    text?: string,
    addonLeft?: any,
    addonRight?: any,
    onClick?: (event?: React.MouseEvent<any>) => void,
}
declare class DefaultProps implements IPropsInterface {
    type: ButtonType;
    htmlType: ButtonSize;
    size: string;
    disabled: boolean;
    onClick?: (event?: React.MouseEvent<any>) => void
}

import HButton from './src/index';

export type HButton = typeof HButton;

export default HButton;