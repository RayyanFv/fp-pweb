import { useState, useEffect } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { getFirestore, onSnapshot, collection, addDoc, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { auth, app } from '../../../firebase';
import Sidebar from '../../components/Sidebar';

const db = getFirestore(app);

function App() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);
  console.log(messages);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const sendMessage = async () => {
    if (newMessage.trim() === '') return;
    setLoading(true);
    await addDoc(collection(db, 'messages'), {
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName,
      text: newMessage,
      timestamp: serverTimestamp(),
    }).then(() => {
      setLoading(false)
    });
    setNewMessage('');
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="page-wrap" className="flex page-wrap w-auto h-full">
      <Sidebar />
        <div className="flex flex-col w-4/5 h-full mx-auto gap-3 py-10">
          <div className="font-bold mx-auto">Chat</div>
          <div className="flex flex-col gap-2">
            {messages.slice(-20).map((msg, index) => (
              <div key={msg.id} className={`flex flex-row mx-auto w-1/2 gap-2 ${msg.data.uid === user?.uid ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-full w-16 h-16 overflow-hidden ${msg.data.uid !== user?.uid ? 'order-first' : 'order-last'}`}>
                  <img src={msg.data.photoURL} className="h-full w-full object-cover" alt="Profile" />
                </div>
                <div className={`relative text-wrap truncate flex flex-row justify-between border rounded-md w-full py-2 px-2 ${msg.data.uid === user?.uid ? 'bg-gray-700 text-white' : 'bg-gray-900'}`}>
                  <div>
                    <div className="text-sm text-white font-bold mb-1">{msg.data.displayName}</div>
                    {loading && index === Math.min(19, messages.length - 1) ? (
                      <div className="flex flex-row gap-2">
                        <div className="animate-pulse w-4 h-4 bg-white rounded-full" />
                        <div className="animate-pulse w-4 h-4 bg-white rounded-full" />
                        <div className="animate-pulse w-4 h-4 bg-white rounded-full" />
                      </div>
                    ) : (
                      <div className='pr-16'>
                        {msg.data.text}
                      </div>
                    )}
                  </div>
                  <div className='absolute bottom-0 right-0 py-2 px-2'>
                    {msg.data.timestamp && (
                      <div className="text-xs text-gray-400">{new Date(msg.data.timestamp?.toDate()).toLocaleTimeString()}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Message Input */}
          <div className="flex flex-row mx-auto w-1/2 gap-2">
            <div className="flex flex-col my-auto w-full">
              <input
                className="border border-white py-3 px-4 w-full rounded-xl"
                placeholder="Enter Your Message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                name="send"
                type="text"
                required
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                disabled={loading || !user}
              />
            </div>
            <button
              className="flex bg-[#1C1C1C] border flex-col h-12 my-auto w-1/8 rounded-xl drop-shadow-xl px-7 ml-auto"
              onClick={sendMessage}
              disabled={loading || !user}
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 mx-auto my-auto text-white" viewBox="0 0 24 24">
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 0 1 8-8v2a6 6 0 0 0-6 6z"
                  />
                </svg>
              ) : (
                <div className="mx-auto my-auto font-semibold text-white">Send</div>
              )}
            </button>
          </div>
        </div>
      {/* </Sidebar> */}
    </div>
  );
}

export default App;
