"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Toast from "components/toast/toast";

type User = {
  name: string;
  email: string;
  size: string;
};

const AddModal = () => {
  const [toastState, setToastState] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [newUser, setNewUser] = useState<User>({
    name: "",
    email: "",
    size: "small",
  });

  const router = useRouter();

  const handleSaveButton = () => {
    axios
      .post("http://localhost:3000/api/users", newUser)
      .then(() => {
        setToastState("success");
        setToastMessage("User has been successfully added!");

        router.refresh();
      })
      .catch((error) => {
        setToastState("error");
        setToastMessage(JSON.stringify(error, null, 2));
      });
  };

  const handleClear = () => {
    setNewUser({
      name: "",
      email: "",
      size: "",
    });
  };

  return (
    <>
      {toastState && (
        <Toast toastState={toastState} toastMessage={toastMessage} />
      )}

      <input id="modal-add" className="modal-toggle" type="checkbox" />
      <label className="modal cursor-pointer" htmlFor="modal-add">
        <label className="modal-box flex flex-col gap-2 relative">
          <div className="flex flex-col gap-2">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                placeholder="Type the users's name in here..."
                value={newUser.name}
                onChange={(e) => {
                  setNewUser((prevNewUser) => ({
                    ...prevNewUser,
                    name: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="email"
                placeholder="Type the users's email in here..."
                value={newUser.email}
                onChange={(e) => {
                  setNewUser((prevNewUser) => ({
                    ...prevNewUser,
                    email: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Pick the size of the card</span>
              </label>
              <select
                className="select select-bordered"
                value={newUser.size}
                onChange={(e) => {
                  setNewUser((prevNewUser) => ({
                    ...prevNewUser,
                    size: e.target.value,
                  }));
                }}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-4 pt-8">
            <label
              className="btn btn-success"
              htmlFor="modal-add"
              onClick={() => {
                handleSaveButton();
                handleClear();
              }}
            >
              Save
            </label>
            <label
              className="btn btn-outline"
              htmlFor="modal-add"
              onClick={handleClear}
            >
              Cancel
            </label>
          </div>
        </label>
      </label>
    </>
  );
};

export default AddModal;
