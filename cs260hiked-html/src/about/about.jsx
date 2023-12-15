import React, { useEffect, useState } from 'react';

export function About() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.value);
      });
  }, []);

  return (
    <div>
      <h2>About Hiked</h2>
      <img src="https://www.earthdiver.com/cdn-cgi/image/width=2000,quality=75,format=auto/https://assets.earthdiver.com/media/media-2727684.jp?w=5246&h=2193&tick=1667491652923" alt="Hiked" />

      <p className="paragraph"> Hiked is designed so that you can track the total hikes you finish along with their statistics. The application takes these statistics and imports them into an internal leaderboard system to encourage healthy competition among friends. 
          In addition, Hiked shows several popular trails so that you can plan your trips according to what others have said about specific trails. If you don't know where to begin, Hiked displays the most popular trail on the front page so that you can take inspiration from others and have an adventure.</p>

      <div className="divider"></div>

      <p style={{marginLeft: "40px"}}>Facts About Chuck Norris (warning, not all jokes are family-friendly because they are pulled from a large independent assortment):</p>
      <div className="quote">{quote}</div>
    </div>
  );
}
