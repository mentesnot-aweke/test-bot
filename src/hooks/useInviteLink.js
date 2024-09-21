import { useState } from "react";

export const useInviteLink = () => {
  const [link, setLink] = useState("");

  const generateInviteLink = () => {
    // You can replace this logic with your actual invite link generation logic
    const newLink = `https://app.com/invite/${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    setLink(newLink);
  };

  return [link, generateInviteLink];
};
