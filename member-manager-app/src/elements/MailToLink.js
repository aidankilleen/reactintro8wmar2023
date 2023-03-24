import { Link } from "react-router-dom";

export default function MailToLink ({ email }) {
    return (
        <Link
            onClick= {(evt) => {
                evt.preventDefault();
                window.location.href=`mailto:${email}`
            }}
        >{ email }</Link>
    )
}