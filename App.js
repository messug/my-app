import React, { useState } from "react";
import { Text, SafeAreaView } from "react-native";
import RoomScreen from "../my-app/src/component/screen/RoomScreen";
import CallScreen from "../my-app/src/component/screens/CallScreen";
import JoinScreen from "../my-app/src/component/screens/JoinScreen";

// Just to handle navigation
export default function App() {
  const screens = {
    ROOM: "JOIN_ROOM",
    CALL: "CALL",
    JOIN: "JOIN",
  };

  const [screen, setScreen] = useState(screens.ROOM);
  const [roomId, setRoomId] = useState("");

  let content;

  switch (screen) {
    case screens.ROOM:
      content = (
        <RoomScreen
          roomId={roomId}
          setRoomId={setRoomId}
          screens={screens}
          setScreen={setScreen}
        />
      );
      break;

    case screens.CALL:
      content = (
        <CallScreen roomId={roomId} screens={screens} setScreen={setScreen} />
      );
      break;

    case screens.JOIN:
      content = (
        <JoinScreen roomId={roomId} screens={screens} setScreen={setScreen} />
      );
      break;

    default:
      content = <Text>Wrong Screen</Text>;
  }

  return (
    <SafeAreaView className="flex-1 justify-center ">{content}</SafeAreaView>
  );
}