"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Toast from "components/toast/toast";

type Props = {
  user: {
    id: number;
    name: string;
    email: string;
    followers: number;
    isActive: boolean;
  };
  index: number;
};

const DeleteModal = ({ user, index }: Props) => {
  const [toastState, setToastState] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const router = useRouter();

  const handleDeleteButton = () => {
    axios
      .delete("http://localhost:3000/api/users", {
        data: {
          id: user.id,
        },
      })
      .then(() => {
        setToastState("success");
        setToastMessage("User has been successfully deleted!");

        router.refresh();
      })
      .catch((error) => {
        setToastState("error");
        setToastMessage(JSON.stringify(error, null, 2));
      })
      .finally(() => {
        setTimeout(() => {
          setToastState("");
          setToastMessage("");
        }, 1500);
      });
  };

  return (
    <>
      {toastState && (
        <Toast toastState={toastState} toastMessage={toastMessage} />
      )}

      <input
        id={`modal-delete-${index}`}
        className="modal-toggle"
        type="checkbox"
      />
      <label className="modal cursor-pointer" htmlFor={`modal-delete-${index}`}>
        <label className="modal-box flex flex-col gap-2 relative">
          <h3 className="font-bold text-2xl text-center">
            Are you sure that you want to delete <u>{user.name}</u>?
          </h3>
          <div className="flex flex-row-reverse gap-4 pt-8">
            <label
              className="btn btn-error"
              htmlFor={`modal-delete-${index}`}
              onClick={handleDeleteButton}
            >
              Delete
            </label>
            <label
              className="btn btn-outline"
              htmlFor={`modal-delete-${index}`}
            >
              Cancel
            </label>
          </div>
        </label>
      </label>
    </>
  );
};

export default DeleteModal;
