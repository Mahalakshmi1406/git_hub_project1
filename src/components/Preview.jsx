import React from 'react';

function Preview({
  avatarUrl,
  name,
  login,
  public_repos,
  followers,
  following,
  isLoading,
  date,
  bio
}) {
  return (
    <div className='justify-center p-5 text-white rounded bg-dark-grey-md'>
      {!isLoading ? (
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-10'>
            <div>
              <img className='rounded-full w-28' src={avatarUrl} alt={`${name}'s avatar`} />
            </div>
            <div>
              <h1>{name}</h1>
              <h3 className='text-dark-blue'>{login}</h3>
              <p>Joined at {date}</p> {/* Added space before {date} */}
            </div>
          </div>

          <div>
            <p className='max-w-xs'>
              {bio}
            </p>
          </div>

          <div className='flex p-4 rounded-md bg-dark-bg justify-evenly'>
            <div>
              <h3>Repos</h3>
              <span>{public_repos}</span>
            </div>
            <div>
              <h3>Followers</h3>
              <span>{followers}</span>
            </div>
            <div>
              <h3>Following</h3>
              <span>{following}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className='w-4 h-4 border-t-4 rounded border-dark-blue animate-spin'></div>
      )}
    </div>
  );
}

export default Preview;
