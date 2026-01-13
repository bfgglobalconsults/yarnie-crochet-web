import Script from 'next/script'
import React from 'react'


export const InitTheme: React.FC = () => {
  return (
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script
      dangerouslySetInnerHTML={{
        __html: `
  (function () {
    // Force light mode only - ignore system preferences
    document.documentElement.setAttribute('data-theme', 'light')
  })();
  `,
      }}
      id="theme-script"
      strategy="beforeInteractive"
    />
  )
}
