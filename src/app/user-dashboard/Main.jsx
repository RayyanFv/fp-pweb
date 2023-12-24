import { useState, useEffect } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { getFirestore, onSnapshot, collection, addDoc, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { auth, app } from '../../../firebase';

const db = getFirestore(app);

function App() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

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
    await addDoc(collection(db, 'messages'), {
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName,
      text: newMessage,
      timestamp: serverTimestamp(),
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
    <div className="flex w-auto h-full">
      <div className="flex w-1/5 h-full border-r bg-navbar"></div>
      <div className="flex flex-col w-4/5 h-full mx-auto gap-3 py-10">
        <div className="font-bold mx-auto">Chat</div>

        <div className="flex flex-col gap-2">
  {messages.map((msg) => (
    <div key={msg.id} className={`flex flex-row mx-auto w-1/2 gap-2 ${msg.data.uid === user?.uid ? 'justify-end' : 'justify-start'}`}>
      <div className={`rounded-full w-16 h-16 overflow-hidden ${msg.data.uid !== user?.uid ? 'order-first' : 'order-last'}`}>
        <img src={msg.data.photoURL} className="h-full w-full object-cover" alt="Profile" />
      </div>
      <div className={`border rounded-md w-full py-2 px-2 ${msg.data.uid === user?.uid ? 'bg-gray-700 text-white' : 'bg-gray-900'}`}>
        <div className="text-sm text-white font-bold mb-1">{msg.data.displayName}</div>
        {msg.data.text}
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
            />
          </div>
          <button
            className="flex bg-[#1C1C1C] border flex-col h-12 my-auto w-1/8 rounded-xl drop-shadow-xl px-7 ml-auto"
            onClick={sendMessage}
          >
            <div className="mx-auto my-auto font-semibold text-white">Send</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
