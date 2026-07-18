/**
 * Inline script that sets the theme class before paint to avoid a flash.
 * Reads a saved preference or falls back to the system setting.
 */
export function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m)){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
