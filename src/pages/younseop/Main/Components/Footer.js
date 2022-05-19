import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [footers, setFooters] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/younseop/footer.json')
      .then(response => response.json())
      .then(result => setFooters(result));
  }, []);

  return (
    <footer>
      <p>
        {footers.map(info => {
          return (
            <a href="/" key={info.id}>
              {info.content}
            </a>
          );
        })}
      </p>
      <span>ⓒ 2022 WESTAGRAM</span>
    </footer>
  );
};

export default Footer;
