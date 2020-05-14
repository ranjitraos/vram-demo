const primary =  '#3366FF';
const success =  '#00D68F';
const info =  '#0095FF';
const warning =  '#FFAA00';
const danger =  '#FF3D71';

export const DARK_THEME = {
  name: 'dark',
  base: 'dark',
  variables: {
    primary,
    success,
    info,
    warning,
    danger,
    charts: {
      primary,
      success,
      info,
      warning,
      danger,
      bg: 'transparent',
      textColor: '#FFFFFF',
      axisLineColor: '#8F9BB3',
      splitLineColor: '#2E3A59',
      itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
      tooltipBackgroundColor: '#101426',
      areaOpacity: '0.7',
    },
    bubbleMap: {
      primary,
      success,
      info,
      warning,
      danger,
      titleColor: '#FFFFFF',
      areaColor: '#2E3A59',
      areaHoverColor: '#8F9BB3',
      areaBorderColor: '#1A2138',
    },
  },
};
