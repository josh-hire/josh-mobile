import React, { useState, useEffect } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HeadingText } from "./HeadingText";

const OTP_DURATION = 10;

const CountdownTimer = ({
  onExpired,
}: {
  onExpired: () => void;
}) => {
  const [remainingTime, setRemainingTime] = useState<number>(OTP_DURATION);

  useEffect(() => {
    const startCountdown = async () => {
      try {
        const currentTime = Math.floor(Date.now() / 1000);
        let startTime = await AsyncStorage.getItem("otpStartTime");

        if (!startTime) {
          await AsyncStorage.setItem("otpStartTime", currentTime.toString());
          startTime = currentTime.toString();
        }

        const elapsedTime = currentTime - parseInt(startTime, 10);

        if (elapsedTime >= OTP_DURATION) {
          clearInterval(interval)
          setRemainingTime(0);
          onExpired();
          await AsyncStorage.removeItem("otpStartTime");
        } else {
          setRemainingTime(OTP_DURATION - elapsedTime);
        }
      } catch (error) {
        console.error("Error during countdown:", error);
      }
    };

    startCountdown();

    const interval = setInterval(() => {
      startCountdown();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <View>
      <HeadingText type="h5" fontWeight="bold">{formatTime(remainingTime)}</HeadingText>
    </View>
  );
};

export default CountdownTimer;
