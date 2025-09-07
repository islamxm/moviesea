import { Dimensions } from "../types/ui";

export const breakpoints:Record<Dimensions, string> = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
}