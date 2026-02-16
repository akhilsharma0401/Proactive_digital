import { Toaster } from "react-hot-toast";

const GlobalToaster = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        duration: 3500,

        style: {
          borderRadius: "12px",
          padding: "12px 16px",
          fontSize: "14px",
          fontWeight: "500",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          backdropFilter: "blur(6px)",
        },

        success: {
          style: {
            background: "linear-gradient(135deg, #D1FAE5, #ECFDF5)",
            color: "#065F46",
            border: "1px solid #10B981",
          },
          iconTheme: {
            primary: "#10B981",
            secondary: "#ECFDF5",
          },
        },

        error: {
          style: {
            background: "linear-gradient(135deg, #FEE2E2, #FEF2F2)",
            color: "#991B1B",
            border: "1px solid #EF4444",
          },
          iconTheme: {
            primary: "#EF4444",
            secondary: "#FEF2F2",
          },
        },

        loading: {
          style: {
            background: "linear-gradient(135deg, #DBEAFE, #EFF6FF)",
            color: "#1E40AF",
            border: "1px solid #3B82F6",
          },
        },
      }}
    />
  );
};

export default GlobalToaster;
