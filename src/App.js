

import React,{useState} from 'react'
import Navbar from './component/Navbar';

 import TextForm from './component/TextForm';
import Alert  from './component/Alert';

function App() {
   const[alert,setAlert]=useState('light');
    const[mode,setMode]=useState('dark')
    
    const showAlert=(message,type)=>{
          setAlert({
            msg:message,
            type:type
          })
          setTimeout(()=>{
            setAlert(null);
          },3000)


    }

    //  const enabler=()=>{
    //        if(mode=='Enable light Mode'){
    //         setmodeenabler('Enable Dark Mode')
    //        }
    //        else{
    //         setmodeenabler('Enable Light Mode')
    //        }
    //  }
  const togglemode=()=>{
    if(mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor='#042743'
         showAlert("Dark mode has been enabled","success")
   
    }
    else{
        setMode('light')
        document.body.style.backgroundColor='white'
        showAlert("Light mode has been enabled","success")
   
    }
  }


return(  
<>
 <Navbar title="TextUtils" abouttext="About Us" mode={mode} togglemode={togglemode}  / >
 <Alert alert={alert}/>
<TextForm showAlert={showAlert} heading="Enter text to be analyzed" mode={mode}/>   
 {/* <About/> */}

</>
)
}

export default App;
