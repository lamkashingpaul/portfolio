import { useMutation } from "@tanstack/react-query";

const sendMessage = async () => {
  const res = {
    data: await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: "Message sent successfully!" });
      }, 2000);
    }),
  };
  return res.data;
};

export const useSendMessage = () => {
  const mutation = useMutation({
    mutationKey: ["messages"],
    mutationFn: sendMessage,
  });
  return mutation;
};
