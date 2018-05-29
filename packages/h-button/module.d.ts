import { ButtonType, ButtonSize } from "antd/lib/button";

declare class DefaultProps {
    type: ButtonType;
    htmlType: ButtonSize;
    size: string;
    disabled: boolean;
    onClick?: (event?: React.MouseEvent<any>) => void
}
export default DefaultProps;
