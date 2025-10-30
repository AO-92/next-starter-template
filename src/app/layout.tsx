// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'A0-Builds Holdings',
  description: 'Building secure systems. Creating opportunity.',
  metadataBase: new URL('https://a0builds.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Inter, system-ui, Arial, sans-serif', color: '#e6e6e6', background: '#0b0c10' }}>
        {children}
      </body>
    </html>
  );
}
