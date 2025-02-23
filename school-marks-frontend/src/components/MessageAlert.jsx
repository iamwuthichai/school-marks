import React, { useEffect, useState } from "react";
import { message } from "antd";

export default function MessageAlert({ children, callback }) {
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (callback) {
      console.log(callback);

      messageApi.open({
        type: callback.messageType,
        content: callback.messageText,
        duration: 3,
      });
    }
  }, [callback, messageApi]);

  return <>{contextHolder}</>;
}
