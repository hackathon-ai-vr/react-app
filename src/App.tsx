import { useCallback, useState } from 'react';
import socket from './ws';

function App() {
  const [messages, setMessages] = useState('')
  const [input, setInput] = useState('')

  socket.on("serverResponse",  (message: string) => {
    setInput('')
    setMessages(messages + message)
  });

  
  const onSubmit = useCallback((e) => {
    setMessages('')
    e?.preventDefault()
    socket.emit('clientMessage', input);
  }, [input])
  
  return (
    <div style={{height: '100vh', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
      <div>
        <div style={{whiteSpace: 'pre-line', textAlign: 'center'}}>
          {messages}
        </div>
        <form onSubmit={onSubmit} style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>
          <input value={input} type="text" onChange={({target: {value}}) => setInput(value)} />
          <button type='submit' onClick={onSubmit}>Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default App
