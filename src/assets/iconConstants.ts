// Icon exports for easy management
export const ICONS = {
  LOGO: 'headerGroupLogo 1.svg',
  CURSOR: 'cursor.svg',
  CREATIVE_THINKING: 'Group 1410089203.svg',
  ARABIC_LANGUAGE: 'arabic-language 1.svg',
  ARABIC_COFFEE: 'arabic-coffee 1.svg',
  WEBSITE_LOGO: 'WebsiteLogo 1.svg',
  LANDING_LOGO: 'landingLogoDark 1.svg',
  HALAQH_LOGO: 'halaqhLg 1.svg',
  GROUP: 'Group 1410089203.svg',
  GROUP_1410089200: 'Group 1410089200.svg',
  GROUP_1410089371: 'Group 1410089371.svg',
  RECTANGLE_80: 'Rectangle 80.svg',
  RECTANGLE_81: 'Rectangle 81.svg',
  ABU_DHABI_LOGO: 'abu-dhabi 1.svg',
} as const;

export type IconName = typeof ICONS[keyof typeof ICONS];