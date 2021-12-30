import React from "react";
import { notification } from "antd";

const showErrorMessage = (description) => {
  return notification.error({
    message: "Error",
    description: description,
  });
};

const showSuccessMessage = (description) => {
    return notification.success({
      message: "Success",
      description: description,
    });
  };

  const showWarningMessage = (description) => {
    return notification.warning({
      message: "Warning",
      description: description,
    });
  };
  
const NotificationService = {
  showErrorMessage,
  showSuccessMessage,
  showWarningMessage
};

export default NotificationService
