import { useState } from 'react';
export function Footer() {
  const [mode, setMode] = useState('auto');
  return (
    <div>
      <footer id="footer" className="relative z-50 dark:bg-gray-50">
        <div className="py-5 flex flex-col justify-center items-center">
          <p className="text-xs lg:text-sm leading-none text-gray-900">
            2021 Lyne. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
