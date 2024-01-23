import Toast from './components/toast/Toast'
import './App.css'

const App = () => {
   const text1 = {
      status: 'error',
      message: 'Hello from error',
   }
   const text2 = {
      status: 'success',
      message: 'Hello from error',
   }
   return (
      <div>
         health-check-js11
         <Toast options={text1} />
         <Toast options={text2} />
      </div>
   )
}

export default App
