import {  } from '../services/postService';
// import { useState } from 'react';
// import { Link } from 'react-router-dom'; 

import '../index.css';

export default function CreatePost(props) {
    // const [name, setName] = useState("");
//     return (
//     <main className='Page'>
//       <div className="App">
//         <form>
//           <input
//             type="text"
//             value={name}
//             onChange={(event) => setName(event.target.value)}
//           />
//         </form>
//       </div>
//     </main>
//     );
//   };
    return (
        <main className='Page'>
            <div>
                        <h2>
                            <label>
                            What would you like to post?
                            </label>
                        </h2>
               <form>
                    <form>
                            <input                             
                            type="text" 
                            name="post"
                            rows="10" cols="30"
                            autoComplete="off"
                            placeholder="Tell everybody how your day was...">
                            </input>
                        <button type="submit">
                            Post Message
                        </button>
                    </form>
                </form>
            </div>
        </main>
    )
}