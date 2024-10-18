import { useSelector } from "react-redux";

function Username() {
  //we pass in use selector call back function name selector function contain on every thing in store
  //state are paramter//// user==>are key in store contain userReducer//// and username are property==>username are state i need from redux

  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
