import React, { useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { CiBookmark, CiHeart } from "react-icons/ci";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import CommentDialog from "./CommentDialog";

const Post = () => {
  const [open, setOpen] = React.useState(false);
  const [openComment, setOpenComment] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  const [text, setText] = useState("");

  const changeEventHandler = (e)=>{
    const inputText = e.target.value;
    if(inputText.trim()){
      setText(inputText);
    }else{
      setText("")
    }
  }

  return (
    <>
      <div className="my-8 w-full max-w-sm mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <figure className=" text-center justify-center mx-3 max-w-lg">
              <img className="h-auto max-w-full rounded-lg" src="" alt="" />
              <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                CN
              </figcaption>
            </figure>

            <h1 className="justify-start">Username</h1>
          </div>
          <div className="w-20 bg-white">
            <Button
              className="bg-red-500 w-fit m-3 p-1"
              onClick={handleOpen}
              variant="gradient"
            >
              Follow
            </Button>
            <Dialog open={open} handler={handleOpen}>
              {/* <DialogHeader className="bg-white text-xl"></DialogHeader> */}
              <DialogBody className="flex flex-col items-center text-sm text-center">
                <Button
                  className="cursor-pointer text-red-500 m-3 p-2 font-bold hover:text-black"
                  variant="gradient"
                  color="green"
                  onDoubleClick={handleOpen}
                >
                  {" "}
                  Unfollow{" "}
                </Button>
                <Button
                  className="cursor-pointer  text-red-500 m-3 p-2 hover:text-black"
                  variant="gradient"
                  color="green"
                  onClick={handleOpen}
                >
                  {" "}
                  Add to Favourites{" "}
                </Button>
                <Button
                  className="cursor-pointer  text-red-500 m-3 p-2 hover:text-black"
                  variant="gradient"
                  color="green"
                  onClick={handleOpen}
                >
                  Delete{" "}
                </Button>
              </DialogBody>
            </Dialog>
          </div>
        </div>
        <img
          className="rounded-sm my-2 w-full aspect-square object-cover"
          src="https://images.unsplash.com/photo-1739989934228-e74afa40eca2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D"
          alt="post_img"
        />

        <div className="flex items-center justify-between my-2">
          <div className="flex  justify-center gap-3">
            <CiHeart
              size={"22px"}
              className="cursor-pointer hover:text-gray-600"
            />
            <FiMessageCircle onClick={()=>setOpenComment(true)} className="cursor-pointer hover:text-gray-600" />
            <IoIosSend className="cursor-pointer hover:text-gray-600" />
          </div>
          <CiBookmark className="cursor-pointer hover:text-gray-600" />
        </div>
        <span className="font-medium block mb-2">1k likes</span>
        <p>
          <span className="font-medium mr-2">username</span>
          caption
        </p>
        <span className="cursor-pointer text-sm text-gray-400" onClick={()=>setOpenComment(true)}>View all 10 Comments</span>
        <CommentDialog openComment={openComment} setOpenComment={setOpenComment}/>
        <div className="flex items-center justify-between">
          <input
            type="text"
            value={text}
            onChange={changeEventHandler}
            placeholder="Add a comment"
            className="outline-none text-sm w-full"
          />
          {
            text && <span className="text-[#3BADF8]">Post </span>
          }
          
        </div>
      </div>
    </>
  );
};

export default Post;
