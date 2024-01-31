import actionCable from 'actioncable';
import { useEffect, useState } from 'react';
import { ChatDashboard } from './chatUX/ChatDashboard';
import { useRecoilState } from 'recoil';
import { myListOfChats } from '../states/chatMainStates';
//"https://6kwgwvlg-3000.use2.devtunnels.ms/"
export const MainDashboard = () => {
   const cableApp = actionCable.createConsumer('ws://localhost:3000/cable');
   // Set up the connection with the backend, use your backend's host here

   const [channel, setChannel] = useState(null);
   // Create a state to store the Action Cable channel


   const [chats, setChats] = useRecoilState(myListOfChats)


   useEffect(() => {
      if (channel !== null) channel.unsubscribe();
      // Destroy possible duplicate connections

      setChannel(
         cableApp.subscriptions.create(
            {
               channel: 'MessagesChannel',
               chat_room_id: 2,
               // Channel that will be used for the connection
            },
            {
               received: (message) => {
                  // Function that will be executed when a message is received
                  console.log(message);
                  // console.log(chats);
                  //  const newArray = [...chats, message];
                  setChats((prevChats) => [...prevChats, message])
               },
            },
         ),
      );
   }, []);

   return (
      <>
         <ChatDashboard />
      </>
   )
};
