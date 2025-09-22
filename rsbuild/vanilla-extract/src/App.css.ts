import { style } from '@vanilla-extract/css';
import img from './rsbuild-logo.svg';

export const contentStyle = style({
  display: 'flex',
  minHeight: '100vh',
  lineHeight: 1.1,
  textAlign: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundImage: `url(${img})`,
});

export const headingStyle = style({
  fontSize: '3.6rem',
  fontWeight: 700,
});

export const paragraphStyle = style({
  fontSize: '1.2rem',
  fontWeight: 400,
  opacity: 0.5,
});
