import { useState } from "react";

export default function useLogin() {
    const [isLoading, setIsLoading] = useState(false)
const [payload, setPayload] = useState({
  email: "",
  password: "",
});
const [errorMessage, setErrorMessage] = useState("");

return (isLoading, setIsLoading, payload, setPayload, errorMessage, setErrorMessage)
}

