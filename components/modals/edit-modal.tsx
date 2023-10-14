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
    size: string;
  };
  index: number;
};

const EditModal = ({
  user: { id, name, email, followers, isActive, size },
  index,
}: Props) => {
  const [toastState, setToastState] = useState<string | null>("");
  const [toastMessage, setToastMessage] = useState<string | null>("");
  const [data, setData] = useState({
    id,
    name,
    email,
    followers,
    isActive,
    size,
  });

  const router = useRouter();

  const handleSave = () => {
    axios
      .put("http://localhost:3000/api/users/", data)
      .then(() => {
        setToastState("success");
        setToastMessage("User has been successfully updated!");

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

      <div style={{ display: "contents", margin: 0 }}>
        <input
          id={`modal-edit-${index}`}
          className="modal-toggle"
          type="checkbox"
        />
        <label htmlFor={`modal-edit-${index}`} className="modal cursor-pointer">
          <label className="modal-box flex flex-col gap-2 relative" htmlFor="">
            <h3 className="font-bold text-2xl text-center">{name}</h3>
            <div className="flex flex-col gap-2">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  value={data.name}
                  placeholder="Name"
                  type="text"
                  onChange={(e) => {
                    setData((prevData) => ({
                      ...prevData,
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
                  value={data.email}
                  placeholder="Email"
                  type="text"
                  onChange={(e) => {
                    setData((prevData) => ({
                      ...prevData,
                      email: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Followers</span>
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  value={data.followers}
                  placeholder="Followers"
                  type="number"
                  onChange={(e) => {
                    setData((prevData) => ({
                      ...prevData,
                      followers: parseInt(e.target.value),
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
                  value={data.size}
                  onChange={(e) => {
                    setData((prevData) => ({
                      ...prevData,
                      size: e.target.value,
                    }));
                  }}
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
              <div className="form-control flex flex-row">
                <span className="label-text">
                  <label className="swap cursor-pointer label flex flex-row-reverse gap-2">
                    <input
                      className="toggle toggle-success"
                      type="checkbox"
                      value={data.isActive ? "TRUE" : "FALSE"}
                      checked={data.isActive ? true : false}
                      onChange={() => {
                        setData((prevData) => ({
                          ...prevData,
                          isActive: !prevData.isActive,
                        }));
                      }}
                    />
                  </label>
                </span>
              </div>
            </div>
            <div className="flex flex-row-reverse gap-4 pt-8">
              <label
                className="btn btn-success"
                htmlFor={`modal-edit-${index}`}
                onClick={handleSave}
              >
                Save
              </label>
              <label
                className="btn btn-outline"
                htmlFor={`modal-edit-${index}`}
              >
                Cancel
              </label>
            </div>
          </label>
        </label>
      </div>
    </>
  );
};

export default EditModal;
