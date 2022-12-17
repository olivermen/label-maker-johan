import React, { useState } from "react";

import { Button, Modal } from "antd";

const Login = () => {
  const [modal2Open, setModal2Open] = useState(true);
  return (
    <div>
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div>
  );
};

export default Login;
