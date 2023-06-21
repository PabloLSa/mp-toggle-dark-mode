


const Home = () => {
  return (
   
    <div className='flex items-center justify-center w-screen h-screen bg-zinc-100 dark:bg-zinc-800'>
      <label className='flex cursor-pointer'>
      <input type="checkbox" className='sr-only peer' />
      <div 
      className="peer after:left-0
      peer-checked:after:left-10 
      w-24 
      h-12 
      rounded-full
      px-2
      bg-zinc-700 
      flex
      items-center
      after:contet-[''] 
      after:rounded-full
      after:h-10 
      after:w-10
      after:flex
      after:bg-zinc-800
      after:relative">
                

      </div>
      
      </label>
    </div>
  );
}

export default Home;
