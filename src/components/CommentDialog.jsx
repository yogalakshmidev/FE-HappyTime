import {
  Dialog,
  DialogBody,
  Button,
  DialogContent,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CommentDialog = ({ openComment, setOpenComment }) => {
  class Toggle extends React.Component {
    state = {
      show: true,
    };

    toggle = () =>
      this.setState((currentState) => ({ show: !currentState.show }));
  }

  const [show, toggleShow] = React.useState(true);

  const [text, setText] = useState("");
  const changeEventHandler = (e) => {
    const inputText = e.target.value;
    if (inputText.trim()) {
      setText(inputText);
    } else {
      setText("");
    }
  };

  const sendMessageHandler= async()=>{
    alert(text);
  }
  return (
    <Dialog className=" -right-1/4 -bottom-1/2 w-2/4" open={openComment}>
      <DialogBody
        className="max-w-5xl p-0 flex flex-col"
        onDoubleClick={() => setOpenComment(false)}
      >
        <div className="flex flex-1">
          <div className="w-1/2">
            <img
              className="w-full h-full object-cover rounded-l-lg"
              src="https://images.unsplash.com/photo-1739989934228-e74afa40eca2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D"
              alt="post_img"
            />
          </div>

          <div className="w-1/2 flex flex-col justify-between">
            <div className="flex items-center justify-between p-2 border-b-2 border-black">
              <div className="flex gap-3 items-center ">
                <Link>
                  <figure className=" text-center justify-center mx-2 max-w-lg">
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src=""
                      alt=""
                    />
                    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                      CN
                    </figcaption>
                  </figure>
                </Link>
                <Link className="font-semibold text-xs">Username</Link>
              </div>

              {/* method using tailwindcss without dialog box */}
              <div class="relative inline-block text-left">
                <div className="flex flex-col items-center text-sm text-center">
                  <button
                    type="button"
                    class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => toggleShow(!show)}
                  >
                    {show ? (
                      "Options"
                    ) : (
                      <div>
                        <Link
                          onClick={"Follow"}
                          to=""
                          className="block px-4 py-2 text-[#ED4956] font-bold cursor-pointer "
                          role="menuitem"
                          tabindex="-1"
                          id="menu0"
                        >
                          UnFollow
                        </Link>
                        <Link
                          to=""
                          className="block px-4 py-2 cursor-pointer"
                          role="menuitem"
                          tabindex="-1"
                          id="menu1"
                        >
                          Add to Favourites
                        </Link>
                      </div>
                    )}
                  </button>
                </div>
                {/* Used to show options like unfollow and add to favourite in dropdown */}
                {/* {show && (
                  <div
                    className="absolute right-0 z-10  w-18 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                  >
                    <div
                      className="py-1"
                      role="none"
                      hidden="false"
                      id="divOptions"
                    >
                      <Link
                        to=""
                        className="block px-4 py-2 text-[#ED4956] font-bold cursor-pointer "
                        role="menuitem"
                        tabindex="-1"
                        id="menu0"
                      >
                        UnFollow
                      </Link>
                      <Link
                        to=""
                        className="block px-4 py-2 cursor-pointer"
                        role="menuitem"
                        tabindex="-1"
                        id="menu1"
                      >
                        Add to Favourites
                      </Link>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
            <div className="flex-1 overflow-y-auto max-h-96 p-4">
              Comments are comming
            </div>
            <div className="p-4">
              <div className="flex items-center gap-1.5">
                <input
                  type="text"
                  value={text}
                  onChange={changeEventHandler}
                  placeholder="Add a comment...."
                  className="w-full outline-none border border-gray-300 p-2 rounded"
                />
                <Button disabled={!text.trim()}
                 onClick={sendMessageHandler}
                variant="Outline" className="text-gray-600">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default CommentDialog;
