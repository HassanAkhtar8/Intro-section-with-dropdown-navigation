import { useState } from "react";
import arrowUp from './images/icon-arrow-up.svg';
import arrowDown from './images/icon-arrow-down.svg';
import todo from './images/icon-todo.svg';
import calender from './images/icon-calendar.svg';
import reminder from './images/icon-reminders.svg';
import planner from './images/icon-planning.svg';
function Aside({opened}){
    const[isListOpen, setIsListOpen] = useState({
        upper:false,
        lower:false
    });
        function handleList(event){
            const target = event.target;
            if(target.innerText === 'Features'){
                setIsListOpen((prevState)=>({
                    ...prevState,
                    upper:!prevState.upper
                    }));
            }
            else if(target.innerText === 'Company'){
                setIsListOpen((prevState)=>({
                    ...prevState,
                    lower:!prevState.lower
                    }));
            }



        }
    return(
        <nav className={`navbar ${opened?"navbar-in":"navbar-out"}`}>
           

            <div className="list-container">
            <div>
                <div className="arrow" onClick={handleList}>
                <h2>Features</h2>
                <img className="arrow-icon" src={isListOpen.upper?arrowUp:arrowDown} alt="arrow" />
                </div>
            

            {isListOpen.upper?<ul className="feature-container">
                    <li>
                        <div className="features">
                            <img src={todo} alt="oo"/>
                        <p>Todo List</p>
                        </div>
                        
                    </li>
                    <li>

                        <div className="features">
                            <img src={calender} alt="p"/>
                        <p>Calender</p>
                        </div>

                    </li>
                    <li>
                        <div className="features">
                        <img src={reminder} alt="u"/>
                        <p>Reminder</p>
                        </div>
                    
                    </li>
                    <li>
                        <div className="features">
                        <img src={planner} alt="i"/>
                        <p>Planning</p>
                        </div>
                    
                    </li>
                </ul>:null
                }

            </div>

            <div>
                <div className="arrow" onClick={handleList}>
                <h2>Company</h2>
                <img className="arrow-icon" src={isListOpen.lower?arrowUp:arrowDown} alt="arrow" />
                </div>
            

            {isListOpen.lower?<ul className="company">
                    <li>History</li>
                    <li>Our Team</li>
                    <li>Blog</li>
                </ul>:null
                }
                

            </div>
                <div className="flex">
                <h2>Careers</h2>
            <h2>About</h2>
                </div>
            

            </div>
            <div className="register">
                <p>Login</p>
                <button>Register</button>
            </div>
            

        </nav>
    );
}
export default Aside;