import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function TopBanner() {
  const [version, setVersion] = useState('2'); // Default to version 2

  useEffect(() => {
    async function fetchVersion() {
      try {
        const response = await fetch('https://junipa.com.au/updates');
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const versionElement = doc.querySelector('.versionBlock_version');
        if (versionElement) {
          setVersion(versionElement.textContent.trim());
        } else {
          console.error('Version element not found, defaulting to version 2');
        }
      } catch (error) {
        console.error('Error fetching version:', error);
      }
    }

    fetchVersion();
  }, []);

  return (
    <div className={styles.banner}>
      Junipa now is on version {version}. <a href="https://junipa.com.au/updates">Read what has changed</a>
    </div>
  );
}