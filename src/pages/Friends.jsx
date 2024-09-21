// pages/Friends.jsx
import React, { useState, useEffect } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { FaPaperclip } from "react-icons/fa";
import { RiShare2Fill } from "react-icons/ri";
import { FaRegCopy } from "react-icons/fa6";
import TaskBar from "../components/TaskBar";

const Friends = () => {
  console.log("This is the friends page");
  const [friends, setFriends] = useState(0);
  const [coin, setCoin] = useState(0);
  const [inviteLink, setInviteLink] = useState(""); // Invite link state
  const [copied, setCopied] = useState(false); // State to track copy status

  useEffect(() => {
    // Set the invite link (replace with your actual invite URL)
    setInviteLink("https://github.com/MentesnotAweke/telegram/tree/master");
  }, []);

  // Share Invite Link using the Web Share API
  const shareInviteLink = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Invite a Friend",
          text: "Join this awesome app!",
          url: inviteLink, // Use the invite link from the state
        })
        .then(() => console.log("Invite link shared successfully"))
        .catch((error) => console.error("Error sharing invite link:", error));
    } else {
      console.log("Web Share API not supported in this browser.");
    }
  };

  // Copy Invite Link to Clipboard
  const copyInviteLink = () => {
    navigator.clipboard
      .writeText(inviteLink) // Copies the invite link
      .then(() => {
        setCopied(true); // Show "Copied!" text
        setTimeout(() => {
          setCopied(false); // Reset after 2 seconds
        }, 2000);
      })
      .catch((error) => console.error("Failed to copy text:", error));
  };

  const updateFriendsAndCoins = () => {
    setFriends(friends + 1);
    setCoin(coin + 10);
  };

  return (
    <div className="bg-black w-full min-h-screen text-gray-200 p-4 md:p-8">
      <h1 className="text-2xl text-center font-bold mb-2 mt-14">
        Invite a Friend
      </h1>
      <p className="text-lg mb-6 text-center">
        The more friends you refer, the more you earn and get rewarded!
      </p>

      <div className="flex justify-around gap-4 mb-6">
        {/* Share Invite Link Button */}
        <button
          className="bg-gray-900 hover:bg-gray-800 text-yellow-500 font-bold px-3 py-2 rounded-md flex items-center"
          onClick={shareInviteLink}
        >
          <RiShare2Fill className="mr-2" /> Share Invite Link
        </button>

        {/* Copy Invite Link Button */}
        <button
          className="bg-gray-900 hover:bg-gray-800 text-yellow-500 px-3 py-2 rounded-md flex items-center"
          onClick={copyInviteLink}
        >
          <FaRegCopy className="mr-2" /> {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>

      <div className="flex sm:flex-row justify-around gap-4 mb-6">
        <div className="bg-gray-800 p-4 rounded-md text-center">
          <h2 className="text-xl font-semibold">{friends} Friends</h2>
          <p className="text-sm">More friends, better results!</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-md">
          <h2 className="text-xl font-semibold">{coin} Coins</h2>
          <p className="text-sm">Earn 10% of your friends' earnings</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <button className="text-gray-400 hover:text-white">Friends List</button>
        <button
          className="bg-gray-900 hover:bg-gray-800 font-bold px-6 py-2 rounded-md flex items-center"
          onClick={updateFriendsAndCoins}
        >
          Claim Rewards <GrFormNextLink className="ml-2 text-yellow-500" />
        </button>
      </div>

      <div>
        <p className="text-gray-400 text-sm text-center">
          You have invited {friends} friends. Refer your friends and family, get
          10% of their earnings & unlock more rewards!
        </p>
      </div>

      <TaskBar />
    </div>
  );
};

export default Friends;
