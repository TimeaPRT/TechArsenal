declare module 'next' {
  export * from 'next/types';
  export { default } from 'next/types';
}

declare module 'next/font/google' {
  export function Inter(options: {
    subsets: Array<'latin' | 'latin-ext'>;
    display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
    variable?: string;
  }): any;
}