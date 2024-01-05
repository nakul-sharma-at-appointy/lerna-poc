import { Theme, useMediaQuery } from "@mui/material";
import { Breakpoint } from "@mui/material/styles";
import { useTheme } from "@mui/styles";

export default function isMobileView(key: Breakpoint | number = "xs") {
  const { breakpoints } = useTheme<Theme>();
  return useMediaQuery(breakpoints.down(key));
}
