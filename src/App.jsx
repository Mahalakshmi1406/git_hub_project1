import { useState } from 'react';
import Search from "./components/Search";
import Preview from './components/Preview';
import './App.css';

function App() {
  const [data, setData] = useState({
    avatar_url: '',
    followers: 0,
    following: 0,
    login: '',
    name: '',
    public_repos: 0,
    bio: '',
    created_at: ''
  });
  
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-5 bg-dark-bg">
      <div>
        <Search setIsLoading={setIsLoading} setData={setData} />
      </div>
      <div>
        <Preview
          avatarUrl={data.avatar_url}
          followers={data.followers}
          following={data.following}
          login={data.login}
          name={data.name}
          public_repos={data.public_repos}
          isLoading={isLoading} // Corrected from data.isLoading to isLoading
          bio={data.bio}
          date={data.created_at?.split("T")[0]} // Split the date only if it exists
        />
      </div>
    </div>
  );
}

export default App;
