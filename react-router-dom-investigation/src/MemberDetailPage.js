import { useNavigate, useParams } from "react-router-dom"
import { members } from "./members";

export default function MemberDetailPage () {

    const { id } = useParams();
    const navigate = useNavigate();
    const member = members.find(member => member.id === parseInt(id));
    const onClick = () => {
        navigate("/home");
    }
    return (
        <>
            <h2>Member Detail</h2>
            <table>
                <tr>
                    <td>Id</td><td>{ member.id }</td>
                </tr>
                <tr>
                    <td>Name</td><td>{ member.name }</td>
                </tr>
                <tr>
                    <td>Email</td><td>{ member.email }</td>
                </tr>
                <tr>
                    <td>Active</td><td>{ member.active ? "Active" : "Inactive" }</td>
                </tr>
            </table>

            <button onClick={ onClick }>Go home</button>
        </>
    )
}