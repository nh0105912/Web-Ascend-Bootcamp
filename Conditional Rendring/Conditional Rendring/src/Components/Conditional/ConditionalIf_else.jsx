import React from "react";

const ConditionalIf_else = () => {
  const isLogin = false;
  let content;

  if (isLogin) {
    content = (
      <>
        <h1>Dashboard : Logout</h1>
        <button>LogOut</button>
      </>
    );
  } else {
    content = (
      <>
        <h1>Dashboard : Login</h1>
        <button>LogIn</button>
      </>
    );
  }

  return <div>{content}</div>;
};

export default ConditionalIf_else;
