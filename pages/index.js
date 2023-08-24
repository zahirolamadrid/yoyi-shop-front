import { useState } from 'react';
import Link from 'next/link';

function Header({ title }) {
  return <h1 className="title">
    {
      title ? title : <a href="https://nextjs.org">Next.js!</a>
    }
  </h1>;
}

export default function HomePage() {
  const names = ['Raúl Garces', 'Luis Miguel', 'Hector Fernandez', 'Zahiro Lamadrid'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <Header />
      <h1 className="title">
        Read <Link href="/posts/first-post">this page!</Link>
      </h1>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
