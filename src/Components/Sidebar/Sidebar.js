import { IconContext } from 'react-icons/lib'
import './Sidebar.css'
import themeContext from '../../Context/themeContext'
import { useEffect, useState , useContext, useRef} from 'react'
import { BsFillChatDotsFill } from 'react-icons/bs'
export default function Sidebar(){
    const elemref = useRef(null);
    const { theme, setTheme } = useState(useContext(themeContext)) // Access the theme and setTheme from the theme context
  
    useEffect(() => {
      const elem = elemref.current;
      elem.textContent = theme === "Dark" ? "Light" : "Dark";
      if (elem) {
        if (theme === "Dark") {
          elem.classList.add("btn-dark");
        } else {
          elem.classList.remove("btn-dark");
        }
      }
    }, [theme]);
  
    const changeTheme = () => {
      const newTheme = theme === "Dark" ? "Light" : "Dark";
      setTheme(newTheme);
    };
  
    return (
      <>
        <div className="sidebar">
          <div className="chat-btn" ref={elemref} onClick={changeTheme}>
            {theme === "Dark" ? "Light" : "Dark"}
          </div>
          <IconContext.Provider value={{ className: "icon" }}>
            <BsFillChatDotsFill />
          </IconContext.Provider>
        </div>
      </>
    );
  };
  