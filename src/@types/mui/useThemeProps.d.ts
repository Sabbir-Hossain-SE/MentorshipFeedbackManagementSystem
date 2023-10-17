/* eslint-disable @typescript-eslint/ban-types */
import { CustomTheme, Components } from "@mui/material";

export interface ThemeWithProps {
    components?: Components<Omit<CustomTheme, "components">>;
}

export type ThemedProps<Theme, Name extends keyof any> = Theme extends {
    components: Record<Name, { defaultProps: infer Props }>;
}
    ? Props
    : {};

export default function useThemeProps<
    CustomTheme extends ThemeWithProps,
    Props,
    Name extends keyof any
>(params: { props: Props; name: Name }): Props & ThemedProps<CustomTheme, Name>;
