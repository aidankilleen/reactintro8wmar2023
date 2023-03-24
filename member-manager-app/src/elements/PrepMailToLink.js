import React from "react";
import { Link } from "react-router-dom";

export default function MailToLink ({ mailto, label }) {
    return (
        <>
        
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = `mailto:${mailto}`;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
        </>
    );
};
