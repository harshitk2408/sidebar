import './Theme.css'
import themeContext from '../../Context/themeContext'
import { useEffect, useState , useContext, useRef} from 'react'
export default function Theme() {
    const elemref=useRef(null)
    const th = useContext(themeContext)
    const [theme, setTheme] = useState(th)
    useEffect(() => {
      const elem = elemref.current;
      elem.textContent=(theme==="Dark"?"Light":"Dark")
        if (elem) {
          if (theme === "Dark") {
            elem.classList.add("btn-dark");
            document.body.style.backgroundColor="grey"
          } else {
            elem.classList.remove("btn-dark");
            document.body.style.backgroundColor="white"
          }
        }
      }, [theme]);
    const changeTheme = () => {
        const newTheme = theme === "Dark" ? "Light" : "Dark";
        setTheme(newTheme);
      };
      
    return (
        <>
            <themeContext.Provider value={{theme,setTheme}}>
                <div className='btn' ref={elemref} onClick={changeTheme}>
                    {theme==="Dark"?"Light":"Dark"}
                </div>
            </themeContext.Provider>
        </>
    )
}