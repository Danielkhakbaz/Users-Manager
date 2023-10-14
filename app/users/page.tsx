import { Fragment } from "react";
import DeleteModal from "components/modals/delete-modal";
import EditModal from "components/modals/edit-modal";
import AddModal from "components/modals/add-modal";
import { MdDelete } from "react-icons/md";

type Props = {
  id: number;
  name: string;
  email: string;
  followers: number;
  isActive: boolean;
  size: string;
};

async function callAPI() {
  const data = await fetch("http://localhost:3000/api/users", {
    cache: "no-cache",
  });
  const res: Props[] = await data.json();

  return res;
}

const UsersPage = async () => {
  const res = await callAPI();

  return (
    <>
      <label htmlFor="modal-add" className="btn btn-success my-4 mx-8">
        Add User
      </label>
      <div
        className="grid gap-3 py-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill, 300px)",
          justifyContent: "center",
        }}
      >
        {res?.length ? (
          res?.map((user, index) => (
            <Fragment key={user.id}>
              <label
                className={`min-h-fit ${
                  user.isActive
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-red-500 hover:bg-red-600"
                } text-black flex flex-col rounded-xl cursor-pointer ease-out duration-150 z-10 px-2 py-1.5`}
                htmlFor={`modal-edit-${index}`}
                style={{
                  gridRowEnd:
                    user.size === "small"
                      ? "span 10"
                      : user.size === "medium"
                      ? "span 20"
                      : "span 30",
                }}
              >
                <div className="grow">
                  <div className="text-2xl flex flex-row justify-between items-center">
                    <p className="text-white">{user.name}</p>
                  </div>
                  <p className="text-sm text-white py-2">
                    <b>E-mail:</b> {user.email}
                  </p>
                  <p className="text-sm text-white py-2">
                    <b>Followers:</b> {user.followers}
                  </p>
                </div>
                <div className="flex flex-row-reverse justify-between items-center gap-3">
                  <label
                    className="btn btn-sm btn-error"
                    htmlFor={`modal-delete-${index}`}
                  >
                    <MdDelete className="text-xl text-white" />
                  </label>
                  <div className={`badge`}>
                    <b>{user.isActive ? "Active" : "not-Active"}</b>
                  </div>
                </div>
              </label>
              <DeleteModal user={user} index={index} />
              <EditModal user={user} index={index} />
            </Fragment>
          ))
        ) : (
          <p className="w-screen text-2xl font-bold">
            There is no data in the database.
          </p>
        )}
      </div>
      <AddModal />
    </>
  );
};

export default UsersPage;
