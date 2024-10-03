import { Navigate, redirect, useNavigate } from "react-router-dom"

export default function AboutPage() {

    const navigate = useNavigate();

    const handleRedirect = () => {
        // location.href = "https://www.google.com"
        // navigate("https://google.com", { replace: true});
        redirect("https://www.google.com");
    }

    return (
        <>
            <h1>About Page</h1>

            <button onClick={handleRedirect}>Redirect</button>
        </>
    )
}