import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { generateCSPHeader, generateCSPNonce, SECURITY_HEADERS } from '@/lib/security';

interface SecurityContextType {
  nonce: string;
  cspHeader: string;
}

const SecurityContext = createContext<SecurityContextType | null>(null);

export const useSecurity = () => {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurity must be used within a SecurityProvider');
  }
  return context;
};

interface SecurityProviderProps {
  children: React.ReactNode;
}

export const SecurityProvider: React.FC<SecurityProviderProps> = ({ children }) => {
  const nonce = useMemo(() => generateCSPNonce(), []);
  const cspHeader = useMemo(() => generateCSPHeader(nonce), [nonce]);

  useEffect(() => {
    // Set security headers via meta tags (for client-side)
    const setSecurityMeta = () => {
      // Set CSP meta tag (excluding frame-ancestors as it only works in HTTP headers)
      let cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
      if (!cspMeta) {
        cspMeta = document.createElement('meta');
        cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
        document.head.appendChild(cspMeta);
      }
      // Remove frame-ancestors from CSP for meta tag (it only works in HTTP headers)
      const cspForMeta = cspHeader.replace(/frame-ancestors[^;]*;?\s*/gi, '').trim();
      cspMeta.setAttribute('content', cspForMeta);

      // Set other security meta tags
      const securityMetas = [
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index, follow, noarchive' },
      ];

      securityMetas.forEach(({ name, content }) => {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('name', name);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      });
    };

    setSecurityMeta();
  }, [cspHeader]);

  const value = useMemo(() => ({
    nonce,
    cspHeader,
  }), [nonce, cspHeader]);

  return (
    <SecurityContext.Provider value={value}>
      {children}
    </SecurityContext.Provider>
  );
};

// Security-aware script component
interface SecureScriptProps extends React.ScriptHTMLAttributes<HTMLScriptElement> {
  children?: string;
}

export const SecureScript: React.FC<SecureScriptProps> = ({ children, ...props }) => {
  const { nonce } = useSecurity();
  
  return (
    <script {...props} nonce={nonce}>
      {children}
    </script>
  );
};

// Security-aware style component
interface SecureStyleProps extends React.StyleHTMLAttributes<HTMLStyleElement> {
  children?: string;
}

export const SecureStyle: React.FC<SecureStyleProps> = ({ children, ...props }) => {
  const { nonce } = useSecurity();
  
  return (
    <style {...props} nonce={nonce}>
      {children}
    </style>
  );
};
