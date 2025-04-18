import React, { useEffect } from "react";
import AddUser from "./AddUser";

function PlaygroundPage() {
    // Scroll to top when the page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <AddUser />
        </>
    );
}

export default PlaygroundPage;
