import React from 'react';

function NavBar() {
    const links=[
        {
        id:1,
        link:'Home'    
        },
        {
            id:1,
            link:'About'    
            },
            {
                id:1,
                link:'Skill'    
                },
                {
                    id:1,
                    link:'Contact'    
                    },
    ]
  return (

    <div className="flex justify-between items-center w-full h-16 px-4 bg-black text-white fixed top-0">
      {/* Logo */}
      <div>
        <h1 className="text-4xl font-bold font-signature ">Dinesh</h1>
      </div>

      {/* Navigation Links */}
      <div>
        <ul className="hiden md:flex">
            {
                links.map(({id,link})=>( <li key={id}className="px-4 hover:text-gray-500 capitalize font-medium  duration-200 cursor-pointer">{link}</li>))
            }
         
         
        </ul>

      </div>
    </div>
  );
}

export default NavBar;
