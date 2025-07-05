import Modal from "react-modal";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import type { Dispatch, SetStateAction } from "react";

const AuthForm = ({
  isModelOpen,
  handleCloseModal,
  formType,
  setFormType,
  setUserData
}: {
  isModelOpen: boolean;
  handleCloseModal: () => void;
  formType: "signin" | "signup";
  setFormType: (type: "signin" | "signup") => void;
  setUserData:Dispatch<SetStateAction<any>>
}) => {

  return (
    <Modal
      isOpen={isModelOpen}
      onRequestClose={handleCloseModal}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          maxHeight: "90vh",
          overflowY: "auto", // enable vertical scroll
          width: "90vw",
          maxWidth: "600px",
        },
      }}
      contentLabel="Auth Modal"
    >
      {formType === "signin" ? (
        <SignInForm onClose={handleCloseModal} setUserData={setUserData}/>
      ) : (
        <SignUpForm onClose={handleCloseModal} setFormType={setFormType} />
      )}
    </Modal>
  );
};

export default AuthForm;
